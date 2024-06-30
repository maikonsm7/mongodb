const { MongoClient } = require('mongodb')

const uri = "mongodb://localhost:27017/testemongoDB"

const client = new MongoClient(uri)

async function run(){
    try {
        await client.connect()
        console.log('Banco de dados conectado!')
    } catch (error) {
        console.log('Erro: ', error)
    }
}

run()

module.exports = client