let screen = document.querySelector('.screen');

const satu = document.querySelector('.satu');
const dua = document.querySelector('.dua');
const tiga = document.querySelector('.tiga');
const empat = document.querySelector('.empat');
const lima = document.querySelector('.lima');
const enam = document.querySelector('.enam');
const tujuh = document.querySelector('.tujuh');
const delapan = document.querySelector('.delapan');
const sembilan = document.querySelector('.sembilan');
const nol = document.querySelector('.nol');

const tambah = document.querySelector('.tambah');
const kurang = document.querySelector('.kurang');
const kali = document.querySelector('.kali');
const bagi = document.querySelector('.bagi');

const result = document.querySelector('.result');

//value terkini pada screen
let screen_now = screen.getAttribute('value');

let data1, data2;

satu.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 1;
  screen_now = screen_add;
});
dua.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 2;
  screen_now = screen_add;
});
tiga.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + 3;
    screen_now = screen_add;
});
empat.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 4;
  screen_now = screen_add;
});
lima.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 5;
  screen_now = screen_add;
});
enam.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + 6;
    screen_now = screen_add;
});
tujuh.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 7;
  screen_now = screen_add;
});
delapan.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 8;
  screen_now = screen_add;
});
sembilan.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 9;
  screen_now = screen_add;
});
nol.addEventListener('click', function() {
  let screen_add = screen.innerHTML = screen_now + 0;
  screen_now = screen_add;
});

tambah.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + "+";
    data1 = screen_now;
    screen_now = screen_add;
    // data1 = screen_now;
    // let screen_add = screen.innertHTML = screen_now + "+";
    // screen_now = screen_add;
    // alert(`${data1} ||| ${screen_add}`);
  });
kurang.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + "-";
    data1 = screen_now;
    screen_now = screen_add;
  });
kali.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + "X";
    data1 = screen_now;
    screen_now = screen_add;
  });
bagi.addEventListener('click', function() {
    let screen_add = screen.innerHTML = screen_now + "/";
    data1 = screen_now;
    screen_now = screen_add;
  });


result.addEventListener('click', function() {
  let operation = screen_now;
  operation = operation.split("+");
  alert(parseInt(operation[1]) + parseInt(operation[0]));
});
