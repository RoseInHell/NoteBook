// import './math'
// import React from 'react';
// import ReactDom from 'react-dom';
// import ReactApp from './App.jsx';


// // React的代码
// ReactDom.render(<ReactApp/>, document.getElementById("app"));

var output = function(i) {
  setTimeout(function() {
    console.log(new Date, i);
  }, 1000);
}


for (var i = 0; i < 5; i++) {
  output(i)
}

console.log(new Date, i);
