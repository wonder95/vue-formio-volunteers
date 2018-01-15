<template>
  <div class="section">
    <div class="container">
      <Calendar
        :first-day="1"
        :all-events="events"
      ></Calendar>
    </div>
  </div>
</template>

<script>
  import {Calendar} from 'vue-bootstrap-calendar';
  import {i18n} from 'vue-i18n';

  export default {
    name: 'DutyShifts',
    data () {
      return {
        events: []
      }
    },
    components: {
      Calendar
    },
    mounted () {
      let me = this;
      setTimeout(function () {
        me.events = [ // you can make ajax call here
          {
            id:1,
            title:'Event 1',
            color: 'panel-danger',
            date: new Date()
          },
        ];
      }, 1000);
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
