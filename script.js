function setValue(num){
    document.getElementById('disp').value += num;
    console.log(num);
}
function clearDisplay(){
    console.log("clear");
    document.getElementById('disp').value ='';
}
function bequal(){
    var text=document.getElementById('disp')

    var result=eval(text.value)
    
    document.getElementById('disp').value=result
}



   