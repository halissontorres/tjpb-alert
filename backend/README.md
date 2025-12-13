# TJPB Alert - Backend

Sistema de notificação de emergências em tempo real para o Tribunal de Justiça da Paraíba.

## Sobre o Projeto

O TJPB Alert é uma aplicação web fullstack desenvolvida como Trabalho de Conclusão de Curso da Pós-Graduação em Desenvolvimento Full Stack da PUCRS. O sistema permite que servidores do TJPB enviem e recebam alertas instantâneos sobre situações de risco em suas unidades de trabalho.

Este repositório contém o **backend** da aplicação, desenvolvido em Node.js com Express e PostgreSQL.

## Tecnologias

- **Node.js** v24.x (LTS)
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para Node.js
- **Socket.io** - Comunicação em tempo real (WebSocket)
- **JWT** - Autenticação stateless
- **bcrypt** - Criptografia de senhas
- **Keycloak** - Servidor de autenticação SSO (integração futura)

##  Estrutura do Projeto
```
backend/
├── src/
│   ├── config/          # Configurações (DB, JWT, Socket.io)
│   ├── controllers/     # Controladores de rotas
│   ├── middlewares/     # Middlewares (auth, validação, erros)
│   ├── models/          # Models Sequelize (ORM)
│   ├── routes/          # Definição de rotas da API
│   ├── services/        # Lógica de negócio
│   ├── socket/          # Configuração WebSocket
│   ├── utils/           # Funções auxiliares
│   └── server.js        # Ponto de entrada da aplicação
├── tests/               # Testes automatizados
├── .env.example         # Exemplo de variáveis de ambiente
├── .gitignore
├── package.json
└── README.md
```

## Pré-requisitos

- **Node.js** 24.x ou superior ([instalar via FNM](https://github.com/Schniz/fnm))
- **PostgreSQL** 14 ou superior
- **npm** 11.x ou superior (incluído com Node.js)

## Instalação

### 1. Clone o repositório
```bash
git clone https://github.com/halissontorres/tjpb-alert.git
cd tjpb-alert/backend
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com suas configurações
nano .env
```

**Variáveis obrigatórias:**
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tjpb_alert_dev
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
JWT_SECRET=sua_chave_secreta_aqui
```

### 4. Configure o banco de dados PostgreSQL
```bash
# Criar usuário e banco de dados
sudo -u postgres psql

# No prompt do PostgreSQL:
CREATE USER tjpb_admin WITH PASSWORD 'sua_senha';
CREATE DATABASE tjpb_alert_dev OWNER tjpb_admin;
GRANT ALL PRIVILEGES ON DATABASE tjpb_alert_dev TO tjpb_admin;
\q
```


## Executando o Projeto

### Modo desenvolvimento (com hot-reload)
```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5000`

### Modo produção
```bash
npm start
```

## Testes

### Executar todos os testes
```bash
npm test
```

### Executar testes com cobertura
```bash
npm run test:coverage
```

### Executar testes em modo watch
```bash
npm run test:watch
```


### Endpoints principais


#### Alertas
- `POST /api/alertas` - Criar novo alerta
- `GET /api/alertas` - Listar alertas da unidade do usuário
- `GET /api/alertas/:id` - Buscar alerta por ID
- `PUT /api/alertas/:id` - Atualizar status do alerta
- `GET /api/alertas/historico` - Histórico de ocorrências

#### Administração
- `GET /api/admin/alertas` - Listar todos os alertas (coordenador)
- `GET /api/admin/estatisticas` - Estatísticas gerais (coordenador)
- `GET /api/admin/relatorios` - Gerar relatórios (coordenador)


### Padrão de commits

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração de código
- `test:` testes
- `chore:` tarefas de manutenção

## Projeto Acadêmico

Trabalho de Conclusão de Curso  
**Pós-Graduação em Desenvolvimento Full Stack**  
PUCRS - Turma 2025  
Orientador: Prof. Dr. Alexandre Agustini