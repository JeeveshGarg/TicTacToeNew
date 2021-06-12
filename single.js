let wall1 = document.querySelector('#wall1');
let wall2 = document.querySelector('#wall2');
let wall3 = document.querySelector('#wall3');
let wall4 = document.querySelector('#wall4');
let wall5 = document.querySelector('#wall5');
let wall6 = document.querySelector('#wall6');
let wall7 = document.querySelector('#wall7');
let wall8 = document.querySelector('#wall8');
let body = document.querySelector('.whole');
let score = document.querySelector('.score');



wall1.addEventListener('click', function run() {

    body.style.background = "#fff";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "black";


});
wall2.addEventListener('click', function run() {

    body.style.background = "#303030";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "#fff";



});
wall3.addEventListener('click', function run() {

    body.style.background = "url('wall3.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "#fff";

});
wall4.addEventListener('click', function run() {

    body.style.background = "url('wall4.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "#fff";


});
wall5.addEventListener('click', function run() {

    body.style.background = "url('wall5.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "black";


});
wall6.addEventListener('click', function run() {

    body.style.background = "url('wall6.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "black";


});
wall7.addEventListener('click', function run() {

    body.style.background = "url('wall7.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "#fff";


});
wall8.addEventListener('click', function run() {

    body.style.background = "url('wall8.jpg')";
    body.style.backgroundSize = "100% 100%";
    score.style.color = "#fff";


});


// -----------------------------------------------------nav--------------------------------------------------------------------------------
let temp = true;
let flag = false;
let count = 0;
let ai = true;
let MLfirst = true;

let nav = document.querySelector('.box1');
let games = document.querySelector('nav .box11');



document.addEventListener("scroll", function run() {
    let position = window.scrollY;
    if (position > 100) {
        nav.classList.add('sticky');
        games.style.color = "#fff";

    }
    else {
        nav.classList.remove('sticky');
        games.style.color = "rgb(91, 187, 177)";

    }
});

// -----------------------------------------------DOM-------------------------------------------------------------------------------








let menu = document.querySelector('.menu');
let setting = document.querySelector('.setting');
let leftm = document.querySelector('.leftm');
let rightm = document.querySelector('.rightm');
let crossl = document.querySelector('.iconl i');
let crossr = document.querySelector('.iconr i');
let playerx = document.querySelector('.playerx');
let playero = document.querySelector('.playero');
let playerx1 = document.querySelector('.playerx .playerx1');
let playero1 = document.querySelector('.playero .playero1');
let option = document.querySelector('.option');
let playerxs = document.querySelector('.playerxs');
let playeros = document.querySelector('.playeros');
let playerxsn = document.querySelector('.playerxs .playerxsn');
let playerosn = document.querySelector('.playeros .playerosn');
let fscdouble = document.querySelector('.fscdouble');
let playerxw = document.querySelector('.playerxw');
let playerow = document.querySelector('.playerow');
let playerxw1 = document.querySelector('.playerxw .playerxw1');
let playerow1 = document.querySelector('.playerow .playerow1');
let playerd = document.querySelector('.playerd');
let bar = document.querySelector('.bar');
let snumberx = document.querySelector('.snumber .snumber1 h2');
let snumbert = document.querySelector('.snumber .snumber2 h2');
let snumbero = document.querySelector('.snumber .snumber3 h2');
let theme = document.querySelector('.theme');
let playerxlike = document.querySelector('.playerxlike');
let playerolike = document.querySelector('.playerolike');
let like = document.querySelector('.like');
let namex = document.querySelector('.name .name1 h2');

let nameo = document.querySelector('.name .name3 h2');








let scorex = snumberx.innerHTML;
let scoret = snumbert.innerHTML;
let scoreo = snumbero.innerHTML;



