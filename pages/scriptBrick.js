//--------------------------------VARIABLES-----------------------------------
//VAR CANVAS CTX :
var canvas = document.getElementById("myCanvas");
var ctx = this.canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var canvasPaddingBottom = 10;
//VAR BALL :
var ballRadius = 10;
//VAR PADDLE :
var paddleHeight = 15;
var paddleWidth = 130;
var paddleX = (canvas.width - paddleWidth) / 2;
//VAR DIRECTION KEYDOWN :
var rightPressed = false;
var leftPressed = false;
//VAR BRICKS :
var brickRowCount = 5;
var brickColumnCount = 9;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffSetTop = 30;
var brickOffSetLeft = 30;
//GAME GOING:
var score = 0;
var lives = 3;

var bricks = [];
for(c=0; c<brickColumnCount; c++){
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++){
        bricks[c][r] = {x: 0, y: 0, status: 1};
    }
}

//--------------------------------EVENTS-----------------------------------

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//document.addEventListener("mousemove", mouseMoveHandler, false);

//--------------------------------KEY MANAGER------------------------------

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode == 13){
        document.location.reload();
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

//----------------------------DRAW FUNCTIONS-------------------------------
//BALL :
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
//PADDLE:
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight-canvasPaddingBottom, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}
//BRICKS :
function drawBricks(){
    for (c=0; c<brickColumnCount; c++) {
        for (r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    for (c=1; c<brickColumnCount-1; c++) {
        for (r=1; r<brickRowCount-1; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    for (c=2; c<brickColumnCount-2; c++) {
        for (r=2; r<brickRowCount-2; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffSetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffSetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "yellow";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
//LIVES:
function drawLives(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives : " + lives, 20, 450);
}
//SCORE:
function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score : " + score, 20, 480);
}
//----------------------------GAME MANAGER-------------------------------
//SCORE:
function manageScore(scoreValue){
    var b = bricks[c][r];
    if(b.status == 1){
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y + brickHeight){
            dy = -dy;
            b.status = 0;
            score += scoreValue;
            if(score == brickColumnCount*brickRowCount){
                //WON THE GAME
                var centreX = canvas.width / 2;
                var centreY = canvas.height / 2;
                throw new Error();
                ctx.save();
                ctx.font = "35px Arial";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = "red";
                ctx.lineWidth = 3;
                ctx.strokeText("Press ENTER to replay", centreX, centreY);
                ctx.fillText("Press ENTER to replay", centreX, centreY);
                ctx.restore();
            } 
        }
    }
}
//COLLISION:
function collisionDetection(){
    for (c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            manageScore(1);
        }
    }
    for (c=1; c<brickColumnCount-1; c++) {
        for(r=1; r<brickRowCount-1; r++) {
            manageScore(2);
        }
    }
    for (c=2; c<brickColumnCount-2; c++) {
        for(r=2; r<brickRowCount-2; r++) {
            manageScore(3);
        }
    }
}
//----------------------------INIT()-------------------------------
function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    drawScore();
    drawLives();
    collisionDetection();
    if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if ( y + dy < ballRadius) {
        dy = -dy;
    } 
    else if(y + dy > canvas.height-ballRadius-paddleHeight) 
    {
        if(x > paddleX+1 && x < paddleX + paddleWidth){
            dy = -dy;
        } else if(x > paddleX && x < paddleX + paddleWidth){
            dy = -dy;
        } else {
            //GAME OVER
            lives--;
            if(!lives){
                var centreX = canvas.width / 2;
                var centreY = canvas.height / 2;
                ctx.save();
                ctx.font = "35px Arial";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = "red";
                ctx.lineWidth = 3;
                ctx.strokeText("Press ENTER to replay", centreX, centreY);
                ctx.fillText("Press ENTER to replay", centreX, centreY);
                ctx.restore();
                throw new Error();
            } else {
                x = canvas.width / 2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth){
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0){
        paddleX-=7;
    }
    
    x = x + dx;
    y = y + dy;
    requestAnimationFrame(draw);
}
draw();