function calcSoma(button){
    var x = parseFloat( document.getElementById("N1").value) ;
    var y = parseFloat( document.getElementById("N2").value );

    if(Number.isNaN(x) == true){
        x=0;
    }
    if(Number.isNaN(y) == true){
        y=0;
    }


    var op = button.textContent;

    if(op == "+"){

        var r = x+y;

        document.getElementById("Resultado").value = r;
    }else if(op=="-"){
        var r = x-y;

        document.getElementById("Resultado").value = r;
    }else if(op == "/"){

        var r = x/y;

        document.getElementById("Resultado").value = r;
    }else if(op=="*"){
        var r = x*y;

        document.getElementById("Resultado").value = r;
    }

    document.getElementById("historico").innerHTML = "<p>" + x + op + y + " = " + r + "</p>" + document.getElementById("historico").innerHTML;

    if(document.getElementById("historico").children.length>10){

        document.getElementById("historico").removeChild(document.getElementById("historico").childNodes[10]);

    }
    
}