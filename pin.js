function getpin(){
    const pin =Math.round(Math.random()*10000) ;
    const pinstring = pin + '';
    if(pinstring.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
}



function genaretPin(){
    const pin = getpin();
    document.getElementById('pin-input').value = pin;
    
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const clas = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            clas.value = '';
        }
        
    }
    else{
       
        const privousNumber = clas.value;
        const newNumber = privousNumber + number ;
    
        clas.value = newNumber;
    }
   
})
document.getElementById('submit-btn').addEventListener('click',function(){
    const pin =document.getElementById('pin-input').value;
    const typeNumber = document.getElementById('typed-numbers').value;
    const susses =  document.getElementById('susses-Magsess')
    const fillErorr = document.getElementById('pin-faild')
    if(pin==typeNumber){
    
     susses.style.display = 'block';
     fillErorr.style.display = 'none'
    }
    else{
        susses.style.display = 'none';
      fillErorr.style.display = 'block'
    }
})
