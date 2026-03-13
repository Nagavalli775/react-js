// ReactElement is a object => render is convert into HTML (browser understands)

// EXERCISE 1
// <div id="parent">
//     <div id="child">
//       <h1>This is h1 tag</h1>
//     </div>
//    </div>

// EXERCISE 2
//    <div id="parent">
//     <div id="child">
//       <h1>This is h1 tag</h1>
//       <h2>This is h2 tag</h2>
//     </div>
//    </div> 

// EXERCISE 3
//    <div id="parent">
//     <div id="child1">
//       <h1>This is h1 tag</h1>
//       <h2>This is h2 tag</h2>
//     </div>
//     <div id="child2">
//       <h3>This is h3 tag</h3>
//       <h4>This is h4</h4>
//     </div>
//    </div> 


// EXERCISE 1 REACT SOLUTION

// const nested_structure = React.createElement("div", {id: "parent"}, 
//   React.createElement("div", {id: "child"}, 
//     React.createElement("h1", {}, "This is h1 tag")
//   ));

// EXERCISE 2 REACT SOLUTION

// const nested_structure = React.createElement("div", {id: "parent"}, 
//   React.createElement("div", {id:"child"}, [
//     React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag")
//   ]));

// EXERCISE 3 REACT SOLUTION

const nested_structure = React.createElement("div", {id: "parent"}, 
  [
  React.createElement("div", {id: "child1"}, 
    [React.createElement("h1", {}, "This is h1 tag"), 
      React.createElement("h2", {}, "This is h2 tag")
    ]),
  
  React.createElement("div", {id: "child2"}, 
    [
      React.createElement("h3", {}, "This is h3 tag"), 
      React.createElement("h4", {}, "This is h4 tag")
    ])
]);

console.log(nested_structure);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nested_structure);