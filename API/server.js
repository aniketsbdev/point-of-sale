const express = require('express');
const app = express();
const fs = require('fs');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:Southside2020@asbdev.b7ycm.gcp.mongodb.net/codinove-data?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true });

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

async function main() {

    try {
        // Connect to the MongoDB cluster
        await client.connect();
    } catch (e) {
        console.error(e);
    }
}

async function getProducts() {
    try {
        var result = await client.db("codinova-data").collection("Products").find(
            { available_qty: { $gt: 0 } }
        ).toArray();
        return result;
    } catch (error) {
        throw error;
    }
}

async function createProduct(product) {
    try {
        var result = await client.db("codinova-data").collection("Products").insertOne(
            product
        );
        return result;
    } catch (error) {
        throw error;
    }
}

main().catch(console.error);

app.post('/login', (req, res) => {
    let users = fileData.user;
    for (const user of users) {
        if (req.body.email == user.email && req.body.password == user.password) {
            res.status(200).send({ userFound: true, userName: user.name });
            break;
        } else {
            res.status(403).send({ userFound: false });
        }
    }
});

app.get('/getProducts', async (req, res) => {
    let data = await getProducts();
    res.json({ data, count: data.length } || {});
});

app.post('/createProduct', async (req, res) => {
    let createdData = await createProduct(req.body);
    console.log(createdData);
    res.status(200).send(createdData.insertedCount);
});

console.log("HeyHessy");
app.listen(3031);