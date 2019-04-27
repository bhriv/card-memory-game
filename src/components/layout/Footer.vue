<template>
  <section class="section">
    <footer class="container has-text-centered">
      <p>
        <router-link to="/">
        <b-icon icon="home" size="is-small"></b-icon> Home
        </router-link> |

        <router-link to="/about">
          <b-icon icon="alarm_on" size="is-small"></b-icon> About
        </router-link>
      </p>
      <p>
        <strong>Memory Game</strong> by <a href="https://github.com/bhriv">Benjamin Richards IV</a>.
      </p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Header"
}
</script>

