import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



let curDate= new Date();
curDate = curDate.getHours();
let greeting = " ";
const greetingStyle = {};

if (curDate >= 3 && curDate < 12) {
  greeting = "Good Morning";
  greetingStyle.color = "green";
}

else if (curDate >= 12 && curDate < 17) {
  greeting = "Good Afternoon";
  greetingStyle.color = "Blue";
}
else if (curDate >= 17 && curDate < 20) {
  greeting = "Good Evening";
  greetingStyle.color = "Red";
}
else {
  greeting = "Good Night";
  greetingStyle.color = "Black";
}

ReactDOM.render(
    <>
      <div>
          <h1>
                Hello Everyone! <span style={greetingStyle}>{greeting}</span>
          </h1>
      </div>    
    </>,
  document.getElementById("root")
);
