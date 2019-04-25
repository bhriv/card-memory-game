<template>
  <div class="home">
    <Cards />
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
