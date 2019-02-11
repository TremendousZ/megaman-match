$(document).ready(initializeApp);

function initializeApp(){
    launchTitle();
}

function launchTitle(){
    pressToPlay();
}

function pressToPlay(){
    let firstScreen = $("<div>").addClass("intro-text");
    let button = $("<button>").text("Initialize Blue Bomber").addClass("start-button");
    button.on("click", introText );
    firstScreen.append(button);
    $(".play-area").append(firstScreen);

}

function introText(){
    $(".play-area").empty();
    let firstScreen = $("<div>").addClass("intro-text");
    let funkyText = $("<div>").text("This is a John Carlisle Production");
    let copyRight = $("<div>").text("Copyright 2019, out of love");
    firstScreen.append(funkyText, copyRight);
    firstScreen.addClass("fade-in");
    $(".play-area").append(firstScreen);
    jukebox();
    setTimeout(fadeout , 2000);
}

function jukebox(){
    let song = new Audio("music/Title.mp3");
    song.play();
}

function fadeout(){
    $(".fade-in").addClass('fade-out');
    setTimeout(showTitle,2000);
}

function showTitle(){
    $(".play-area").empty();
    let title = $("<div>").addClass("title").addClass("fade-in");
    let gameStart = $("<div>").text("GAME START");
    let password = $("<div>").text("PASSWORD");
    title.append(gameStart, password);
    $(".play-area").append(title);
}