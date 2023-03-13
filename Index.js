function numAdd() {
    var num = document.getElementById("numInside");
    /* num.innerHTML = 1; */
    
    if (num.innerHTML == "number") {
        num.innerHTML = 1;
    } else {
        var newNum = num.innerHTML;
        newNum = newNum * 1 + 1;
        num.innerHTML = newNum;
    }

    var greenClr = document.getElementById("mnCrl");

    if (num.innerHTML > 0) {
        greenClr.style.backgroundColor = "rgb(182, 227, 183)";
    } else if (num.innerHTML == 0) {
        greenClr.style.backgroundColor = "gray";
    }

}

function numSub() {
    var num = document.getElementById("numInside");

    if (num.innerHTML == "number") {
        num.innerHTML = -1;
    } else {
        var newNum = num.innerHTML;
        newNum = newNum * 1 - 1;
        num.innerHTML = newNum;
    }    

    var redClr = document.getElementById("mnCrl");

    if (num.innerHTML < 0) {
        redClr.style.backgroundColor = "rgb(255, 169, 169)";
    } else if (num.innerHTML == 0) {
        redClr.style.backgroundColor = "gray";
    }

}

function reset() {
    var num = document.getElementById("numInside");
    num.innerHTML = "number";
    var grayClr = document.getElementById("mnCrl");
    grayClr.style.backgroundColor = "gray";
}
