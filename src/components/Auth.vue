<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <div class="panel panel-default login-container">
          <div class="panel-heading">Login</div>
          <div class="panel-body">
            <formio :src="loginForm" v-on:submit="authSubmit"/>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="panel panel-default register-container">
          <div class="panel-heading">Register</div>
          <div class="panel-body">
            <formio :src="registerForm" v-on:submit="authSubmit"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from "../config";

  export default {
    name: "Auth",
    data: () => ({
      loginForm: config.forms.login,
      registerForm: config.forms.register,
      staffRegisterForm: config.forms.staffRegister
    }),
    methods: {
      authSubmit(submission) {
        this.$router.push("/");
      }
    }
  };
</script>
