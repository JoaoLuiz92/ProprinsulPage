import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) {
    // Se não houver token no localStorage, redirecionar para a página inicial ou de login
    return <Navigate to="/" />;
  }

  // Se houver token, renderizar o componente filho passado para ProtectedRoute
  return children;
}

export default ProtectedRoute;
