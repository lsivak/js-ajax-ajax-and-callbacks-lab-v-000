$(document).ready(function (){
});
const searchRepositories = () => {
const searchTerms = $('#searchTerms').val()

$.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function( results) {
  $( "#searchTerms" ).html( results );
  alert( "Load was performed." );

$.get("error", function(data) {
// This will not be called because the .html file request doesn't exist
displayError();
}).fail(function(error) {
// This is called when an error occurs
console.log("I'm sorry, there's been an error. Please try again.");
});
})
}


function resultsData = (results) => {
  return `
      <div>
        <h2><a href="${results.html_url}">${results.name}</a></h2>
        <p><a href="#" data-repository="${results.name}" data-owner="${results.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p>${results.description}</p>
      </div>
      <hr>
    `
}

function getCommits(el) {
  const name = el.dataset.repository
  const req = new XMLHttpRequest()
  req.addEventListener("load", showCommits)
  req.open("GET", 'https://api.github.com/repos/octocat/' + name + '/commits')
  req.send()

}

function showCommits() {
  const commits = JSON.parse(this.responseText)
  const commitsList = `<ul>${commits.map(commit => '<li><strong>' + commit.commit.author.name + '</strong> - '  +  commit.author.login  + commit.commit.message + '</li>').join('')}</ul>`
  document.getElementById("details").innerHTML = commitsList

}
