<template>
  <section>
    <div class="portrait-notification">
      <b-notification
          type="is-danger"
          aria-close-label="Close notification"
          role="alert">
          Please rotate your device to landscape mode to enjoy the game.
      </b-notification>
    </div>

    <div v-if="apiLoadingInProgress">
      <b-notification aria-close-label="Close notification" role="alert">
        Loading Data
      </b-notification>
    </div>

    <div v-if="getApiLoadingError">
      <b-notification type="is-danger" aria-close-label="Close notification" role="alert">
        <strong>API Error</strong>: Check your internet connection and reload the page.</span>
      </b-notification>
    </div>
  </section>

</template>

<style lang="scss" scoped>
</style>

<script>
import store from '@/store';

export default {
  name: "Notifications",
  methods: {
  },
  mounted () {
    console.log('Notifications mounted now');
  },
  computed: { // retrieve current data state 
    apiLoadingInProgress () { // is computation is called by {{ count }} in the template
      return store.state.api_loading_in_progress
    },
    getApiLoadingError () { // is computation is called by {{ count }} in the template
      return store.state.api_loading_error
    },
  },
}
</script>


