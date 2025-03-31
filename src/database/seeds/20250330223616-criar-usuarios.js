const bcryptjs = require('bcryptjs');

/* * @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        nome: 'Caio Souza',
        email: 'Caio.souz@gmail.com',
        password_hash: await bcryptjs.hash('987654', 8),
        created_at: new Date(),
        updated_at: new Date(),

      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
