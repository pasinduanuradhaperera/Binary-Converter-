function Convert(){
    let decimal = document.getElementById("dec").value; 
    let Decimal = decimal,binary="",place;
   
    
    for(var i = 0; Decimal > 0;i++){
        place = Decimal % 2;
        Decimal = (Decimal - place)/2;
        binary = place+binary;
        
    }
    document.getElementById("bin").value = binary; 
}
function Reset(){
    document.getElementById("dec").value = null;
    document.getElementById("bin").value = null;
}