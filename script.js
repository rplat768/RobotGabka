
  function ShowContent(contentName) {
    
    if(!contentName)
      return false;
      
    var element = document.getElementById("content");
    InjectElementContent(element, contentName);
    
    return false;
  }
  
  function InjectElementContent(element, fileName) {
  
    if(!fileName)
      return;
      
    var request = new XMLHttpRequest();
    
    request.open('GET', fileName, true);
    //request.setRequestHeader("Cache-Control", "no-cache, no-store");
    request.onreadystatechange = function() {
        
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        
        element.innerHTML = this.responseText;
    };
    request.send();
  }