<template>
  <div class="section">
    <div class="container">
      <h1>Add Volunteer</h1>
      <formio src="https://nutmvrwoblsalot.form.io/volunteer"></formio>
    </div>
  </div>
</template>

<script>
  import { Formio } from "vue-formio";

  export default {
    name: "Volunteer",
    components: {
      formio: Formio
    }
  };
</script>

<style scoped>
</style>
