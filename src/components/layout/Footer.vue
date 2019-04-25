<template>
  <footer class="footer">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  footer {
    flex-shrink: 0;
    font-size: 12px
  }
</style>


