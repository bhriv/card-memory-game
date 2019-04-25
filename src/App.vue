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

// App 
export default {
  name:"app",
  components: {
    Header,
    Footer
  },
  data() {
    return {
    }
  },
  methods: {
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