playerxlike.addEventListener('click', function run() {


    like.classList.add('likerm');
    option.classList.remove('likeoption');
    nameo.innerHTML = "Alexa";
    playero1.innerHTML = "Alexa";
    playerosn.innerHTML = "Alexa Start";
    playerow1.innerHTML = "Alexa Win";
    ai = true;




});
playerolike.addEventListener('click', function run() {



    like.classList.add('likerm');
    option.classList.remove('likeoption');
    namex.innerHTML = "Player O";
    playerx1.innerHTML = "Player O";
    playerxsn.innerHTML = "Player O Start";
    playerxw1.innerHTML = "Player O Win";
    nameo.innerHTML = "Alexa";
    playero1.innerHTML = "Alexa";
    playerosn.innerHTML = "Alexa Start";
    playerow1.innerHTML = "Alexa Win";
    ai = false;

});





menu.addEventListener('click', function run() {


    leftm.classList.toggle('active');
});
setting.addEventListener('click', function run() {
    rightm.classList.toggle('sactive');
});
crossl.addEventListener('click', function run() {
    leftm.classList.toggle('active');
});
crossr.addEventListener('click', function run() {
    rightm.classList.toggle('sactive');
});
playerx.addEventListener('click', function run() {
    flag = true;
    temp = true;
    bar.style.left = 35 + "vw";

    if (ai == true) {
        bar.style.backgroundColor = "crimson";

    }
    else {
        bar.style.backgroundColor = "lightskyblue";
    }
    option.classList.add('optionrm');
    playerxs.classList.add('playerxsactive');

});
playero.addEventListener('click', function run() {
    flag = true;
    temp = false;
    bar.style.left = 55 + "vw";

    if (ai == true) {

        bar.style.backgroundColor = "lightskyblue";
    }
    else {
        bar.style.backgroundColor = "crimson";
    }
    option.classList.add('optionrm');
    playeros.classList.add('playerosactive');


});
playerxs.addEventListener('click', function run() {
    flag = false;
    MLfirst = false;
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    playerxs.classList.remove('playerxsactive');

});
playeros.addEventListener('click', function run() {
    flag = true;
    MLfirst = true;
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    
    bestmove();
    playeros.classList.remove('playerosactive');


});
playerxw.addEventListener('click', function run() {

    count = 0;
    playerxw.classList.remove('playerxwcome');
    option.classList.remove('optionrm');
    reset();


});
playerow.addEventListener('click', function run() {

    count = 0;
    playerow.classList.remove('playerowcome');
    option.classList.remove('optionrm');
    reset();


});
playerd.addEventListener('click', function run() {

    count = 0;
    playerd.classList.remove('playerdcome');
    option.classList.remove('optionrm');
    reset();


});



let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];





function checkwin() {
    if (ai == true) {


        if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block2').innerHTML && document.getElementById('block2').innerHTML == document.getElementById('block3').innerHTML && document.getElementById('block3').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block3').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;

        }
        else if (document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block4').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block7').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block7').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block4').innerHTML && document.getElementById('block4').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block2').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block2').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "X") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }

        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block2').innerHTML && document.getElementById('block2').innerHTML == document.getElementById('block3').innerHTML && document.getElementById('block3').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block3').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;

            flag = true;
        }
        else if (document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block4').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block7').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block7').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block4').innerHTML && document.getElementById('block4').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block2').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block2').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "O") {
            playerow.classList.add('playerowcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "") {
            playerd.classList.add('playerdcome');
            scoret++;

            snumbert.innerHTML = scoret;

            flag = true;
        }
        else {
            flag = false;

        }

    }

    else {
        if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block2').innerHTML && document.getElementById('block2').innerHTML == document.getElementById('block3').innerHTML && document.getElementById('block3').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block3').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;

        }
        else if (document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block4').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block7').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block7').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block4').innerHTML && document.getElementById('block4').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block2').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block2').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "O") {
            playerxw.classList.add('playerxwcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scorex++;

            snumberx.innerHTML = scorex;
            flag = true;
        }

        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block2').innerHTML && document.getElementById('block2').innerHTML == document.getElementById('block3').innerHTML && document.getElementById('block3').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block3').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;

            flag = true;
        }
        else if (document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block4').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block7').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block7').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block4').innerHTML && document.getElementById('block4').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block4').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block2').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block2').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block8').innerHTML && document.getElementById('block8').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block2').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block8').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block6').innerHTML && document.getElementById('block6').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block6').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block9').innerHTML != "" && document.getElementById('block1').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block9').innerHTML && document.getElementById('block9').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block1').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block9').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block3').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block3').innerHTML == document.getElementById('block5').innerHTML && document.getElementById('block5').innerHTML == document.getElementById('block7').innerHTML && document.getElementById('block7').innerHTML == "X") {
            playerow.classList.add('playerowcome');
            document.getElementById('block3').style.color = "gold";
            document.getElementById('block5').style.color = "gold";
            document.getElementById('block7').style.color = "gold";
            scoreo++;

            snumbero.innerHTML = scoreo;
            flag = true;
        }
        else if (document.getElementById('block1').innerHTML != "" && document.getElementById('block2').innerHTML != "" && document.getElementById('block3').innerHTML != "" && document.getElementById('block4').innerHTML != "" && document.getElementById('block5').innerHTML != "" && document.getElementById('block6').innerHTML != "" && document.getElementById('block7').innerHTML != "" && document.getElementById('block8').innerHTML != "" && document.getElementById('block9').innerHTML != "") {
            playerd.classList.add('playerdcome');
            scoret++;

            snumbert.innerHTML = scoret;

            flag = true;
        }
        else {
            flag = false;

        }
    }

}


