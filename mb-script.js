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

document.addEventListener("DOMContentLoaded", function () {
    var hello = document.getElementById("hello");
    var button = document.getElementById("myButton");

    button.addEventListener("click", onSubmit);

    var iconTarget = document.getElementById("icon-target");

//    iconTarget.addEventListener("")

    iconTarget.addEventListener("dragover", function (e) {
        console.log("drog over!");
        e.preventDefault();
        var imgTarget = document.getElementById("img-target")
        imgTarget.classList.add("mousein");
        iconTarget.classList.add("mousein");
//        imgTarget.style.width="80%";
//        imgTarget.style.height="80%";
//        iconTarget.style.border="5px #e6e6e6 solid";
    });

    iconTarget.addEventListener("dragleave", function (e){
        console.log("drag leave!");
        var imgTarget = document.getElementById("img-target");
        imgTarget.classList.remove("mousein");
        iconTarget.classList.remove("mousein");
    });

    iconTarget.addEventListener("drop", function(e){
        console.log("drop!");
        e.preventDefault();
        e.stopPropagation();

        var imgTarget = document.getElementById("img-target");
        imgTarget.classList.remove("mousein");
        iconTarget.classList.remove("mousein");

        var file = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e){
            var imgTarget = document.getElementById("img-target");
            console.log(imgTarget.src);
//            console.log(e.target.result);
            imgTarget.src= e.target.result;
        }
    });
});
