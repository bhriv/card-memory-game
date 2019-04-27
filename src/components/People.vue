<template>
  <div class="container">
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

export default {
  name: "People",
  components: {
    PersonItem
  },
  props: ["deckOfPeople"],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.columns{
  flex-wrap: wrap;
}
</style>
