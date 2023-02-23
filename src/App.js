import HomePage from "./pages/HomePage";
import IndividualPage from './pages/IndividualPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<IndividualPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
