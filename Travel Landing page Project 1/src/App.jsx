// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>Counter Value : {count}</h1>  
//       <button onClick={() => setCount(count + 1)}>
//         Increase count number
//       </button>
//     </>
//   )
// }

// export default App




// function App(){
//   return(
//     // <h1>Hello</h1>  show error
//     <h1>First component</h1>
//   )
//  }
//  export default App;




// function App(){
//   return(
//     <div>
//       <h1>Hello React</h1>
//       <h2>First Component</h2>
//     </div>
//   )
// }

// export default App;





// import Login, { Profile } from "./UserComponent";

// function App() {
//   return (
//     <div>
//       <Login />
//       <Profile />
//     </div>
//   )
// }
// export default App;



import './App.css'
import Navigation from './component/Navigation';
import HeroSection from './component/Hero';
const App = () => {
  return (
    <div>
     <Navigation/>
     <HeroSection/>
    </div>
  );
};
export default App;