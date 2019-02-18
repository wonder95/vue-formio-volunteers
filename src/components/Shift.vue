<template>
  <div class="section">
    <div class="container">
      <h1>Add Shift</h1>
      <formio src="https://nutmvrwoblsalot.form.io/shift"></formio>
    </div>
  </div>
</template>

<script>
  import { Formio } from "vue-formio";

  export default {
    name: "Shift",
    components: {
      formio: Formio
    }
  };
</script>

<style scoped>
</style>
