import app from './app.js';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CRTL + Clique em htpp://localhost:${port}`);
});
