'use strict'

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Red Meat, Liver & Whole Oats Recipe Dog Food 1',
        description: 'A delicious, nourishing kibble that was specially crafted to help support a shelter dogs transition from the adoption environment to their forever home.',
        brand: 'Acana',
        image: 'https://www.allforpets.ca/wp-content/uploads/Acana-Classics-Classic-Red-Dog-Food.jpg',
        price: 44.25,
        category: 'Food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red Meat, Liver & Whole Oats Recipe Dog Food 2',
        description: 'A delicious, nourishing kibble that was specially crafted to help support a shelter dogs transition from the adoption environment to their forever home.',
        brand: 'Acana',
        image: 'https://www.allforpets.ca/wp-content/uploads/Acana-Classics-Classic-Red-Dog-Food.jpg',
        price: 44.25,
        category: 'Food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red Meat, Liver & Whole Oats Recipe Dog Food 3',
        description: 'A delicious, nourishing kibble that was specially crafted to help support a shelter dogs transition from the adoption environment to their forever home.',
        brand: 'Acana',
        image: 'https://www.allforpets.ca/wp-content/uploads/Acana-Classics-Classic-Red-Dog-Food.jpg',
        price: 44.25,
        category: 'Food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Red Meat, Liver & Whole Oats Recipe Dog Food 4',
        description: 'A delicious, nourishing kibble that was specially crafted to help support a shelter dogs transition from the adoption environment to their forever home.',
        brand: 'Acana',
        image: 'https://www.allforpets.ca/wp-content/uploads/Acana-Classics-Classic-Red-Dog-Food.jpg',
        price: 44.25,
        category: 'Food',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bully stick 1',
        description: 'Chewy treat made from natural beef.',
        brand: 'Bully Brands',
        image: 'https://www.petonly.ca/media/catalog/product/cache/49039c4fcdf92ce8cf0ef4ed79baf63e/1/8/188-01006.png',
        price: 9.99,
        category: 'Treats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bully stick 2',
        description: 'Chewy treat made from natural beef.',
        brand: 'Bully Brands',
        image: 'https://www.petonly.ca/media/catalog/product/cache/49039c4fcdf92ce8cf0ef4ed79baf63e/1/8/188-01006.png',
        price: 9.99,
        category: 'Treats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bully stick 3',
        description: 'Chewy treat made from natural beef.',
        brand: 'Bully Brands',
        image: 'https://www.petonly.ca/media/catalog/product/cache/49039c4fcdf92ce8cf0ef4ed79baf63e/1/8/188-01006.png',
        price: 9.99,
        category: 'Treats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bully stick 4',
        description: 'Chewy treat made from natural beef.',
        brand: 'Bully Brands',
        image: 'https://www.petonly.ca/media/catalog/product/cache/49039c4fcdf92ce8cf0ef4ed79baf63e/1/8/188-01006.png',
        price: 9.99,
        category: 'Treats',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Squeaky Plush Dog Toy 1',
        description: 'This adorable plush dog toy is made with soft, durable material and contains a squeaker for added entertainment.',
        brand: 'KONG',
        image: 'https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_360x.png?v=1631621515,%20https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_480x.png?v=1631621515%20480w',
        price: 8.52,
        category: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Squeaky Plush Dog Toy 2',
        description: 'This adorable plush dog toy is made with soft, durable material and contains a squeaker for added entertainment.',
        brand: 'KONG',
        image: 'https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_360x.png?v=1631621515,%20https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_480x.png?v=1631621515%20480w',
        price: 8.52,
        category: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Squeaky Plush Dog Toy 3',
        description: 'This adorable plush dog toy is made with soft, durable material and contains a squeaker for added entertainment.',
        brand: 'KONG',
        image: 'https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_360x.png?v=1631621515,%20https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_480x.png?v=1631621515%20480w',
        price: 8.52,
        category: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Squeaky Plush Dog Toy 4',
        description: 'This adorable plush dog toy is made with soft, durable material and contains a squeaker for added entertainment.',
        brand: 'KONG',
        image: 'https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_360x.png?v=1631621515,%20https://cdn.shopify.com/s/files/1/0529/8693/7544/products/631_CHAR_840px_480x.png?v=1631621515%20480w',
        price: 8.52,
        category: 'Toys',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marble Dog Bowl 1',
        description: 'A standard bowl meant for drinking or eating. Available in two sizes; Small and Medium. Dishwasher safe. Do not microwave. Multiple colors. Happy times all around.',
        brand: 'Top Paw',
        image: 'https://cdn.shopify.com/s/files/1/0575/2507/6173/products/Marble-Bowl_White_Large-min-957x1024_1200x1200.png?v=1623753944',
        price: 6.59,
        category: 'Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marble Dog Bowl 2',
        description: 'A standard bowl meant for drinking or eating. Available in two sizes; Small and Medium. Dishwasher safe. Do not microwave. Multiple colors. Happy times all around.',
        brand: 'Top Paw',
        image: 'https://cdn.shopify.com/s/files/1/0575/2507/6173/products/Marble-Bowl_White_Large-min-957x1024_1200x1200.png?v=1623753944',
        price: 6.59,
        category: 'Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marble Dog Bowl 3',
        description: 'A standard bowl meant for drinking or eating. Available in two sizes; Small and Medium. Dishwasher safe. Do not microwave. Multiple colors. Happy times all around.',
        brand: 'Top Paw',
        image: 'https://cdn.shopify.com/s/files/1/0575/2507/6173/products/Marble-Bowl_White_Large-min-957x1024_1200x1200.png?v=1623753944',
        price: 6.59,
        category: 'Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marble Dog Bowl 4',
        description: 'A standard bowl meant for drinking or eating. Available in two sizes; Small and Medium. Dishwasher safe. Do not microwave. Multiple colors. Happy times all around.',
        brand: 'Top Paw',
        image: 'https://cdn.shopify.com/s/files/1/0575/2507/6173/products/Marble-Bowl_White_Large-min-957x1024_1200x1200.png?v=1623753944',
        price: 6.59,
        category: 'Supplies',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {})
  }
}
