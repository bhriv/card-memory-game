<template>
  <div id="page-people" class="container">
    <strong>{{ counter_title }}:</strong> {{ count }}

    <button @click="$emit('reset-people')">Reset Deck</button>
      <div class="columns is-mobile">
        <div v-bind:key="person.id" v-for="person in deckOfPeople" class="column is-one-quarter">
          <PersonItem v-bind:person="person" @pick-card="$emit('pick-card',person.id)"/>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.columns{
  flex-wrap: wrap;
}
</style>
