var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");


btnTranslate.addEventListener(
    "click",
    function clickEventListener(){
        console.log("Clicked!")
        console.log("Input:",txtInput.value)
    }
)
