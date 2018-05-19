<template>
  <div class="section">
    <div class="container">
      <h1>Events</h1>
        <formio src="formio_event_url"></formio>
    </div>
  </div>
</template>

<script>
import { Formio } from 'vue-formio'

  export default {
    name: "Event",
    components: {
      'formio': Formio
    }
  }
</script>

<style scoped>

</style>