function bardo(phch, key) {
    if (phch == "block1") {
        board[0][0] = key;
    }
    else if (phch == "block2") {
        board[0][1] = key;
    }
    else if (phch == "block3") {
        board[0][2] = key;
    }
    else if (phch == "block4") {
        board[1][0] = key;
    }
    else if (phch == "block5") {
        board[1][1] = key;
    }
    else if (phch == "block6") {
        board[1][2] = key;
    }
    else if (phch == "block7") {
        board[2][0] = key;
    }
    else if (phch == "block8") {
        board[2][1] = key;
    }
    else if (phch == "block9") {
        board[2][2] = key;
    }
}

function alexaturn(first, second, key) {
    if (first == '0' && second == '0' && key == 'O') {
        let hook = document.getElementById("block1");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '0' && second == '1' && key == 'O') {
        let hook = document.getElementById("block2");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '0' && second == '2' && key == 'O') {
        let hook = document.getElementById("block3");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '1' && second == '0' && key == 'O') {
        let hook = document.getElementById("block4");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '1' && second == '1' && key == 'O') {
        let hook = document.getElementById("block5");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '1' && second == '2' && key == 'O') {
        let hook = document.getElementById("block6");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '2' && second == '0' && key == 'O') {
        let hook = document.getElementById("block7");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '2' && second == '1' && key == 'O') {
        let hook = document.getElementById("block8");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '2' && second == '2' && key == 'O') {
        let hook = document.getElementById("block9");
        hook.style.color = "lightskyblue";
        hook.innerHTML = "O";
    }
    else if (first == '0' && second == '0' && key == 'X') {
        let hook = document.getElementById("block1");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '0' && second == '1' && key == 'X') {
        let hook = document.getElementById("block2");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '0' && second == '2' && key == 'X') {
        let hook = document.getElementById("block3");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '1' && second == '0' && key == 'X') {
        let hook = document.getElementById("block4");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '1' && second == '1' && key == 'X') {
        let hook = document.getElementById("block5");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '1' && second == '2' && key == 'X') {
        let hook = document.getElementById("block6");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '2' && second == '0' && key == 'X') {
        let hook = document.getElementById("block7");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '2' && second == '1' && key == 'X') {
        let hook = document.getElementById("block8");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }
    else if (first == '2' && second == '2' && key == 'X') {
        let hook = document.getElementById("block9");
        hook.style.color = "crimson";
        hook.innerHTML = "X";
    }



}











function equals3(a, b, c) {
    return a == b && b == c && a != '';
}

function checkWinner() {
    let winner = null;

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
        }
    }

    // Vertical
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
        }
    }

    // Diagonal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        winner = board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        winner = board[2][0];
    }

    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }

    if (winner == null && openSpots == 0) {
        return "tie";
    } else {
        return winner;
    }
}




