<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Memory Game
        </h1>
        <h2 class="subtitle">
          Test your memory skills
        </h2>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Header"
}
</script>


