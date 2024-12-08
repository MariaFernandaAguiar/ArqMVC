import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.send('<h1>Ambiente Configurado</h1>');  
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});