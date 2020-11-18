// Boutons numériques
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
let comma = document.getElementById("comma");
let m1b = document.getElementById("m1");
let m2b = document.getElementById("m2");

// opérations
let plus = document.getElementById("plus");
let less = document.getElementById("less");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let square = document.getElementById("square");
let equal = document.getElementById("equal");
let reset = document.getElementById("reset");

// forms
let firstCase = document.getElementById("firstCase");
let secondCase = document.getElementById("secondCase");
let thirdCase = document.getElementById("thirdCase")
let m1 = document.getElementById("memoCaseOne");
let m2 = document.getElementById("memoCaseTwo");
//indicateurs
let indicateur = document.getElementById("calculator");

// Variables
// première(1) ou deuxième(2) case
let CalcCase = 1;
// Opérations 0 = rien/ 1 = addition/ 2 = soustraction/ 3 = multiplication/ 4 = division / 5 = au carré
let operation = 0;
// initialisation de la variable pour le résultat
let result = 0;

// Pavé numérique
one.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 1;
    } else {
        secondCase.value += 1;
    }
}

two.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 2;
    } else {
        secondCase.value += 2;
    }

}

three.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 3;
    } else {
        secondCase.value += 3;
    }
}

four.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 4;
    } else {
        secondCase.value += 4;
    }
}

five.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 5;
    } else {
        secondCase.value += 5;
    }
}

six.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 6;
    } else {
        secondCase.value += 6;
    }
}

seven.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 7;
    } else {
        secondCase.value += 7;
    }
}

eight.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 8;
    } else {
        secondCase.value += 8;
    }
}
nine.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 9;
    } else {
        secondCase.value += 9;
    }

}

zero.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += 0;
    } else {
        secondCase.value += 0;
    }
}

comma.onclick = function () {
    if (CalcCase == 1) {
        firstCase.value += ".";
    } else {
        secondCase.value += ".";
    }
}

m1b.onclick = function (){
    if (m1.value==""){
        alert("M1 ne contient pas de valeur !");
    } else {
        if (CalcCase == 1) {
        firstCase.value = m1.value;
    } else {
        secondCase.value = m1.value;
    }
    }
}

m2b.onclick = function (){
    if (m2.value==""){
        alert("M2 ne contient pas de valeur !");
    } else {
        if (CalcCase == 1) {
        firstCase.value = m2.value;
    } else {
        secondCase.value = m2.value;
    }
    }
}

reset.onclick = function () {
    firstCase.value = "";
    secondCase.value = "";
    CalcCase = 1;
    indicateur.innerText = "";
    operation = 0;
    thirdCase.classList.add("invisible");
}

// Fonctions d'opérations
plus.onclick = function () {
    indicateur.innerText = "+";
    CalcCase = 2;
    operation = 1;
}

less.onclick = function () {
    indicateur.innerText = "-";
    CalcCase = 2;
    operation = 2;
}

multiplication.onclick = function () {
    indicateur.innerText = "x";
    CalcCase = 2;
    operation = 3;
}

division.onclick = function () {
    indicateur.innerText = "/";
    CalcCase = 2;
    operation = 4;
}

square.onclick = function () {
    indicateur.innerText = "²";
    CalcCase = 1;
    let result = parseFloat(firstCase.value) * parseFloat(firstCase.value)
    thirdCase.value = result;
    thirdCase.classList.remove("invisible");
    CalcCase = 1;
    secondCase.value = "au carré";
    indicateur.innerText = ""
    if (m1.value=="") {
        m1.value=result;
    } else {
        m2.value=m1.value;
        m1.value=result;
    }
}

equal.onclick = function () {
    if (operation == 0) {
        alert("arrête et fait un vrai calcul b*rdel")
        CalcCase = 1;
    } else if (operation == 1) {
        let result = parseFloat(firstCase.value) + parseFloat(secondCase.value)
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
        CalcCase = 1;
        if (m1.value=="") {
            m1.value=result;
        } else {
            m2.value=m1.value;
            m1.value=result;
        }
    } else if (operation == 2) {
        let result = parseFloat(firstCase.value) - parseFloat(secondCase.value)
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
        CalcCase = 1;
        if (m1.value=="") {
            m1.value=result;
        } else {
            m2.value=m1.value;
            m1.value=result;
        }
    } else if (operation == 3) {
        let result = parseFloat(firstCase.value) * parseFloat(secondCase.value)
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
        CalcCase = 1;
        if (m1.value=="") {
            m1.value=result;
        } else {
            m2.value=m1.value;
            m1.value=result;
        }
    } else if (operation == 4) {
        let result = parseFloat(firstCase.value) / parseFloat(secondCase.value)
        thirdCase.value = result;
        thirdCase.classList.remove("invisible");
        CalcCase = 1;
        if (m1.value=="") {
            m1.value=result;
        } else {
            m2.value=m1.value;
            m1.value=result;
        }
    }
}