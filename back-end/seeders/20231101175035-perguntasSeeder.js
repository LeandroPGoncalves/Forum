'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return  await queryInterface.bulkInsert('Perguntas', [{
        Pergunta: 'Realizar a contrução do back utilizando laravel ou node?',
        createdAt: new Date(),        
        updatedAt: new Date()       
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Perguntas', null, {});
     
  }
};
