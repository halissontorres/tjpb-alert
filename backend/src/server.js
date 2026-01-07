import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';

// Carregar variáveis de ambiente
dotenv.config();

// Criar aplicação Express
const app = express();
const httpServer = createServer(app);

// Configurar Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: process.env.SOCKET_CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
});

// Middlewares globais
app.use(helmet()); // Segurança HTTP headers
app.use(cors()); // CORS
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded

// Middleware de log (desenvolvimento)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// Rota de health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0'
  });
});

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'TJPB Alert API',
    version: '1.0.0',
    documentation: '/api-docs',
    health: '/health'
  });
});

// Socket.io - Gerenciamento de conexões
io.on('connection', (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  // Entrar em sala específica (unidade)
  socket.on('join_unidade', (unidadeId) => {
    socket.join(`unidade_${unidadeId}`);
    console.log(` Socket ${socket.id} entrou na unidade ${unidadeId}`);
  });

  // Sair da sala
  socket.on('leave_unidade', (unidadeId) => {
    socket.leave(`unidade_${unidadeId}`);
    console.log(`Socket ${socket.id} saiu da unidade ${unidadeId}`);
  });

  // Desconexão
  socket.on('disconnect', () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

// Disponibilizar io para outros módulos
app.set('io', io);

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.path,
    method: req.method
  });
});

// Tratamento global de erros
app.use((err, req, res, next) => {
  console.error('Erro:', err);
  
  res.status(err.status || 500).json({
    error: err.message || 'Erro interno do servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

httpServer.listen(PORT, HOST, () => {
  console.log('');
  console.log('   ========================================');
  console.log(`   TJPB Alert Backend`);
  console.log('   ========================================');
  console.log(`   Servidor: http://${HOST}:${PORT}`);
  console.log(`   Health: http://${HOST}:${PORT}/health`);
  console.log(`   WebSocket: ws://${HOST}:${PORT}`);
  console.log(`   Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log('   ========================================');
  console.log('');
});

// Tratamento de shutdown gracioso
process.on('SIGTERM', () => {
  console.log('SIGTERM recebido. Encerrando servidor...');
  httpServer.close(() => {
    console.log('Servidor encerrado com sucesso');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('\n SIGINT recebido. Encerrando servidor...');
  httpServer.close(() => {
    console.log(' Servidor encerrado com sucesso');
    process.exit(0);
  });
});

export default app;