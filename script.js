var urlObj = new window.URL(window.location.href);
var aboutBlankURL = "about:blank";
var directURL = "unblocker.html";
var url;

if (urlObj.searchParams.has("url")) {
  url = urlObj.searchParams.get("url");
} else {
  url = directURL;
}

if (url) {
  var win;

  document.getElementById('playButton').onclick = function() {
    if (win) {
      win.focus();
    } else {
      win = window.open();
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }
    document.getElementById('playButton').style.backgroundColor = '#808080';
    document.getElementById('playButton').innerHTML = 'Playing';
  };
}
