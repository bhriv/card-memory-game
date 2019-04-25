<template>
  <div class="card-item person-item">
    <img :src="person.picture.thumbnail">
    <h4>{{ person.name.first }} {{ person.name.last }} </h4>
    
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

