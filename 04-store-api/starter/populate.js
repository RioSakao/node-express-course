require('dotenv').config()

const { json } = require('express')
const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB('mongodb+srv://riosakao334:zsjyIWF7ZkueBcz3@nodeexptessproject.ehofa.mongodb.net/04-STORE-API?retryWrites=true&w=majority&appName=NodeExptessProject')
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Success!!')
        process.exit(0)
    } catch( error ){
        console.log(error)
        process.exit(1)
    }
}

start()