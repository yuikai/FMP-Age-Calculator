const app = new Vue({
  el: '#app',

  data: {
    day: null,
    month: null,
    year: null,

    rDay: '--',
    rMonth: '--',
    rYear: '--',

    states: [ true, true, true ],
  },
  computed: {
    eDay() {
      if ( !this.day ) return 'This field is required';
      if ( this.day > 31 || this.day < 1 ) return 'Must be valid day';
      return '';
    },
    eMonth() {
      if ( !this.month ) return 'This field is required';
      if ( this.month > 12 || this.month < 1 ) return 'Must be valid month';
      return '';
    },
    eYear() {
      if ( !this.year ) return 'This field is required';
      if ( this.year > new Date().getFullYear ) return 'Must be in the past';
      return '';
    },
  },

  methods: {
    calculate() {
      if ( !(this.eDay === '') ) this.states[0] = false;
      if ( !(this.eMonth === '') ) this.states[1] = false; 
      if ( !(this.eYear === '') ) this.states[2] = false;

      
    },
  },
});