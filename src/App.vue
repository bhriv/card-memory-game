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
      <People v-bind:deckOfPeople="deckOfPeople" v-on:select-person="selectPerson" /> 
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
      selection_counter: 0
    }
  },
  methods: {
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
    gameShuffleCards: function () {
      // Cards should be shuffled at the game start to avoid cheating
      console.info('Game Shuggle Cards');
    },
    selectPerson: function (id) {
      // Cards should be shuffled at the game start to avoid cheating
      console.info('Person selected with ID:' +id);
      this.deckOfPeople[id].selected = true
      this.selection_counter = this.selection_counter+1;
    },
    checkSelection: function () {
      console.log('fired checkSelectedCards');
      let choices = _.where(this.deckOfPeople,{selected: true})
      console.log('choices: ',choices);
      if (choices[0].title === choices[1].title) {
        alert('Matched Pair Found!!')
        let matchedPairs = _.where(this.deckOfPeople,{title: choices[0].title})

        for (var i = 0; i < matchedPairs.length; i++) {
          let targetCard = _.findWhere(this.deckOfPeople,{id: matchedPairs[i].id})
          console.log('targetCard',targetCard)
          targetCard.matched = true
          targetCard.disabled = 1
        }
        setTimeout(this.resetSelection, 1000)
      }else{
        alert(':( Try again')
        setTimeout(this.resetSelection, 1000)
      }
      this.selection_counter = 0
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
        .get('https://randomuser.me/api/?inc=name,picture&results=4&nat=us')
        // .get('https://evtask.t12y.net/assets')
        .then(response => {
          console.log(response.data.results)
          let randomPeople = response.data.results;
          for (var i = 0; i < randomPeople.length; i++) {
            randomPeople[i].id = i;
            randomPeople[i].title = randomPeople[i].name.first+'-'+randomPeople[i].name.last
            randomPeople[i].selected = false
            randomPeople[i].matched = false
          }
          this.deckOfPeople = randomPeople
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
    deckOfCards: function(newValue, oldValue) {
      console.log('deckOfCards: Watch fired')
      console.log('PREV deckOfCards: ',oldValue)
      console.log('UPDATED deckOfCards: ',newValue)
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
