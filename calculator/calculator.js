//calculator
const display=document.getElementById("display");
function showInDisplay(input){
    display.value+=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR"
    }
}
function deleteOne() {
    const currentValue = display.value.toString();
    if (currentValue) {
      display.value = currentValue.slice(0, -1);
    }
  }
  function allClear(){
    display.value="";
}
