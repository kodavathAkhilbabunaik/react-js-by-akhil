const heading=React.createElement("h1",{id:"parent"},React.createElement("h2",{id:"child"},"child"));
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);