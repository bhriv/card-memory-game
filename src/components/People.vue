<template>
  <div id="page-people" class="container">
    <button @click="$emit('reset-people')">Reset Deck</button>

    <b-field>
        <b-numberinput step="2" min="4" max="12" @click="increment">
        </b-numberinput>
    </b-field>

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
    increment: function (){
      console.log('increment fired')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.columns{
  flex-wrap: wrap;
}
</style>
