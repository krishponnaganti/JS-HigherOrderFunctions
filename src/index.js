import "./styles.css";
window.funcData = () => {
  document.getElementById("div_data").innerHTML =
    "invoked higher order function";
  // return "invoked higher order function";
};
window.getDefaultData = (funcName) => {
  console.log(funcName);
  return funcName ? funcName() : "";
};

document.getElementById("app").innerHTML = `
<h1>Hello..!</h1>
<div>
 <div id="div_data">higher order function goes when button click</div>
 <button onClick=getDefaultData(funcData)> 
     Click me 
 </button>
</div>
`;
