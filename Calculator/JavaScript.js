var N = 0;
var X = '';
var Y = '';
var n1 = '';
var n2 = '';
var Ans = '';
var operator = '';
var decimals_1 = false;
var decimals_2 = false;

const Button = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ['+', '-', '×', '/'];


function InPut(Num) {
    if (document.getElementById("pwr").checked) {
        if (Num === "ON") {
            window.alert("Power ON " + " Please insert this type calculations [ ' X + Y = '  or  ' X - Y = '  or ' X * Y = '  OR ' X / Y = ' ]");
            document.getElementById("display").innerHTML = " . " + " 🙏 Welcome 🙏 " + " . ";
        }
        if (Button.includes(Num)) {
            if (N === 0) {
                X = n1 + Num;
                document.getElementById("display").innerHTML = X;
                n1 = X;
            } else {
                Y = n2 + Num;
                document.getElementById("display").innerHTML = X + operator + Y;
                n2 = Y;
            }
        } else if (operators.includes(Num)) {
            N = 1;
            operator = Num;
            document.getElementById("display").innerHTML = X + operator;
        } else {
            if (Num === '=') {
                if (operator === '+') {
                    Ans = parseFloat(X) + parseFloat(Y);
                } else if (operator === '-') {
                    Ans = parseFloat(X) - parseFloat(Y);
                } else if (operator === '×') {
                    Ans = parseFloat(X) * parseFloat(Y);
                } else if (operator === '/') {
                    Ans = parseFloat(X) / parseFloat(Y);
                }
                X = Ans;
                Y = '';
                n1 = Ans;
                n2 = '';
                operator = '';
                N = 1;
                document.getElementById("display").innerHTML = X;
            }
            if (Num === 'AC') {
                Ans = '';
                X = '';
                Y = '';
                n1 = '';
                n2 = '';
                operator = '';
                N = 0;
                decimals_1 = false;
                decimals_2 = false;
                document.getElementById("display").innerHTML = '';
            }
            if (Num === ".") {
                if (N === 0) {
                    if (!decimals_1) {
                        X = X + ".";
                        n1 = X;
                        document.getElementById("display").innerHTML = X;
                        decimals_1 = true;
                    }
                } else if (N === 1) {
                    if (!decimals_2) {
                        Y = Y + ".";
                        n2 = Y;
                        document.getElementById("display").innerHTML = X + operator + Y;
                        decimals_2 = true;
                    }
                }
            }
        }
    } else {
        Ans = '';
        X = '';
        Y = '';
        n1 = '';
        n2 = '';
        operator = '';
        N = 0;
        decimals_1 = false;
        decimals_2 = false;
        window.alert("Calculator is Power off");
        document.getElementById("display").innerHTML = "";
    }
}
function exit() {
    window.alert("Do You Want to Exit .");
    window.alert("🙏 Thanks using calculator .🤝 ");
    window.location = exit;
}

