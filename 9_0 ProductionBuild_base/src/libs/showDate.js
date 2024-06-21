// const moment = require('moment');
// import moment from 'moment';

export function showDate() {
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  console.log(date);
}