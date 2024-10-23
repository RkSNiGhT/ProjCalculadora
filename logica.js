function calcSoma(button){
    var x = parseFloat( document.getElementById("N1").value) ;
    var y = parseFloat( document.getElementById("N2").value );


    var op = button.id;

    if(op == "btnSomar"){

        var r = x+y;

        document.getElementById("Resultado").value = r;
    }else if(op=="btnSub"){
        var r = x-y;

        document.getElementById("Resultado").value = r;
    }
    if(op == "btnDiv"){

        var r = x/y;

        document.getElementById("Resultado").value = r;
    }else if(op=="btnMulti"){
        var r = x*y;

        document.getElementById("Resultado").value = r;
    }



}