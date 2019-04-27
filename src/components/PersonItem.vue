<template>
  <div
    class="card-item" 
    v-bind:class="{'is-selected':person.selected, 'is-disabled':person.disabled, 'is-matched':person.matched }"
    @click="pickCard" 
  >
    
      <img :src="person.thumbnail">
      <!-- <input type="checkbox" v-model="person.selected" :disabled="person.disabled == 1 ? true : false" > -->
      <div v-if="person.selected || person.matched">
        <h4>{{ person.title }}</h4>
      </div>  
    
  </div>
</template>

<script>

export default {
  name: "PersonItem",
  props: ["person"],
  methods: {
    pickCard() {
      // toggle boolean for the person.selected value
      this.person.selected = !this.person.selected;
      this.$emit('pick-card',this.person.id)
    }
  }
}
</script>


<style scoped>

  .card-item{
    font-size: 10px;
    margin: 2px;
    background-color: lightblue;
    text-align: center;
    padding: 1em;
    align-items: center;
  }
  .card-item img{
    visibility: hidden;
  }
  .card-item.is-selected img,
  .card-item.is-matched img
  {
    visibility: visible;
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

