/**
 * Created by zhaoguop on 12/11/13.
 */
function dropImage(img){
    var drawTarget = document.getElementById("draw-target");
    drawTarget.appendChild(img);
}


document.addEventListener("DOMContentLoaded", function () {
    var target = document.getElementById("target-drop");
    target.addEventListener("dragover", function (evt) {
        console.log("drag!");
        evt.preventDefault();
    });

    target.addEventListener("drop", function (evt) {
        console.log("Dropped!");
        evt.preventDefault();
        evt.stopPropagation();

        var file = evt.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function(evt){
            var img = document.createElement("img");
            img.src = evt.target.result;
            dropImage(img);
        };
    });
});