$(document).ready(initializeApp);

let jukebox = null;
let flipCount = 0;
let score = 0;
let cardFlipped = false;
let firstCard = "";
let secondCard = "";

function initializeApp(){
    launchTitle();
}

function launchTitle(){
    pressToPlay();
}
// INTRO SCREEN BUTTON

function pressToPlay(){
    let firstScreen = $("<div>").addClass("intro-text");
    let button = $("<button>").text("Initialize Blue Bomber").addClass("start-button");
    button.on("click", introText );
    firstScreen.append(button);
    $(".play-area").append(firstScreen);
}

// HAVE THE TEXT FADE IN AND OUT AND PLAY TITLE

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

// DISPLAY THE MAIN TITLE

function showTitle(){
    $(".play-area").empty();
    let title = $("<div>").addClass("title").addClass("fade-in");
    
    let gameStart = $("<div>").text("GAME START").addClass('game-start');
    gameStart.on("mouseenter", arrowSelectStart);
    gameStart.on("mouseleave", clearArrow);
    let password = $("<div>").text("PASSWORD").addClass('password');
    password.on("mouseenter", arrowSelectPassword);
    password.on("mouseleave", clearArrow);
    title.append(gameStart, password);
    $(".play-area").append(title);
    $('.game-start').on('click', startGame);
    // $('.password').on('click', passWord);
}
function arrowSelectStart(){
    let arrow = $("<div>").addClass("arrowStart").text("▶");
    $('.title').append(arrow);
}
function arrowSelectPassword(){
    let arrow = $("<div>").addClass("arrowPassword").text("▶");
    $('.title').append(arrow);
}
function clearArrow(){
    $(".arrowStart").hide();
    $(".arrowPassword").hide();
}

// SWITCH TO THE STAGE SELECT SCREEN

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

// MEGAMAN LOOKS IN THE DIRECTION OF ROBOT HOVERED

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

//ENEMY BOSS IS CLICKED 

function enemySelected(e){
    jukeboxStop();
    jukeboxPlay("enemySelected");
    setTimeout(selectLevel, 7500, e);
    let clicked = e.currentTarget.classList[0];
    let enemyChar = $("<div>").addClass("enemy-char");
    let typewriter = $("<div>").addClass("typewriter");
    let bossText = $("<h2>").addClass("typing");
    switch(clicked){
        case "sparkman":
        enemyChar.addClass("enemy-char sparkman-char");
        bossText.text("SPARKMAN");
        break;
        case "snakeman":
        enemyChar.addClass("enemy-char snakeman-char");
        bossText.text("SNAKEMAN");
        break;
        case "needleman":
        enemyChar.addClass("enemy-char needleman-char");
        bossText.text("NEEDLEMAN");
        break;
        case "hardman":
        enemyChar.addClass("enemy-char hardman-char");
        bossText.text("HARDMAN");
        break;
        case "topman":
        enemyChar.addClass("enemy-char topman-char");
        bossText.text("TOPMAN");
        break;
        case "geminiman":
        enemyChar.addClass("enemy-char geminiman-char");
        bossText.text("GEMINIMAN");
        break;
        case "magnetman":
        enemyChar.addClass("enemy-char magnetman-char");
        bossText.text("MAGNETMAN");
        break;
        case "shadowman":
        enemyChar.addClass("enemy-char shadowman-char");
        bossText.text("SHADOWMAN");
        break;
    }
    typewriter.append(bossText);
    let blueBar = $("<div>").addClass("blue-bar");

    blueBar.append(enemyChar, typewriter);
    $('.play-area').append(blueBar);
}

//DETERMINE WHICH LEVEL WAS SELECTED AND START THAT LEVEL

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

// STOP THE MUSIC CLEAR THE PLAY AREA AND CREATE THE BOARD

