//These are the functions that we'll use later on to interact with the HTML page
//
function addHtmlToPage(content) {
  var div = document.createElement('div');
  div.innerHTML = content;
  storyDiv.appendChild(div);
}

function addTextToPage(content) {
  var p = document.createElement('p');
  p.textContent = content;
  storyDiv.appendChild(p);
}
