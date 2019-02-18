<template>
  <div class="section">
    <div class="container">
      <Calendar
        :first-day="0"
        :all-events="events"
        :displayWeekNumber="true"
        :customDayContent="true"
      >
        <p slot="customDay">Custom slot content</p>
      </Calendar>
    </div>
  </div>
</template>

<script>
import { Calendar } from 'vue-bootstrap4-calendar'
import { i18n } from 'vue-i18n'
import api from '@/api'
import {CHANGE_MONTH} from '../actions'
import moment from 'moment'

export default {
  name: 'DutyShifts',
  data() {
    return {
      events: []
    }
  },
  components: {
    Calendar
  },
  methods: {
    getMonthShifts (newMonth) {
      const self = this;
      // Clear out any events from last time we were here.
      self.events = [];
      const startDate = newMonth.format();
      const endDate = newMonth.endOf('month').format();
      // Query the api.
      api.getShifts(startDate, endDate).then(function(response) {
        const events = [];
        response.forEach(shift => {
          var event = {
            id: shift._id,
            date: shift.data.shiftDate,
            color: 'card-success card-inverse',
            title: shift.data.station
          };
          self.events.push(event);
        });
      })
    }
  },
  mounted() {
// Create dates to pass to api.
    this.$root.$on(CHANGE_MONTH, (newMonth) => {
      this.getMonthShifts(newMonth);
    })
  },
  created () {
    this.getMonthShifts(moment().startOf('month'));
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
