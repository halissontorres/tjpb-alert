<p align="center">
<img src="assets/tjpb-alert-logo.png" width="300" height="150" alt="TJPB Alert"/>
</p>

# TJPB Alert

Sistema de notificação de emergências em tempo real para segurança institucional do Tribunal de Justiça da Paraíba.

## Sobre o Projeto

O TJPB Alert é uma aplicação web fullstack desenvolvida para permitir que servidores do TJPB enviem e recebam alertas instantâneos sobre situações de risco em suas unidades de trabalho. O sistema classifica alertas por nível de prioridade e utiliza WebSocket para comunicação em tempo real.

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso - TCC da Pós-Graduação em Desenvolvimento Full Stack da [Pontifícia Universidade Católica do Rio Grande do Sul - PUCRS](https://online.pucrs.br/pt-br/).

## Funcionalidades

- Autenticação de usuários com JWT
- Envio de alertas de emergência com categorização
- Notificações em tempo real via WebSocket
- Classificação automática de prioridades
- Painel administrativo para coordenadores de segurança
- Histórico completo de ocorrências
- Sistema de auditoria de alterações
- Relatórios e estatísticas

## Tecnologias

### Backend
- Node.js 18+
- Express.js
- PostgreSQL
- Sequelize ORM
- Socket.io

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- Socket.io Client

## Estrutura do Projeto

```
tjpb-alert/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── socket/
│   │   └── server.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── docs/
│   ├── api/
│   ├── diagramas/
│   └── mockups/
├── database/
│   ├── schema.sql
│   └── seeds.sql
└── README.md
```


## Autor

**Halisson Torres**
- GitHub: [@halissontorres](https://github.com/halissontorres)

## Orientação

**[Prof. Dr. Alexandre Agustini](https://www.inf.pucrs.br/agustini/)**
- Instituição: Pontifícia Universidade Católica do Rio Grande do Sul - PUC-RS

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Agradecimentos

- [Tribunal de Justiça da Paraíba](https://www.tjpb.jus.br)

---

Desenvolvido como Trabalho de Conclusão de Curso - Pós-Graduação em Desenvolvimento Full Stack - 2025
