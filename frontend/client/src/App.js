import { BrowserRouter as Router,Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home'
import UploadForm from './UploadForm';



function App() {
  return (
    <Router>
    <main>
    <Routes>
      <Route path="/dashboard" element={<Home/>} />
      <Route path="/" element={<UploadForm/>} />
    </Routes>
    </main>

    </Router>
  );
}

export default App
