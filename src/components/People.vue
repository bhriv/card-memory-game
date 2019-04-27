<template>
  <div>
    <button @click="$emit('reset-people')">Reset Deck</button>
    <button @click="$emit('check-selection')">Check Selections</button>
    
    <div v-bind:key="person.id" v-for="person in deckOfPeople">
      <PersonItem 
      v-bind:person="person" 
      v-on:select-person="$emit('select-person',person.id)" 
      />
    </div>
  </div>
</template>


<script>
// Get single tempalte
import PersonItem from './PersonItem.vue';

export default {
  name: "People",
  components: {
    PersonItem
  },
  props: ["deckOfPeople"],
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
</style>
