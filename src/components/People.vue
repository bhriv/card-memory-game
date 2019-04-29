<template>
  <div id="page-people" class="container">
    
    <div class="columns">
      <div class="column is-full">
        <b-button @click="$emit('reset-deck')">Reset Deck</b-button> 
        <span class="column is-pulled-right">
          <span><strong>{{ counter_title }}:</strong> {{ count }}</span>
        </span>
      </div>
    </div>
    <div class="columns is-mobile">
      <div v-bind:key="person.id" v-for="person in deckOfPeople" class="column is-one-quarter">
        <PersonItem v-bind:person="person" @pick-card="$emit('pick-card',person)"/>
      </div>
    </div>
  </div>
</template>


<script>
// Get single tempalte
import PersonItem from './PersonItem.vue';
import store from '@/store';

export default {
  name: "People",
  components: {
    PersonItem
  },
  props: ["deckOfPeople","gameMode"],
  mounted () {
    console.log('People.vue mounted now');
    var audio = new Audio('http://bhriv.com/sites/tectonic/game/audio/card-filp.mp3');
    audio.preload;
  },
  methods: {
  },
  computed: { // retrieve current data state 
    count () { // is computation is called by {{ count }} in the template
      return store.state.count
    },
    counter_title () {
      return store.state.counter_title
    }
  },
}
</script>

<style lang="scss" scoped>


  #top_controls{
    margin-bottom: 1em;
  }
  .columns{
    flex-wrap: wrap;
  }

  .counter-2{
    
    .columns.is-mobile > .column.is-one-quarter{
      width: 16%;

      .box{
        height: 130px;
      }
    }
  }
</style>
