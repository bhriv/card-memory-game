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
    position: absolute;
    bottom: 0;
    padding: 1em;
    text-aligh: center;
    width: 100%;
    font-size: 12px
  }
</style>


