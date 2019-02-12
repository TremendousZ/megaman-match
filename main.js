$(document).ready(initializeApp);

let jukebox = null;

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
    jukeboxPlay("title");
    setTimeout(fadeout , 2000);
}

function jukeboxPlay( name ){
    let trackList = {
        title: "music/Title.mp3",
        stageSelect: "music/Stage Select.mp3",
        enemySelected: "music/Enemy Selected.mp3",
        sparkman: "music/Spark Man.mp3",
        snakeman: "music/Snake Man.mp3",
        needleman: "music/Needle Man.mp3",
        hardman: "music/Hard Man.mp3",
        topman: "music/Top Man.mp3",
        geminiman: "music/Gemini Man.mp3",
        magnetman: "music/Magnet Man.mp3",
        shadowman: "music/Shadow Man.mp3"
    }
    jukebox = new Audio(trackList[name]);
    jukebox.play();
}
function jukeboxStop(){
    jukebox.pause();
}

function fadeout(){
    $(".fade-in").addClass('fade-out');
    setTimeout(showTitle,2000);
}

function showTitle(){
    $(".play-area").empty();
    let title = $("<div>").addClass("title").addClass("fade-in");
    let gameStart = $("<div>").text("GAME START").addClass('game-start');
    let password = $("<div>").text("PASSWORD").addClass('password');
    title.append(gameStart, password);
    $(".play-area").append(title);
    $('.game-start').on('click', startGame);
    // $('.password').on('click', passWord);
}

function startGame(){
    jukeboxStop();
    jukeboxPlay("stageSelect");
    $(".play-area").empty();
    let stageSelect = $("<div>").addClass("stage-select");
    let megaMan = $("<div>").addClass("mega-man char-tile");
    let sparkMan = $("<div>").addClass("sparkman char-tile");
    sparkMan.on("mouseenter", upLeft);
    let snakeMan = $("<div>").addClass("snakeman char-tile");
    snakeMan.on("mouseenter", upLook);
    let needleMan = $("<div>").addClass("needleman char-tile");
    needleMan.on("mouseenter", upRight);
    let hardMan = $("<div>").addClass("hardman char-tile");
    hardMan.on("mouseenter", leftLook);
    let topMan = $("<div>").addClass("topman char-tile");
    topMan.on("mouseenter", lookRight);
    let geminiMan = $("<div>").addClass("geminiman char-tile");
    geminiMan.on("mouseenter",downLeft);
    let magnetMan = $("<div>").addClass("magnetman char-tile");
    magnetMan.on("mouseenter",lookDown);
    let shadowMan = $("<div>").addClass("shadowman char-tile");
    shadowMan.on("mouseenter", downRight);
    stageSelect.append(megaMan, sparkMan, snakeMan, needleMan, hardMan, topMan, geminiMan, magnetMan, shadowMan);
    $(".play-area").append(stageSelect);
    $(".char-tile").on('click', enemySelected);  
}

function upLeft(){
    $(".mega-man").addClass("look-up-left").removeClass("look-left look-up look-up-right look-right look-down-right look-down look-down-left");
}
function upLook(){
    $(".mega-man").addClass("look-up").removeClass("look-left look-up-left look-up-right look-right look-down-right look-down look-down-left");
}
function upRight(){
    $(".mega-man").addClass("look-up-right").removeClass("look-left look-up look-right look-down-right look-down look-down-left");
}
function leftLook(){
    $(".mega-man").addClass("look-left").removeClass("look-up-left look-up look-up-right look-right look-down-right look-down look-down-left");
}
function lookRight(){
    $(".mega-man").addClass("look-right").removeClass("look-up-left look-left look-up look-up-right look-down-right look-down look-down-left"); 
}
function downLeft(){
    $(".mega-man").addClass("look-down-left").removeClass("look-left look-up look-up-right look-right look-down-right look-down");
}
function lookDown(){
    $(".mega-man").addClass("look-down").removeClass("look-up-left look-left look-up look-up-right look-right look-down-right look-down-left");
}
function downRight(){
    $(".mega-man").addClass("look-down-right").removeClass("look-up-left look-left look-up look-up-right look-right look-down look-down-left");
}

function enemySelected(e){
    jukeboxStop();
    jukeboxPlay("enemySelected");
    setTimeout(selectLevel, 7500, e);
    let clicked = e.currentTarget.classList[0];
    let enemyChar = $("<div>").addClass("enemy-char");
    switch(clicked){
        case "sparkman":
        enemyChar.addClass("enemy-char sparkman-char");
        break;
        case "snakeman":
        enemyChar.addClass("enemy-char snakeman-char");
        break;
        case "needleman":
        enemyChar.addClass("enemy-char needleman-char");
        break;
        case "hardman":
        enemyChar.addClass("enemy-char hardman-char");
        break;
        case "topman":
        enemyChar.addClass("enemy-char topman-char");
        break;
        case "geminiman":
        enemyChar.addClass("enemy-char geminiman-char");
        break;
        case "magnetman":
        enemyChar.addClass("enemy-char magnetman-char");
        break;
        case "shadowman":
        enemyChar.addClass("enemy-char shadowman-char");
        break;

    }
    let blueBar = $("<div>").addClass("blue-bar");
    blueBar.append(enemyChar);
    $('.play-area').append(blueBar);
}

function selectLevel(e){
    let clicked = e.currentTarget.classList[0];
    switch(clicked){
        case "sparkman":
        launchLevel("sparkman");
        break;
        case "snakeman":
        launchLevel("snakeman");
        break;
        case "needleman":
        launchLevel("needleman");
        break;
        case "hardman":
        launchLevel("hardman");
        break;
        case "topman":
        launchLevel("topman");
        break;
        case "geminiman":
        launchLevel("geminiman");
        break;
        case "magnetman":
        launchLevel("magnetman");
        break;
        case "shadowman":
        launchLevel("shadowman");
        break;
    }
}

function launchLevel( name ){
    console.log("LAUNCHED!");
    jukeboxStop();
    jukeboxPlay( name );
    $(".play-area").empty();
    createBoard( name );
}

function createBoard( name ){
    let boardMatches = {
        magnetman: 4,
        hardman: 5,
        topman:6,
        shadowman:7,
        sparkman:8,
        snakeman:9,
        geminiman:10,
        needleman:11,
    }
    let winCondition = (boardMatches[name]) *2;
    let cardArea = $("<div>").addClass("card-area");
    let sideBar = $("<div>").addClass("side-bar");
    $(".play-area").append(sideBar, cardArea);


    for( let i = 0; i < winCondition; i++){
        let card = $("<div>").addClass("card");
        let front = $("<div>").addClass("front");
        let back = $("<div>").addClass("back");
        card.append(front, back);
        $('.play-area').append(card);
    }
}


