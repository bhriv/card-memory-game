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
      <People v-bind:deckOfPeople="deckOfPeople" /> 
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
      people_api_loading: true
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
    
  },
  watch: {
    deckOfCards: function(newValue, oldValue) {
      console.log('deckOfCards: Watch fired')
      console.log('PREV deckOfCards: ',oldValue)
      console.log('UPDATED deckOfCards: ',newValue)
    }
  },
  mounted () {
    console.log('App mounted now');
    console.log(this.deckOfCards);

    axios
      .get('https://randomuser.me/api/?inc=name,picture&results=4&nat=us')
      // .get('https://evtask.t12y.net/assets')
      .then(response => {
        console.log(response.data.results)
        let randomPeople = response.data.results;
        for (var i = 0; i < randomPeople.length; i++) {
          randomPeople[i].id = i;
        }
        this.deckOfPeople = randomPeople
      })
      .catch(error => {
        console.log(error)
        this.people_api_error = true
        this.people_api_error_msg = error
      })
      .finally(() => setTimeout(this.people_api_loading = false, 1000) )
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
