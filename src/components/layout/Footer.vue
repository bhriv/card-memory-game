<template>
  <section class="section">
    <footer class="container has-text-centered">
      <p>
        <router-link to="/">
        <b-icon icon="home" size="is-small"></b-icon> Home
        </router-link> |

        <router-link to="/about">
           About
        </router-link>
      </p>
      <p>
        <small><strong>Created</strong> by <a href="https://github.com/bhriv">Benjamin Richards IV</a></small>
      </p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>

