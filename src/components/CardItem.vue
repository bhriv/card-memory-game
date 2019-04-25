<template>
  <div class="card-item">
    {{card.title}}
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: ["card"],
  methods: {
  }
}
</script>


<style scoped>
  .card-item{
    width: 100px;
    height: 100px;
    float: left;
    margin: 2px;
    background-color: lightgray;
    text-align: center;
    padding: 1em;
  }
</style>

