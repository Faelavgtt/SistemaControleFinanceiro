import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login, Dashboard } from '@/pages';
import './App.css'

function App() {
  // Futuramente, esse estado virá do hook do Supabase
  const isAuthenticated = false; 

  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rota Privada - Protegida */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />

        {/* Redirecionamento Padrão */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Página 404 básica */}
        <Route path="*" element={<div className="text-white flex items-center justify-center h-screen">Página não encontrada.</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;