/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('fotos', 'aluno_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('fotos', 'aluno_id');
  },
};
