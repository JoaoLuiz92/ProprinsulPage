import { useEffect, useState } from 'react';

// Componente que exibe o dashboard do usuário

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); // Pegue o token salvo
      try {
        const response = await fetch('http://localhost:3333/company', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json',
          },
       
        });

        if (!response.ok) {
          throw new Error('Falha ao obter dados');
        }

        const data = await response.json();
        setUserData(data); // Salve os dados do usuário no estado
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Carregando dados...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, 
        {JSON.stringify(userData)}
        !</p>
      {/* Outras informações do usuário podem ser exibidas aqui */}
    </div>
  );
}

export default Dashboard;
