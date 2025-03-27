import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Silva',
      email: 'maria@gmail.com',
      idade: 70,
      peso: 50,
      altura: 1.6,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
