window.utils = {};   // Global variable storing aluils

// Get query string as an object
utils.getQuerystringAsObject = function () {
  var res = {};

  var qs = document.location.search.substring(1).split('&');
  qs.forEach(function (k) {
    if (k.split('=')[0].length !== 0) {
      res[k.split('=')[0]] = k.split('=')[1];
    }
  });

  return res;
}
