function addMessage(message, target) {
    var p = document.createElement("p");
    p.textContent = message;
    var parent = target;
    var newElement = p;
    var referenceElement = parent.firstChild;
    parent.insertBefore(newElement, referenceElement);
}

function addImage(from, src, target) {
    var img = new Image();
    img.onload = function () {
        var p = document.createElement("p");
        p.textContent = from;
        target.insertBefore(img, target.firstChild);
        target.insertBefore(p, target.firstChild);
        Notification.requestPermission( function (){
            new Notification(message.from, {icon:message.content});
        });
    };
    img.src = src;

}

function addLink(from, link, target) {
    var p = document.createElement("p");
    p.textContent = from + " just shared a link as below";
    var linkChild = document.createElement("a");
    linkChild.setAttribute("href", link);
    linkChild.innerHTML = link;
    target.insertBefore(linkChild, target.firstChild);
    target.insertBefore(p, target.firstChild);
}
function onSubmit(socket, type) {
    var myName = document.getElementById("myName").textContent;
    var input = document.getElementById("message_field");
    var target = document.getElementById("message_box");

    if (type === "text") {
        addMessage(myName + ": " + input.value, target);
    } else if (type === "image") {
        addImage(myName + ":", input.value, target);
    } else if (type === "link") {
        console.log(">>>>>> link!!");
        addLink(myName + ":", input.value, target);
    }

    try {
        socket.send(JSON.stringify({
            type: type,
            from: myName,
            content: input.value
        }));
        console.log("no error from the server so I assume it is sent.");
    } catch (err) {
        console.error(err);
    }
    input.value = null;
}

function onMessage(rawMessage) {
    try {
        var message = JSON.parse(rawMessage.data);
    } catch (error) {
        console.log(error);
        return;
    }

    var messageBox = document.getElementById("message_box");
    if (message.type === "text" && message.content.length < 50) {
        addMessage(message.from + ":" + message.content, messageBox);
        Notification.requestPermission( function (){
            new Notification(message.from, {body:message.content});
        });
    } else if (message.type === "image") {
        addImage(message.from + ":", message.content, messageBox);
//        Notification.requestPermission( function (){
//            new Notification(message.from, {icon:message.content});
//        });
    } else if (message.type === "link") {
        addLink(message.from, message.content, messageBox);
        Notification.requestPermission( function (){
            new Notification(message.from, {body:message.content});
        });
    }
}

function onClose() {
    console.log("socket closed");
}

document.addEventListener("DOMContentLoaded", function () {
    var myName = document.getElementById("myName").textContent;
    console.log(myName);

    var socket = new WebSocket("ws://YOUR-OWN-IP-ADDRESS:3000");
    console.log(socket);
    socket.onmessage = onMessage;
    socket.onclose = onClose;
    console.log("socked loaded");

//    button.addEventListener("click", onSubmit(socket));
    window.addEventListener("beforeunload", function () {
        socket.close();
    });

    document.getElementById("myButton").addEventListener("click", function () {
        onSubmit(socket, "text");
    });
    document.getElementById("image_submit").addEventListener("click", function () {
        onSubmit(socket, "image");
    });

    document.getElementById("link_submit").addEventListener("click", function () {
        onSubmit(socket, "link");
    });

    var iconTarget = document.getElementById("icon-target");

    iconTarget.addEventListener("dragover", function (e) {
        console.log("drog over!");
        e.preventDefault();
        var imgTarget = document.getElementById("img-target")
        imgTarget.classList.add("mousein");
        iconTarget.classList.add("mousein");
    });

    iconTarget.addEventListener("dragleave", function (e) {
        console.log("drag leave!");
        var imgTarget = document.getElementById("img-target");
        imgTarget.classList.remove("mousein");
        iconTarget.classList.remove("mousein");
    });

    iconTarget.addEventListener("drop", function (e) {
        console.log("drop!");
        e.preventDefault();
        e.stopPropagation();

        var imgTarget = document.getElementById("img-target");
        imgTarget.classList.remove("mousein");
        iconTarget.classList.remove("mousein");

        var file = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function (e) {
            var imgTarget = document.getElementById("img-target");
            console.log(imgTarget.src);
            imgTarget.src = e.target.result;
        }
    });
});
