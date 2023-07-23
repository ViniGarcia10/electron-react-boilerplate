import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div>
      <h1>Hello 1</h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
