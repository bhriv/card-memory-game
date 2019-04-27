<template>
  <div
    class="card-item person-item" 
    v-bind:class="{'is-selected':person.selected, 'is-disabled':person.disabled, 'is-matched':person.matched }"
    @click="markSelected" 
  >
    <p>
      <!-- @click="$emit('select-person',person.id)"  -->
      <!-- <button @click="$emit('select-person', person.id)">Select Person</button> -->
      <button class="Button" @click="addToCart(person)">Add To Cart</button>
      <img :src="person.thumbnail" :title="person.title" :alt="person.title">
      <!-- <input type="checkbox" v-model="person.selected" :disabled="person.disabled == 1 ? true : false" > -->
      
      <!-- $emit('select-person', person.id) -->
      <!-- {{person}} -->
      <div v-if="person.selected || person.matched">
        <h4>{{ person.title }}</h4>
      </div>  
    </p>
  

    
  </div>
</template>

<script>


import {_} from 'vue-underscore';

export default {
  name: "PersonItem",
  props: ["person"],
  methods: {
    markSelected() {
      console.log('markSelected')
      // toggle boolean for the person.selected value
      this.person.selected = !this.person.selected;

    },
    addToCart(item) {
      this.$emit('update-cart', person)
    }
  }
}
</script>


<style scoped>

  .card-item{
    font-size: 10px;
    width: 100px;
    float: left;
    height: 100px;
    display: block;
    margin: 2px;
    background-color: lightblue;
    text-align: center;
    padding: 1em;
    align-items: center;
  }
  h4{
    text-transform: capitalize;
  }
  img{
    margin: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>

