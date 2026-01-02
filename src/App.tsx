import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CurriculoClassic from './components/CurriculoClassic';
import CurriculoTech from './components/CurriculoTech';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/v2" replace />} />
        <Route path="/v1" element={<CurriculoClassic />} />
        <Route path="/v2" element={<CurriculoTech />} />
      </Routes>
    </Router>
  )
}

export default App
