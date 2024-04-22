// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import Header from './Header';
// // import 'bootstrap/dist/css/bootstrap.css';



// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //       <Routes>
// //     <Header/>
// //     <App />
// //     </Routes>
// //   </React.StrictMode>
// // );


// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './index.css';
// // import App from './App';
// // import Header from './Header';
// // import 'bootstrap/dist/css/bootstrap.css';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// // import UploadForm from './UploadForm';
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //     <Router>
// //         <Route exact path="/" component={App} />
// //         <Route path="/upload" component={UploadForm} />
// //     </Router>,
// // );


// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Home from "./Home";
// // import UploadForm from "./UploadForm";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<UploadForm />}>
// //           <Route path="/dashboard" element={<Home/>}/>
// //         </Route>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header/> 
//     <Routes>
//     <Route path="/" element={<UploadForm/>} />
//     <Route path='/dashboard' element={<Home/>} />
//     </Routes>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Header from './Header';





ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
