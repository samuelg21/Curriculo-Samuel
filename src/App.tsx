import { HashRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CurriculoClassic from './components/CurriculoClassic';
import CurriculoTech from './components/CurriculoTech';
import { FileText, Cpu } from 'lucide-react';

function Navigation() {
  return (
    <nav className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
      <Link 
        to="/v1" 
        className="bg-[#002C5F] text-white p-2 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center gap-2 text-xs font-bold border-2 border-white"
        title="Versão 1 (Clássico)"
      >
        <FileText className="w-4 h-4" />
        V1
      </Link>
      <Link 
        to="/v2" 
        className="bg-slate-900 text-cyan-400 p-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-bold border-2 border-cyan-500"
        title="Versão 2 (Tech)"
      >
        <Cpu className="w-4 h-4" />
        V2
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/v2" replace />} />
        <Route path="/v1" element={<CurriculoClassic />} />
        <Route path="/v2" element={<CurriculoTech />} />
      </Routes>
    </Router>
  )
}

export default App
