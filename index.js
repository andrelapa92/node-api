import app from './src/app.js';
import models from './src/models/index.js';

async function startServer() {
    try {
        await models.sequelize.authenticate();
        console.log('Banco de dados conectado com sucesso!');
        const PORT = 3001;
        app.listen(PORT, () => {
            console.log(`Servidor backend (NodeJS) rodando na porta ${PORT}.`);
        });
    } catch (error) {
        console.log('Não foi possível iniciar o servidor:', error);
    }
}

startServer();