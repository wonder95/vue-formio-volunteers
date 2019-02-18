const PROJECT_URL = "https://nutmvrwoblsalot.form.io";
const API_URL = "https://api.form.io";

module.exports = {
  project: PROJECT_URL,
  apiUrl: API_URL,
  forms: {
    login: PROJECT_URL + '/login',
    register: PROJECT_URL + '/volunteer/register'
  },
  resources: {
    user: PROJECT_URL + '/user',
    event: PROJECT_URL + '/event',
    shift: PROJECT_URL + '/shift',
    apparatus: PROJECT_URL + '/apparatus',
  }
};
