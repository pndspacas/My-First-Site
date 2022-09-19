const episode1 = document.querySelector(
  ".showBleachEp1, .showNarutoEp1, .showFairyEp1, .showPieceEp1, .bleachP"
);

document
  .querySelector(".bleachEp1, .narutoEp1, .fairyEp1, .pieceEp1")
  .addEventListener("click", showEp1);

function showEp1() {
  episode1.classList.toggle("hidden");
  episode2.classList.add("hidden");
  episode3.classList.add("hidden");
  episode4.classList.add("hidden");
  episode5.classList.add("hidden");
}

const episode2 = document.querySelector(
  ".showBleachEp2, .showNarutoEp2, .showFairyEp2, .showPieceEp2"
);

document
  .querySelector(".bleachEp2, .narutoEp2, .fairyEp2, .pieceEp2")
  .addEventListener("click", showEp2);

function showEp2() {
  episode2.classList.toggle("hidden");
  episode1.classList.add("hidden");
  episode3.classList.add("hidden");
  episode4.classList.add("hidden");
  episode5.classList.add("hidden");
}

const episode3 = document.querySelector(
  ".showBleachEp3, .showNarutoEp3, .showFairyEp3, .showPieceEp3"
);

document
  .querySelector(".bleachEp3, .narutoEp3, .fairyEp3, .pieceEp3")
  .addEventListener("click", showEp3);

function showEp3() {
  episode3.classList.toggle("hidden");
  episode1.classList.add("hidden");
  episode2.classList.add("hidden");
  episode4.classList.add("hidden");
  episode5.classList.add("hidden");
}

const episode4 = document.querySelector(
  ".showBleachEp4, .showNarutoEp4, .showFairyEp4, .showPieceEp4"
);

document
  .querySelector(".bleachEp4, .narutoEp4, .fairyEp4, .pieceEp4")
  .addEventListener("click", showEp4);

function showEp4() {
  episode4.classList.toggle("hidden");
  episode1.classList.add("hidden");
  episode2.classList.add("hidden");
  episode3.classList.add("hidden");
  episode5.classList.add("hidden");
}

const episode5 = document.querySelector(
  ".showBleachEp5, .showNarutoEp5, .showFairyEp5, .showPieceEp5"
);

document
  .querySelector(".bleachEp5, .narutoEp5, .fairyEp5, .pieceEp5")
  .addEventListener("click", showEp5);

function showEp5() {
  episode5.classList.toggle("hidden");
  episode1.classList.add("hidden");
  episode2.classList.add("hidden");
  episode3.classList.add("hidden");
  episode4.classList.add("hidden");
}
