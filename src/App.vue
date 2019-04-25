<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Cards from './components/Cards';

// App 
export default {
  name:"app",
  components: {
    Header,
    Footer,
    Cards
  },
  data() {
    return {
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
  },
  mounted () {
    console.log('App mounted now');
  },
  created() {
    console.log('App created now');
  }
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
