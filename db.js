const Sequelize = require('sequelize')

// const db = new Sequelize('shopdb', 'shopper', 'shoppass', {
//     host: 'localhost',
//     dialect: 'postgres',
//     pool: {
//         min: 0,
//         max: 5,
//     }
// })

const db = new Sequelize('postgres://cgwiehdxaecclh:e6f26a426ec542dd08fe4871a6af838d4106157dd1008d91efc27a7699750d98@ec2-54-83-49-109.compute-1.amazonaws.com:5432/dfpmlambfcgo1o');

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
