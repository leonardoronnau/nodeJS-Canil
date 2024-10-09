import express from "express";
import dotenv from 'dotenv';
import mustache from "mustache-express";
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();  // Carrega variáveis de ambiente do arquivo .env

const server = express();

// Configurações do Mustache como engine de visualização
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());




// Servindo arquivos estáticos
server.use(express.static(path.join(__dirname, '../public')));

// Rotas principais
server.use(mainRoutes);

// Middleware para lidar com páginas não encontradas (404)
server.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

// Iniciando o servidor na porta definida no arquivo .env ou na porta 3000 como padrão
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
