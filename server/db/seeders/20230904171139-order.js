/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        orderNumber: 123,
        total: 62.99,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        orderNumber: 124,
        total: 24.15,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {})
  }
}
