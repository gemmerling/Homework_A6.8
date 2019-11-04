let progress = 0;

function F1() {
    progress = progress + 1;
    $("#my-progress-bar").width(progress + "%");
    console.log(progress)
}

function F3() {
    progress = progress + 3;
    $("#my-progress-bar").width(progress + "%");
    console.log(progress)
}

function F7() {
    progress = progress + 7;
    $("#my-progress-bar").width(progress + "%");
    console.log(progress)
}

function init() {
    $("#btn1").click(F1);
    $("#btn3").click(F3);
    $("#btn7").click(F7);
}

$(document).ready(init);