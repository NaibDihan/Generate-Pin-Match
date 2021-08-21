function generatePin(){
  const autoPin = Math.round(Math.random()*10000);
  autoPinString = autoPin + '';
  if(autoPinString.length==4){
    document.getElementById('pin-show').value= autoPinString;
  }
  
}

document.getElementById('clicked-number').addEventListener('click',function(event){
    const numberClicked = event.target.innerText;
    const clickedInput = document.getElementById('clicked-numberShow');
    if(isNaN(numberClicked)){
        if(numberClicked == 'C')
        {
            clickedInput.value='';
        }
    }
    else{
        const previousClicked = clickedInput.value;
        const newClicked = previousClicked + numberClicked;
        clickedInput.value = newClicked ;
    }
    
});

function verifyPin()
{
    if(document.getElementById('pin-show').value == document.getElementById('clicked-numberShow').value)
    {
        document.getElementById('success-msg').style.display='block';
        document.getElementById('fail-msg').style.display='none';
        
    }
    else{
        document.getElementById('success-msg').style.display='none';
        document.getElementById('fail-msg').style.display='block';
    }
    
    document.getElementById('pin-show').value = '';
    document.getElementById('clicked-numberShow').value = '';
   
}