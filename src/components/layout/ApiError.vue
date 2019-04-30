<template>
  <div class="container">
    <div class="notification has-text-danger">
      <p><strong>API Error</strong>: Data pulled from the API is not available at this moment. The following reason was given: <span class="error">{{ api_loading_error_msg }}</span></p>
      <p>Fallback data will be used for the game.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "ApiError"
}
</script>


