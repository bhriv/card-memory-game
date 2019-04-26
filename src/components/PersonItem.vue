<template>
  <div 
    class="card-item person-item" 
    v-bind:class="{'is-selected':person.selected, 'is-disabled':person.disabled, 'is-matched':person.matched } "
    @click="$emit('select-person', person.id)"
  >
    <img :src="person.picture.thumbnail">
    <div v-if="person.selected || person.matched">
      <h4>{{ person.name.first }} {{ person.name.last }} </h4>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "PersonItem",
  props: ["person"],
  methods: {
  }
}
</script>


<style scoped>

  .card-item{
    cursor: pointer;
    font-size: 10px;
    width: 100px;
    height: 100px;
    float: left;
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
  }
</style>

