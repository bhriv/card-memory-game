<template>
  <div
    class="box has-background-white-ter" 
    v-bind:class="{'is-selected':person.selected, 'is-disabled':person.disabled, 'is-matched':person.matched }"
    @click="pickCard" 
  >
    
    
    <div v-if="person.selected || person.matched">
      <h4>{{ person.title }}</h4>
      <img :src="person.thumbnail">
    </div>  
    
  </div>
</template>


<style lang="scss" scoped>
  .box{
    min-height: 100px;
    
    img{
      border-radius: 50%;
      visibility: hidden;
    }
    &.is-selected{
      img{
        visibility: visible;
      }
    }
    &.is-matched{
      img{
        visibility: visible;
      }
    }
  }
</style>

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




