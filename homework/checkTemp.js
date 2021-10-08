let checktemp = prompt()
if (checktemp > 0 && checktemp < 20) 
    console.log ("Siin on liiga külm")
else if (checktemp > 21 && checktemp < 40)
    console.log ("Siin on paras")   
else if (checktemp > 41 && checktemp < 60)
    console.log ("Palun tõmmake temperatuuri alla!!!!")
    
function checkTemp(checkt){
if (checkt > 0 && checkt < 20)    
    return -1;
else if (checkt > 21 && checkt < 40)    
    return 0; 
else if (checkt > 41 && checkt < 60)
    return 1;
}
