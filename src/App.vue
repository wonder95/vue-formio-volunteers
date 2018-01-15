<template>
  <div id="app">
     <nav class="navbar is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item">CFD Volunteers</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div class="navbar-end">
        <router-link to="/" class="navbar-item r-item">Home</router-link>
        <router-link to="shifts" class="navbar-item r-item">Duty Shifts</router-link>
        <router-link to="events" class="navbar-item r-item">Special Events</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .navbar {
    background-color: #383838;
  }
  a:hover {
    color: gray;
  }
    
  .navbar-brand a {
    color: #fff;
    font-weight: bold;
  }


  .navbar-end a.r-item {
    color:#C1C1C1;
    padding: 0.5rem 1.75rem;
  }

/*+mobile
    color: gray
    &:hover
      background-color: #F1F1F1 */

  .navbar-burger span {
    background-color: #C1C1C1;
  }

  .icon {
    color: #fff;
    margin-left: 20px;
  }

</style>
