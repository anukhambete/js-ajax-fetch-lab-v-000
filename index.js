function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  const token = 'e414428b0822b1d75093336e629bb5b0a411877e';
  return token;

  // //return '';
}

function forkRepo() {
  //const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  //const token = getToken();
  //debugger
  // const postData = {
  //   body: 'Great stuff'
  // };
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      headers: {
      	"Authorization": `token ${getToken()}`
      }
    }
  ).then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {
  debugger
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
