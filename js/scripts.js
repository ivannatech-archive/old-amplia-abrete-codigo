// JavaScript Document

//Galery image change

document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream');
  var items = document.querySelectorAll('.gallery__item');
  var prev = document.querySelector('.gallery__prev');
  var next = document.querySelector('.gallery__next');

  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item');
  });

  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item');
  });
});

//Sounds

var teste1 = new Audio();
teste1.src = "./audios/ceu-e-mar.mp3";

var teste2 = new Audio();
teste2.src = "./audios/igreja.mp3";

var teste3 = new Audio();
teste3.src = "./audios/pegadas-nas-pedras.mp3";

