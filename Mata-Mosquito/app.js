var height = 0;
var width = 0;
var lifePoints = 1;
var time = 15;
var lvl = window.location.search;
lvl = lvl.replace('?', '');
var createFlyTime = 1500;

if(lvl === 'normal'){
    createFlyTime = 1500;
}else if(lvl === 'hard'){
    createFlyTime = 1000;
}else if(lvl === 'phd'){
    createFlyTime = 250;
}
// getting the area of the sreen

function screenArea(){
    height = window.innerHeight;
    width = window.innerWidth;
    
}

screenArea();
var timer = setInterval(function(){
    time -= 1;
    if(time < 0){
        clearInterval(timer);
        clearInterval(createFly);
        window.location.href = 'win.html';
    }else{
        document.getElementById('time').innerHTML = time;
    }
    
    
}, 1000)
function randomPosition(){
    // removing a fly if exists
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(lifePoints > 3){
            window.location.href = 'game-over.html';
        }else{
            document.getElementById('lp' + lifePoints).src = 'imagens/coracao_vazio.png';
            lifePoints++;
        }
        
    }

    // creating random positions for the flies

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionY = positionY < 0 ? 0 : positionY;
    positionX = positionX < 0 ? 0 : positionX;

    // creating the flies in the html

    var fly = document.createElement('img');
    fly.src = "imagens/mosca.png";
    fly.className = randomSize() + ' ' + randomSide();
    fly.style.left = positionX + 'px';
    fly.style.top = positionY + 'px';
    fly.style.position = 'absolute';
    fly.id = 'mosquito';
    fly.onclick = function(){
        this.remove();
    }
    document.body.appendChild(fly);

    
}
function randomSize(){
    var classSize = Math.floor(Math.random() * 3);

    switch(classSize){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function randomSide(){
    var randomSide = Math.floor(Math.random() * 2);

    switch(randomSide){
        case 0:
            return 'sideA';
        case 1:
            return 'sideB';
    }
}