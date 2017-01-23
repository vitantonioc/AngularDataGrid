$( document ).ready(function() {
 $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 5, // Creates a dropdown of 15 years to control year
    format: 'dd/mm/yyyy'
  }); 
    $('.materialboxed').materialbox();
});