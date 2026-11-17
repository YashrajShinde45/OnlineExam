
let q = [
  {q:"HTML stands for?", o:["Hyper Text Markup Language","High Text","Home Tool"], a:0},
  {q:"CSS is used for?", o:["Programming","Styling","Database"], a:1},
  {q:"JS stands for?", o:["JavaScript","JavaStyle","JustScript"], a:0}
];

let i = 0, score = 0;

function show() {
  document.getElementById("question").innerText = q[i].q;
  document.getElementById("options").innerHTML =
    q[i].o.map((x,n) =>
      `<p><input type="radio" name="ans" value="${n}"> ${x}</p>`
    ).join("");
}

function next() {
  let ans = document.querySelector('input[name="ans"]:checked');
  if (!ans) return alert("Select an answer!");

  if (+ans.value === q[i].a) score++;

  i++;
  if (i < q.length) show();
  else {
    document.querySelector(".box").innerHTML =
      `<h2>Exam Completed!</h2><h3>Your Score: ${score}/${q.length}</h3>`;
  }
}

show();