function launchLevel( name ){
    console.log("LAUNCHED!");
    jukeboxStop();
    // jukeboxPlay( name );
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
        snakeman:8,
        geminiman:9,
        needleman:7,
    }
    
    let levelVideos = {
        magnetman: "https://www.youtube.com/embed/-G3r_bJ6kfI?autoplay=1",
        hardman: "https://www.youtube.com/embed/HmFMb8ccje0?autoplay=1",
        topman: "https://www.youtube.com/embed/pIXUBtPb4pI?autoplay=1",
        shadowman:"https://www.youtube.com/embed/y9VRH-8Km9E?autoplay=1",
        sparkman:"https://www.youtube.com/embed/4lHKH8hNqCs?autoplay=1",
        snakeman:"https://www.youtube.com/embed/ElfB3ybJBSQ?autoplay=1",
        geminiman:"https://www.youtube.com/embed/Fma2rPKhldk?autoplay=1",
        needleman:"https://www.youtube.com/embed/jj0mai4ax_k?autoplay=1"
    }
    let enemiesInLevel = {
        magnetman:["assets/mag-fly.png","assets/peterchy.png","assets/giant-spring.png","assets/Protoman9.jpg","assets/mag-fly.png","assets/peterchy.png","assets/giant-spring.png","assets/Protoman9.jpg"],
        hardman:["assets/pickelman-bull.png","assets/have-su-bee.png","assets/wanaan.png","assets/hammer-joe.png", "assets/returning-monkey.png", "assets/pickelman-bull.png","assets/have-su-bee.png","assets/wanaan.png","assets/hammer-joe.png", "assets/returning-monkey.png"],
        topman:["assets/bolton-and-nutton.png","assets/pickelman-bull.png","assets/mechakkero.png","assets/tama.png","assets/komasaburo.png","assets/metall-dx.png","assets/bolton-and-nutton.png","assets/pickelman-bull.png","assets/mechakkero.png","assets/tama.png","assets/komasaburo.png","assets/metall-dx.png"],
        shadowman:["assets/new-shotman.png","assets/mechakkero.png","assets/peterchy.png","assets/walking-bomb.png","assets/hologran.png","assets/parasyu.png","assets/Protoman9.jpg","assets/new-shotman.png","assets/mechakkero.png","assets/peterchy.png","assets/walking-bomb.png","assets/hologran.png","assets/parasyu.png","assets/Protoman9.jpg"],
        sparkman:["assets/jamacy.png", "assets/bolton-and-nutton.png","assets/elecn.png","assets/electric.png","assets/hammer-joe.png","assets/pickelman-bull.png","assets/peterchy.png","assets/jamacy.png", "assets/bolton-and-nutton.png","assets/elecn.png","assets/electric.png","assets/hammer-joe.png","assets/pickelman-bull.png","assets/peterchy.png"],
        snakeman:["assets/petit-snakey.png","assets/dada.png","assets/big-snakey.png","assets/potton.png","assets/bomb-flier.png","assets/bubukan.png","assets/jamacy.png","assets/hammer-joe.png","assets/petit-snakey.png","assets/dada.png","assets/big-snakey.png","assets/potton.png","assets/bomb-flier.png","assets/bubukan.png","assets/jamacy.png","assets/hammer-joe.png"],
        geminiman:["assets/nitron.png","assets/bomber-pepe.png","assets/gyoraibo.png","assets/Protoman9.jpg","assets/pole.png","assets/penpen-maker.png","assets/pen-pen.png","assets/yambow.png","assets/bikky.png","assets/nitron.png","assets/bomber-pepe.png","assets/gyoraibo.png","assets/Protoman9.jpg","assets/pole.png","assets/penpen-maker.png","assets/pen-pen.png","assets/yambow.png","assets/bikky.png"],
        needleman:["assets/needle-press.png","assets/hari-harry.png","assets/metall-dx.png","assets/cannon.png","assets/yambow.png","assets/hammer-joe.png","assets/bikky.png","assets/needle-press.png","assets/hari-harry.png","assets/metall-dx.png","assets/cannon.png","assets/yambow.png","assets/hammer-joe.png","assets/bikky.png"],
    }

    let winCondition = (boardMatches[name]) *2;
    let cardArea = $("<div>").addClass("card-area");
    let sideBar = $("<div>").addClass("side-bar");
    let scoreDisplay = $("<div>").addClass("current-score").text(`Score <br> ${score}`);
    let flipCountDisplay = $("<div>").addClass("flip-count-display").text(`Attempts: ${flipCount}`);
    sideBar.append(score, flipCountDisplay);
    $(".play-area").append(sideBar, cardArea);
    let videoBackground = $(".video-background");
    videoBackground.attr("src", `${levelVideos[name]}`);
    $(".iframe-container").removeClass("hide");
    videoBackground.removeClass("hide");
    $(".iframe-container").append(videoBackground);
    $(".play-area").css("background-color", "transparent");
    for( let i = 0; i < winCondition; i++){
        let card = $("<div>").addClass("card");
        let cardInner = $("<div>").addClass("card-inner");
        let front = $("<div>").addClass("back");
        let frontImage = $("<img>").attr("src", `${enemiesInLevel[name][i]}`).addClass("enemy-image");
        front.append(frontImage);
        let back = $("<div>").addClass("front");
        cardInner.append(front,back);
        card.append(cardInner);
        $('.card-area').append(card);
    }
    startCardGame( name );
}

function startCardGame( name ){
    $(".card").on('click', flipCard);
}

function flipCard( ){
    $(".flip-count-display").text(`Attempts: ${flipCount}`);
    $(this).addClass("card-flipped");
    if(cardFlipped == true){
        secondCard = $(this).html();
        $(this).off("click");
        $(".card").off("click");
        checkMatch();
        flipCount++;
    } else {
        cardFlipped = true;
        firstCard = $(this).html();
        $(this).off("click");
    }   
}

function checkMatch(){
    if( secondCard == firstCard ){
        score += 100;
        $(".card.card-flipped").addClass("matched");
        setTimeout( warpUp, 1000);
    } else {
        setTimeout(flipCardBack, 2000);
        
    }
        firstCard="";
        secondCard="";
        cardFlipped = false;
}

function flipCardBack(){
    $(".card.card-flipped").removeClass("card-flipped");
    $(".card").on('click', flipCard);
}
function warpUp(){
    $(".matched").addClass("warpUp");
    setTimeout(hideCard,1000);
}
function hideCard(){
    $(".matched").addClass("hide");
    $(".card").on('click', flipCard);
}