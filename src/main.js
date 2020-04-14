// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
// // import { stateChanger} from "./plant.js";

// //function to store the state:
// const storeState = () => {
//   let currentState = {};
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = {...newState};
//     return newState;
//   }
// }

// const stateChanger = storeState(); //this creates a closure over the currentState variable in the outer function.

// // FUNCTION FACTORY, meaning we can easily create more specific functions that alter a plant's soil, water and light to varying degrees.

// const changeState = (prop) => {
//   return (value) => {
//     return (state) =>({
//       ...state,
//       [prop] : (state[prop] || 0) + value
//     })
//   }
// }

// //two functions created using function factory above. Can create more if needed. 
// const feed = changeState("soil");
// const blueFood = changeState("soil")(5);


// $(document).ready(function() {

//   //this function has side effects because we are using jQuery. Manipulating DOM is always a side effect.
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });

