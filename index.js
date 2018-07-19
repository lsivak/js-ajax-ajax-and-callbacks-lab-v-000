$(document).ready(function (){
$.get( "index.html", function( results ) {
  $( ".searchTerms" ).html( results );
  alert( "Load was performed." );
});
$.get("this_doesnt_exist.html", function(data) {
// This will not be called because the .html file request doesn't exist
displayError();
}).fail(function(error) {
// This is called when an error occurs
console.log("I'm sorry, there's been an error. Please try again.");
});
})
