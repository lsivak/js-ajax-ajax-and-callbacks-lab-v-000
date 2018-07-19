$(document).ready(function (){
$.get( "https://api.github.com/repos/octocat", function( results ) {
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

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
   const repoList = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a> <a href="#" data-repository="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}
