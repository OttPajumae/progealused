if (checktemp > 0 && checktemp < 20) 
    console.log ("Siin on liiga külm")
    return -1
else if (checktemp > 21 && checktemp < 40)
    console.log ("Siin on paras")
    return 0 
else if (checktemp > 41 && checktemp < 60)
    console.log ("Palun tõmmake temperatuuri alla!!!!")
    return 1
