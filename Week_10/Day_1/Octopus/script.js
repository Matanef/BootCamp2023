// function thirdFunc() {
//     console.log("Greetings from thirdFunc()");
//   }
  
//   function secondFunc() {
//     thirdFunc();
//     console.log("Greetings from secondFunc()");
//   }
  
//   function firstFunc() {
//     secondFunc();
//     console.log("Greetings from firstFunc()");
//   }
  
//   firstFunc();
  
//   // Greetings from thirdFunc()
//   // Greetings from secondFunc()
//   // Greetings from firstFunc()


function secondFunc() {
    console.log("Greetings from secondFunc()");
  }
  
  function firstFunc() {
    secondFunc();
    console.log("Greetings from firstFunc()");
  }
  
  firstFunc();
  
  // Greetings from secondFunc()
  // Greetings from firstFunc()