function remove_leading_zeros(number) {
    let i = 0;
    while (number[i] == 0 && i < number.length - 1) i++;
    return number.substr(i);
}

function is_number_bigger_than_max(number) {
    if (Math.pow(number, 2) > Number.MAX_SAFE_INTEGER) return true;
    else if (Math.pow(10, number.length) > Number.MAX_SAFE_INTEGER) return true;
}

function is_comma_number(number) {
    for (i = 0; i < number.length; i++)
        if (number[i] == '.' || number[i] == ',') return true;
}

function check() {
    let number = document.querySelector("#field").value;
    number = remove_leading_zeros(number);

    if (is_comma_number(number)) document.querySelector("#result").innerHTML = "Enter an integer";
    else if (number.length == 0) document.querySelector("#result").innerHTML = "Enter an integer";
    else if (number < 0) document.querySelector("#result").innerHTML = "Numbers smaller than zero are not automorphic numbers";
    else if (is_number_bigger_than_max(number)) document.querySelector("#result").innerHTML = "You have entered a number that has exceeded the maximum range. There is no guarantee of a correct result";
    else if (Math.pow(number, 2) % Math.pow(10, number.length) == number) document.querySelector("#result").innerHTML = number + " is an automorphic number";
    else document.querySelector("#result").innerHTML = number + " isn't an automorphic number";
}