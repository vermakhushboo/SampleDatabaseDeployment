const Sequelize = require('sequelize')

// const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
//     host: 'localhost',
//     dialect: 'postgres',
//     pool: {
//         min: 0,
//         max: 5,
//     }
// })

const db = new Sequelize('postgres://kllzitsegqztqc:4616b79316270605f57307f300708dc29660bb2a8fb2e7e4cbe8b9d6ebffdf3f@ec2-54-225-115-234.compute-1.amazonaws.com:5432/d5vmre2fa70uh');

const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User,
    Product
}