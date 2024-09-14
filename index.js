import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Configurar o middleware para processar JSON
app.use(express.json());

// Configurar CORS para permitir requisições de qualquer origem
app.use(cors());

// Endpoint GET
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Endpoint POST /criarUsuario
app.post('/criarUsuario', (req, res) => {
  // Extrair dados do corpo da requisição
  console.log(req.body)
  const { name, email, password } = req.body;

  // Verificar se todos os dados foram fornecidos
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
  }

  // Imprimir dados do usuário
  console.log(`Nome: ${nome}`);
  console.log(`Email: ${email}`);
  console.log(`Senha: ${password}`);

  // Responder ao cliente
  res.status(200).json({ message: 'Usuário criado com sucesso' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
