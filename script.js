const display= document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = " ";
}
function Calculate(){
    try{
        display.value= eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
function Del(){
    display.value = display.value.slice(0, -1);
}