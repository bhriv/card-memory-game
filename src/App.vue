<template>
  <div id="app">
    <Header />

    <router-view/>

    <section v-if="people_api_error">
      <p>We're not able to retrieve random Person data from the API at this moment. The following reason was given: <span class="error">{{ people_api_error_msg }}</span></p>
      <p>Fallback data will be used for the game.</p>
      <Cards v-bind:deckOfCards="deckOfCards" /> 
    </section>

    <section v-else>
      <div v-if="people_api_loading">Loading data...</div>
      <People 
        v-bind:deckOfPeople="deckOfPeople" 
        v-on:select-person="selectPerson" 
        v-on:reset-people="createDeckOfPeople" 
        v-on:check-selection="checkSelection" 
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

// Vendor
import axios from 'axios';
import {_} from 'vue-underscore';

// App 
export default {
  name:"app",
  components: {
    Header,
    Footer,
    Cards,
    People
  },
  data() {
    return {
      deckOfCards: initCardDeck(),
      deckOfPeople: null,
      people_api_error: false,
      people_api_error_msg: null,
      people_api_loading: true,
      selection_counter: 0,
      pairs_to_match: 3
    }
  },
  methods: {
    updateCart: function (){
      console.log('updateCart in App.vue')
    },
    gameStarted: function () {
      // New game stared. User can read instructions prior to starting timer
      console.info('Game started');
    },
    gameEnded: function () {
      // fire at the end of the game. Use to trigger posting the results
      console.info('Game ended');
    },
    gameTimeout: function () {
      // @TODO - possibly have a setting for max time each game
      console.info('Game Timeout - timer ended');
    },
    gameFail: function () {
      // @TODO - possibly have a setting for max wrong answers
      console.info('Game fail - too many wrong answers');
    },
    selectPerson: function (id) {
      // Cards should be shuffled at the game start to avoid cheating
      console.info('selectPerson fired - with ID: ' +id);
      this.deckOfPeople[id].selected = true
      // console.log(this.deckOfPeople[id].title)
      // this.selection_counter = this.selection_counter+1;
    },
    checkSelection: function () {
      console.log('fired checkSelectedCards');
      // let choices = _.where(this.deckOfPeople,{selected: true})
      // console.log('choices: ',choices);
      // if (choices[0].title === choices[1].title) {
      //   alert('Matched Pair Found!!')
      //   let matchedPairs = _.where(this.deckOfPeople,{title: choices[0].title})

      //   for (var i = 0; i < matchedPairs.length; i++) {
      //     let targetCard = _.findWhere(this.deckOfPeople,{title: matchedPairs[i].title})
      //     console.log('targetCard',targetCard)
      //     targetCard.matched = true
      //     targetCard.disabled = 1
      //   }
      //   setTimeout(this.resetSelection, 3000)
      // }else{
      //   alert(':( Try again')
      //   setTimeout(this.resetSelection, 3000)
      // }
      // this.selection_counter = 0
    },
    resetSelection() {
      console.log('resetSelection')
      for (var i = 0; i < this.deckOfPeople.length; i++) {
        console.log(this.deckOfPeople[i]);
        this.deckOfPeople[i].selected = false
      }
    },
    createDeckOfPeople: function () {
      console.log('createDeckOfPeople')
      axios
        .get('https://randomuser.me/api/?inc=name,picture&results='+this.pairs_to_match+'&nat=us')
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
              thumbnail: peopleData[i].picture.thumbnail,
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
    },
    selection_counter: function () {
      if(this.selection_counter >1) this.checkSelection()
    }
  },
  mounted () {
    console.log('App mounted now');
    console.log(this.deckOfCards);
    this.createDeckOfPeople()
  },
  created() {
    console.log('App created now');
  }
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

<style>

  html, body {
    height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .content {
    flex: 1 0 auto;
  }
  
</style>
