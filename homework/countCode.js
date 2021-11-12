/*Kopeerida ülevalolev data array.
Kirjutada selle juurde funktsioon mis loeb kokku mitu kindla algustähega koodi/stringi seal array's on.
Näiteks soovime lugeda kokku kõik "T" tähega algavad koodid/stringid array sees käivitades funktsiooni countCode("T")
Funktsioon countCode(letter) tuleb teil ise kirjutada.
Abiks tuleb teadmine kuidas array seest elemente kätte saada.
Kuidas for tsükli abil numbreid genereerida.
Stringi käsklus startsWith  näiteks "string".startsWith("s") tagastab true
Kuidas muutujas olevat numbrit suurendada 1 võrra.
Ja kuidas parameetriga funktsiooni luua ning funktsiooniga väärtus tagastada (see oli juba esimeses kodutöös vajalik).
Laadige programm oma githubi homework kausta. Faili nimeks pange countCode.js. Jälgige suuri väikseid tähti. */

const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];


const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];

function countCode(str){
    //word = ''   //mõtlesin ka teha alguses 2 teguriga, et see võrdleb mõlemat arrayd
    let count = 0
    for(i=0; i < data.length; i++){ 
        if (data[i][0] == str)
        count++
        
        //word += data[i][0] 
        //return count
        //console.log(data[i][0])
    }
    return count
}
//console.log(codeCount)
