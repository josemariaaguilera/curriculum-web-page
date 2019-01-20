function deleteAdds(){
    var body = document.getElementsByTagName("body")[0];
    var footer = null;

    if(body !== undefined){
        footer = body.querySelectorAll("div[style]")[0];

        if(footer !== undefined && footer.tagName == 'DIV'){
            body.removeChild(footer);
        } else {
            console.error("error trying to delete the element")
        }

    }else{
        console.error("body not loaded");
    }
}


if(window.location.origin !== 'file://'){
  document.addEventListener("DOMContentLoaded", deleteAdds);
}
