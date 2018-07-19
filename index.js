
function searchRepositories() {
const searchTerms = $('#searchTerms').val()

$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function( data) {
  $( "#results" ).html( data );
  alert( "Load was performed." );
}).fail(function(error) {
  displayError()
// This is called when an error occurs
console.log("I'm sorry, there's been an error. Please try again.");
});
}



function showRepositories() {
  const repos = JSON.parse(this.responseText)
   const repoList = `<ul>${repos.map(r => '<li><a href="' + r.html_url + '">' + r.name + '</a> <a href="#" data-repository="' + r.name + '" onclick="showCommits(this)">Show Commits</a></li>').join('')}</ul>`
  document.getElementById("repositories").innerHTML = repoList
}

function showCommits(el) {
   $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function (data) {
     $( "#details" ).html( data );
     displayError();
     }).fail(function(error) {
     // This is called when an error occurs
     console.log("I'm sorry, there's been an error. Please try again.");
     });
     }


function displayCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.sha + '</strong> - '  +  commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList

}
$(document).ready(function (){
});
