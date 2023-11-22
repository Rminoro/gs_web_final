// pages/api/tabela/[id].js
export default async function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      try {
        const response = await fetch(`URL_DO_SEU_BACKEND/tabela/${id}`);
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error('Erro ao obter dados da tabela:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
    } else if (req.method === 'PUT') { // Corrigido para "else if"
      try {
        const response = await fetch(`URL_DO_SEU_BACKEND/tabela/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        });
  
        if (response.ok) {
          res.status(200).json({ message: 'Dados atualizados com sucesso!' });
        } else {
          console.error('Erro ao atualizar dados da tabela. Status:', response.status);
          res.status(response.status).json({ error: 'Erro ao atualizar dados da tabela' });
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      }
    }
  }
  