<template>
  <div class="home content">
    <h1>Card Deck Table</h1>
    <button @click="$emit('reset-people')">Start Over (people)</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/Cards.vue'

export default {
  name: 'home',
  components: {
    Cards
  }
}
</script>
