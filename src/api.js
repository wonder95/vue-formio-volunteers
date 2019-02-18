import Formio from 'formiojs'
import FormioConfig from './config.js'

export default {
  //TODO: pass in parameters to specify beginning and end of month.
  getShifts: function(startDate, endDate) {
    return (new Formio(FormioConfig.project + '/shift/submission')).loadSubmissions({
      params: {
         'data.shiftDate__gt': startDate,
         'data.shiftDate__lt': endDate
      }
      })
    .then(function (shifts) {
      return shifts;
    });
  }
}
