goog.provide('utilities.client');

goog.require('goog.net.XmlHttp');
goog.require('goog.net.EventType');

// Async require
var require = function(name) {
  if (document.readyState == 'complete') {
    console.log(name)
    var xhr = goog.net.XmlHttp()
    xhr.open('GET', goog.getPathFromDeps_(name), false)
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.text = xhr.responseText
        document.head.appendChild(script)
      }
    }
    xhr.send()
  } else {
    goog.require(name)
  }
}