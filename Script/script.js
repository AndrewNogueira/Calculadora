function insert(num) {
    let nume = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = nume + num;
}

function clean() {
    document.getElementById("result").innerHTML = "";
}

function back() {
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length - 1);
}

function calcular() {
    let result = document.getElementById("result").innerHTML;
    if(result) {
        document.getElementById("result").innerHTML = eval(result)
    }
    else {
        document.getElementById("result").innerHTML = "Undefined"
    }
} 