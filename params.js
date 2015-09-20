// Adapted from Stackoverflow user ellemayo's answer here:
// http://stackoverflow.com/a/11654436
function setURLParam(key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "i");
  var newSearch = location.search;

  // Is the key-value pair present in the existing search?
  if (re.test(newSearch)) {
      // Update a value
      newSearch = newSearch.replace(re, '$1' + key + "=" + value + '$2$3');
  } else {
    // Add the key and its value
    var separator = newSearch.indexOf('?') !== -1 ? '&' : '?';
    newSearch = newSearch + separator + key + '=' + value;
  }

  // Reload the page with the new search
  if (location.search === '') {
    location.replace(location.href + newSearch);
  } else {
    location.replace(location.href.replace(location.search, newSearch));
  }
}

function removeURLParam(key) {
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "i");
  var newSearch = location.search;

  if (re.test(newSearch)) {
      newSearch = newSearch.replace(re, '$1$3').replace(/(&|\?)$/, '');
      /* NOTE: The replace function of the location object is dissimilar to the
       * replace function of the string object.
       */
      location.replace(location.href.replace(location.search, newSearch));
  } else {
    console.log("removeURLParam unable to remove '" + key +"'; key not found.");
  }
}

// David Morales, http://stackoverflow.com/a/11582513
function getURLParam(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}