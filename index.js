function chat() {
    alert("Hello!");

    var yourName = prompt("What is your name?");
    alert("Hello, "+ yourName);

    var food = prompt("What is your favorite food?");
    alert("I like "+ food +" too!");

    var shareFood = confirm("Tara let's eat?");

    if (shareFood == true){
        alert("Thank you!");
    }

    else {
        alert("See you next!")
    }
}