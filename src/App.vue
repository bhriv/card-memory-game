<template>
  <div id="app">
    <Header />
    <router-view/>

    <section v-if="people_api_error">
      <ApiError />
      <Cards v-bind:deckOfCards="deckOfCards" /> 
    </section>

    <section v-else>
      <div v-if="people_api_loading">
      Loading data...
      <div class="loading"></div>
    </div>
      <People 
        v-on:reset-people="createDeckOfPeople" 
        v-bind:deckOfPeople="deckOfPeople" 
        @pick-card="pickCard"
      /> 
    </section>

    <Footer />
  </div>
</template>

<script>

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cards from './components/Cards';
import People from './components/People';
import ApiError from './components/layout/ApiError';
import store from './store';

// Vendor
import axios from 'axios';
import {_} from 'vue-underscore';

const deck_deal = new Audio('http://bhriv.com/sites/tectonic/game/audio/Card-flip-sound-effect.mp3');
deck_deal.preload;

const success_audio = new Audio('http://bhriv.com/sites/tectonic/game/audio/success.mp3');
success_audio.preload;


// App 
export default {
  name:"app",
  components: {
    Header,
    Footer,
    Cards,
    People,
    ApiError
  },
  data() {
    return {
      deckOfCards: initCardDeck(),
      deckOfPeople: null,
      people_api_error: false,
      people_api_error_msg: null,
      people_api_loading: true,
      pairs_to_match: store.state.pairs,
      radio: "Jack",
      // gameMode: 'Yes'
    }
  },
  created() {
    console.log('App created now');
    console.log('count: '+store.state.count) // -> 1
  },
  mounted () {
    console.log('App mounted now');
    this.gameStart()
  },
  // computed: {
  //   switchMode: function(){
  //     console.log('switchMode')
  //     // this.$emit('pick-card',this.person.id)
  //   }
  // },
  methods: {
    gameStart: function () {
      // New game stared. User can read instructions prior to starting timer
      console.info('Game started');
      store.commit('incrementGameCount')
      console.log(this.deckOfCards);
      this.createDeckOfPeople()
      // deck_audio.play();
    },
    gameEnded: function () {
      // fire at the end of the game. Use to trigger posting the results
      console.info('Game ended');
      success_audio.play();
      store.commit('incrementPairsCount')
      this.$dialog.confirm({
        title: 'You Did It!',
        message: 'Play Again?',
        onConfirm: () => this.gameStart()
      })
    },
    gameTimeout: function () {
      // @TODO - possibly have a setting for max time each game
      console.info('Game Timeout - timer ended');
    },
    gameFail: function () {
      // @TODO - possibly have a setting for max wrong answers
      console.info('Game fail - too many wrong answers');
    },
    pickCard: function (){
      console.log('App.vue pickCard fired')
      let choices = _.where(this.deckOfPeople,{selected: true})
      if(choices.length == 2) this.checkSelections(choices)
    },
    checkSelections: function (choices) {
      console.log('fired checkSelectedCards',choices);
      for (var i = 0; i < choices.length; i++) {
        if (choices[0].title === choices[1].title) {
          console.log('Matched Pair Found!!')
          choices[0].matched = true
          choices[0].disabled = 1
          choices[1].matched = true
          choices[1].disabled = 1
        }else{
          setTimeout(function () {
            deck_audio.play();
          }, 1950)
        }
        setTimeout(function () {
          choices[0].selected = false
          choices[1].selected = false
        }, 2000)
      }
      if (_.find(this.deckOfPeople,{matched: false}) ) {
        console.log('keep going') 
      }else{
        console.log('Game Over !****')
        this.gameEnded()
      }
    },
    createDeckOfPeople: function () {
      console.log('createDeckOfPeople')
      axios
        .get('https://randomuser.me/api/?inc=name,picture&results='+this.pairs_to_match*store.state.count+'&nat=us')
        // .get('https://evtask.t12y.net/assets')
        .then(response => {
          // console.log(response.data.results)
          
          this.deckOfPeople = response.data.results;
          // Create Double Stack Deck
          let peopleData = this.deckOfPeople.concat(this.deckOfPeople);
          
          for (var i = 0; i < peopleData.length; i++) {
            peopleData[i] = {
              id: i,
              title: peopleData[i].name.first+'-'+peopleData[i].name.last,
              thumbnail: peopleData[i].picture.medium,
              selected: false,
              matched: false,
              disabled: false
            }
          }
          
          // Separate Memory Game Data from API Data for future expansion
          // Avoid duplicated ID
          let memoryData = [];

          for (var j = 0; j < peopleData.length; j++) {
           memoryData[j] = {
              id: j,
              title: peopleData[j].title, 
              thumbnail: peopleData[j].thumbnail, 
              selected: false,
              matched: false,
              disabled: false
            }
          }

          this.deckOfPeople = _.shuffle(memoryData);

          deck_deal.play()
          console.log('deck of People with memoryData',memoryData)
          // Shuffle Deck
          
        })
        .catch(error => {
          console.log(error)
          this.people_api_error = true
          this.people_api_error_msg = error
        })
        .finally(() => setTimeout(this.people_api_loading = false, 1000) )
    }
  },
  watch: {
    deckOfPeople: function(newValue, oldValue) {
      console.log('deckOfPeople: Watch fired')
      // console.log('PREV deckOfCards: ',oldValue)
      // console.log('UPDATED deckOfCards: ',newValue)
    }
  },
}



// FUNCTIONS OUTSIDE OF APP - TO PERSIST DATA MODEL
// Used to reset the data to resart the game
function initCardDeck() {
  console.log('initCardDeck')

  return [
    {
      id: 0,
      title: "Ace",
      selected: false,
      disabled: 0,
      matched: false
    },
    {
      id: 1,
      title: "King",
      selected: false,
      disabled: 0,
      matched: false
    },
    {
      id: 2,
      title: "Queen",
      selected: false,
      disabled: 0,
      matched: false
    },
    {
      id: 3,
      title: "Jack",
      selected: false,
      disabled: 0,
      matched: false
    }
  ] 
}
</script>

<!-- Use Material Design Icons -->
<style type="text/css" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"></style>
<!-- Bulma / Buefy Styles -->
<style lang="scss">
  @import "./sass/all";
</style>
