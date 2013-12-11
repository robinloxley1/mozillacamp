function addMessage(message, target) {
    var p = document.createElement("p");
    p.textContent = message;

    var parent = target;
    var newElement = p;
    var referenceElement = parent.firstChild;
    parent.insertBefore(newElement, referenceElement);
    console.log(referenceElement);
}

function onSubmit() {
    var input = document.getElementById("message_field");
    var message = input.value;
    console.log(message);
    var target = document.getElementById("message_box");
    input.value = null;
    addMessage(message, target);
}

function onAnimationHappen(e) {
    var avatar = event.target;
    //
//    avator.classList.add("the class");
//    avatar.addEventListener("webkitAnimationEnd", onRemoveAnimationClass);
//    avatar.addEnventListener("moz....")

}

function RemoveAnimationClass(e){
    var avatar = event.target;
    avatar.classList.remove("the class");
}

document.addEventListener("DOMContentLoaded", function () {
    var hello = document.getElementById("hello");
    var button = document.getElementById("myButton");
//    var avatar = document.getElementById("icon-img")
    button.addEventListener("click", onSubmit);



//  hello.style.fontSize = "100px";
//
//  var closedOverCounter = 0;
//
//  function whenClicked (event) {
//    console.log("Hey I was clicked " + ++closedOverCounter +
//                " time[s]");
//    hello.classList.toggle("valid");
//  };

//  button.addEventListener("click", whenClicked);
});
