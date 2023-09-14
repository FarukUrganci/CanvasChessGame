
var canvas = document.getElementById('chessBoard');
var ctx = canvas.getContext('2d');

chessBoardOlustur();

var whiteKnight = document.getElementById('whiteKnight');

var x = 200 , y = 350;

ctx.drawImage(whiteKnight, x, y, 50, 50);

canvas.addEventListener('click', run);


function run(e){

  var yeniX = Math.floor(e.offsetX / 50)   * 50; /* Kesin Kordinat Almak*/
  var yeniY = Math.floor(e.offsetY / 50)   * 50;
        
  if (Math.abs(yeniX - x) <= 50 && Math.abs(yeniY - y) <= 50) {

  x = yeniX;
  y = yeniY;

  temizle_Canvas();
  chessBoardOlustur();
  Sah_Ciz(50,50);

  };

};

function Sah_Ciz(a,b){
  ctx.drawImage(whiteKnight, x, y, a, b);

};

function temizle_Canvas(){

  ctx.clearRect(0, 0, canvas.width, canvas.height);
    
};

function chessBoardOlustur(){

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      ctx.fillStyle = (i + j) % 2 == 0 ? '#FFFFFF' : '#000080'; // true ilki false ise lacivert
      ctx.fillRect(i * 50, j * 50, 50, 50);
    }
  }

};
