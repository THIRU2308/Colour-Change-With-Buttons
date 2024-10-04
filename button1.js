function change(col){
    if(col=="blue"){
        document.body.style.backgroundColor="blue"
        document.getElementById("b").style.backgroundColor="blue"
        document.getElementById("r").style.backgroundColor="white"
        document.getElementById("g").style.backgroundColor="white"
        
    }
    else if(col=="red"){
        document.body.style.backgroundColor="red"
        document.getElementById("r").style.backgroundColor="red"
        document.getElementById("b").style.backgroundColor="white"
        document.getElementById("g").style.backgroundColor="white"

    }
    else if(col=="green"){
        document.body.style.backgroundColor="green"
        document.getElementById("g").style.backgroundColor="green"
        document.getElementById("r").style.backgroundColor="white"
        document.getElementById("b").style.backgroundColor="white"

    }
    else{
        document.body.style.backgroundColor="initial"
        document.getElementById("b").style.backgroundColor="initial"
        document.getElementById("r").style.backgroundColor="initial"
        document.getElementById("g").style.backgroundColor="initial"

    }
    
} 