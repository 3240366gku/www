const quiz = [
  {
    img: "img/うさぎ.jpg",
    q: "うさぎの好きな食べ物は？",
    c: ["キャベツ", "にんじん", "さかな", "アイス"],
    a: 1
  },
  {
    img: "img/ちいかわ.jpg",
    q: "ちいかわの性格は？",
    c: ["元気", "臆病で健気", "クール", "おこりっぽい"],
    a: 1
  },
  {
    img: "img/ハチワレ.jpeg",
    q: "ハチワレのよく言う言葉は？",
    c: ["なんとかなるよ！", "やったー！", "しょぼん", "おこぷん"],
    a: 0
  },
  {
    img: "img/ラッコ師匠.jpg",
    q: "ラッコ師匠といえば？",
    c: ["パンチ", "勉強", "推し活", "料理"],
    a: 0
  },
  {
    img: "img/モモンガ.jpg",
    q: "モモンガのチャームポイントは？",
    c: ["羽", "大きな目", "足の速さ", "しっぽが3本"],
    a: 1
  }
];

let now = 0;
let score = 0;

let qEl = document.querySelector("#question");
let imgEl = document.querySelector("#quiz-img");
let chEl = document.querySelector("#choices");
let msgEl = document.querySelector("#result");
let nextBtn = document.querySelector("#next-btn");
let restartBtn = document.querySelector("#restart-btn");

function showQuiz() {
  console.log("問題番号:", now);
  let q = quiz[now];
  qEl.textContent = q.q;
  imgEl.src = q.img;
  chEl.innerHTML = "";

  q.c.forEach(function (item, i) {
    let b = document.createElement("button");
    b.textContent = item;
    b.addEventListener("click", function () {
      check(i);
    });
    chEl.appendChild(b);
  });

  msgEl.textContent = "";
  nextBtn.style.display = "none";
}

function check(choice) {
  let q = quiz[now];
  if (choice === q.a) {
    msgEl.textContent = "正解！";
    score++;
  } else {
    msgEl.textContent = "不正解…";
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", function () {
  now++;
  if (now < quiz.length) {
    showQuiz();
  } else {
    finish();
  }
});

function finish() {
  qEl.textContent = score + "問正解でした！";
  imgEl.style.display = "none";
  chEl.innerHTML = "";
  nextBtn.style.display = "none";

  if (score >= 4) {
    msgEl.textContent = "愛がすごい！";
  } else {
    msgEl.textContent = "ちいかわ達をもっと知ろう！";
  }

  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", function () {
  now = 0;
  score = 0;
  imgEl.style.display = "block";
  restartBtn.style.display = "none";
  showQuiz();
});

showQuiz();

