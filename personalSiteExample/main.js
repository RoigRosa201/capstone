console.log("Hello world")

const externalLink = document.querySelector('#external_link');

externalLink.addEventListener('click', function(e) {
  e.preventDefault();
  const link = e.target.href;

  const navigateAway = confirm("Are you sure you want to navigate away from this website?");

  if(navigateAway) {
    window.location = link;
  }
})