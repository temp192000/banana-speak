var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translateURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Some Error Occured", error);
}

function clickHandler(){
    var text = txtInput.value;
    fetch(translateURL(text)).then(response => response.json()).then(json => {
        var txtTranslated = json.contents.translated;
        output.innerText = txtTranslated;
    }).catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandler);
