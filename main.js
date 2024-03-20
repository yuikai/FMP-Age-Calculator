const app = new Vue({
  el: '#app',

  data: {
    day: null,
    month: null,
    year: null,

    eDay: '',
    eMonth: '',
    eYear: '',

    rDay: '--',
    rMonth: '--',
    rYear: '--',

    valid: [ true, true, true ],

    errorMsgs: {
      empty: 'This field is required',
      day: 'Must be a valid day',
      month: 'Must be a valid month',
      year: 'Must be in the past',
    }
  },
  
  methods: {
    setValid( id, valid ) {
      this.valid[id] = valid;
    },
    validate() {
      if ( !this.day ) {
        this.eDay = this.errorMsgs.empty;
      } else if ( this.day > 31 || this.day < 1 ) {
        this.eDay = this.errorMsgs.day;
      } else {
        this.eDay = '';
      }

      if ( !this.month ) {
        this.eMonth = this.errorMsgs.empty;
      } else if ( this.month > 12 || this.month < 1 ) {
        this.eMonth = this.errorMsgs.month;
      } else {
        this.eMonth = '';
      }

      if ( !this.year ) {
        this.eYear = this.errorMsgs.empty;
      } else if ( this.year > new Date().getFullYear() ) {
        this.eYear = this.errorMsgs.year;
      } else {
        this.eYear = '';
      }

      var inputDate = new Date( this.year + '/' + this.month + '/' + this.day );
      
      if ( isNaN(inputDate) ) {
        if ( this.eDay === '' ) {
          this.eDay = this.errorMsgs.day;
        }
        if ( this.eMonth === '' ) {
          this.eMonth = this.errorMsgs.month;
        }
        if ( this.eYear === '' ) {
          this.eYear = this.errorMsgs.year;
        }
      }

      if ( inputDate > new Date() ) {
        this.eYear = this.errorMsgs.Year;
      }

      if ( this.eDay === '' && this.eMonth === '' && this.eYear === '' ) {
        this.setValid(0, true);
        this.setValid(1, true);
        this.setValid(2, true);
        
        return true;
      } else {
        if ( !(this.eDay === '') ) {
          this.setValid(0, false);
        }
        if ( !(this.eMonth === '') ) {
          this.setValid(1, false);
        }
        if ( !(this.eYear === '') ) {
          this.setValid(2, false);
        }
        return false;
      }
    },
    calculate() {
      if ( this.validate() ) {
        var age = new Date( new Date() - new Date( this.year + '/' + this.month + '/' + this.day ) );

        this.rDay = age.getDate();
        this.rMonth = age.getMonth();
        this.rYear = age.getFullYear();
      } else {
        this.rDay = '--';
        this.rMonth = '--';
        this.rYear = '--';
      }
    },
  },
});