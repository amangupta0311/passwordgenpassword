const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let string1 = "";
let string2 = "";
let pass1= document.getElementById("rect1")
let pass2 = document.getElementById("rect2")
function generate(){
    for(let i=0 ; i<15 ; i++){
        string1 += characters[Math.floor(Math.random()* characters.length)]
        string2 += characters[Math.floor(Math.random()* characters.length)]
    }
    pass1.textContent = string1;
    pass2.textContent = string2;
    string1 = "";
    string2 = "";
}



