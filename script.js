const root = document.getElementById("root");
const Firstcode = () => {
  const name = "hello Jenny Roy";
  return (root.innerHTML = `<h1>${name}</h1>`);
};
const Secondcode = () => {
  const name = "hello Harry Khan";
  return (root.innerHTML = `<h1>${name}</h1>`);
};
let run = true;
const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (run === true) {
    Firstcode();
    run = false;
  } else if (run === false) {
    Secondcode();
    run = true;
  }
});

// DOM
//function,callBack fuction,return() fuction
//$template string + innerHTML
//events,addEventListener()
//Condition rendering