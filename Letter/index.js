var tarix = document.querySelector(".tarix")
var btn = document.querySelector(".button-24")

btn.onclick = function(){
    var value = tarix.value
    if(value){
        if(value=="03072023"){
            window.location.href="giris.html"
        }
        else{
            alert('Cavabınız səhvdir gözlüyürəm :)')
        }

    }
    else{
        alert('Deyəsən alternativ cavabınız yoxdu :(')
    }

}