let scores = {
    X: 10,
    O: -10,
    tie: 0
};

let aiscores = {
    X: -10,
    O: 10,
    tie: 0
};












function fill(control) {



    if (ai == true) {
        if (flag == false) {
            if (document.getElementById(control.id).innerHTML == "") {
                //  if(count%2==0)
                //  {

                let ground = document.getElementById(control.id);
                bardo(control.id, 'X');

                ground.style.color = "crimson";
                bar.style.left = 55 + "vw";
                bar.style.backgroundColor = "lightskyblue";

                ground.innerHTML = "X";


                //  }
                //  else
                //  {
                //   let ground=document.getElementById(control.id);
                //   ground.style.color="lightskyblue";
                //   bar.style.left = 35+"vw";
                //   bar.style.backgroundColor="crimson";
                //   ground.innerHTML="O";
                //  }
                //  count++;
                checkwin();
                if (flag == false) {
                    flag = true;
                    bestmove();
                }

                //  console.log(flag);

            }
        }

    }
    else {
        if (flag == false) {
            if (document.getElementById(control.id).innerHTML == "") {
                //  if(count%2!=0)
                //  {

                //      let ground=document.getElementById(control.id);
                //      ground.style.color="crimson";
                //      bar.style.left = 55+"vw";

                //      bar.style.backgroundColor="lightskyblue";
                //      ground.innerHTML="X";
                //  }
                //  else
                //  {
                let ground = document.getElementById(control.id);
                bardo(control.id, 'O');
                ground.style.color = "lightskyblue";
                bar.style.left = 55 + "vw";
                bar.style.backgroundColor = "crimson";

                ground.innerHTML = "O";
                //  }
                //  count++;
                checkwin();
                if (flag == false) {
                    flag = true;
                    bestmove();
                }

            }
        }

    }




}

function bestmove() {



    // if (MLfirst == true) {
        let bestScore = -Infinity;
        let move;

        for (let k= 0; k< 3; k++) {
            for (let j = 0; j < 3; j++) {
                if (board[k][j] == '') {
                    if (ai == true) {
                        board[k][j] = 'O';
                    }
                    else {
                        board[k][j] = 'X';
                    }
                    let score = minimax(board, 0, false);
                    board[k][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        move = { k, j };
                    }
                }
            }
        }

        if (ai == true) {
            board[move.k][move.j] = 'O';
            alexaturn(move.k, move.j, 'O');
            bar.style.left = 35 + "vw";
            bar.style.backgroundColor = "crimson";


        }
        else {
            board[move.k][move.j] = 'X';
            alexaturn(move.k, move.j, 'X');
            bar.style.left = 35 + "vw";
            bar.style.backgroundColor = "lightskyblue";

        }

        flag = false;
        checkwin();
    // }
    // else {

    // }

}



function minimax(board, depth, isMaximizing) {
    let result = checkWinner();
    if (result !== null) {

        if (ai == true) {
            return aiscores[result];
        }
        else {
            return scores[result];
        }
    }



    // return 1;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let k= 0; k< 3; k++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[k][j] == '') {
                    if (ai == true) {
                        board[k][j] = 'O';
                    }
                    else {
                        board[k][j] = 'X';
                    }
                    let score = minimax(board, depth + 1, false);
                    board[k][j] = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
        }
        return bestScore;
    }
    else {
        let bestScore = Infinity;
        for (let k= 0; k< 3; k++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (board[k][j] == '') {
                    if (ai == true) {
                        board[k][j] = 'X';
                    }
                    else {
                        board[k][j] = 'O';
                    }
                    let score = minimax(board, depth + 1, true);
                    board[k][j] = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
        }
        return bestScore;
    }
}



function reset() {

    for (var k= 1; k<= 9; k++) {
        let reset = document.getElementById('block' + k).innerHTML = "";
    }
    temp = true;
}









// -----------------------------------------------------------------single------------------------------------------------------------------

// -----------------------------------------------------------------single------------------------------------------------------------------


