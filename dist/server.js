"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config(); // Carrega variáveis de ambiente do arquivo .env
const server = (0, express_1.default)();
// Configurações do Mustache como engine de visualização
server.set('view engine', 'mustache');
server.set('views', path_1.default.join(__dirname, 'views'));
server.engine('mustache', (0, mustache_express_1.default)());
// Servindo arquivos estáticos
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Rotas principais
server.use(index_1.default);
// Middleware para lidar com páginas não encontradas (404)
server.use((req, res) => {
    res.render('pages/404');
});
// Iniciando o servidor na porta definida no arquivo .env ou na porta 3000 como padrão
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
