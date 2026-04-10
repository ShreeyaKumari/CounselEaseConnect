import express from 'express';
import cors from 'cors';
import { Client, Users } from 'node-appwrite';

const app = express();
const port = 3000;
app.use(cors());

const client = new Client();
const users = new Users(client);
const appwriteConfig = {
    databaseId: '69d72f1b0026ae2affc1',
}

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('69d72ebf0016fac1d1ab')
    .setKey('standard_25815c32ca31127998b0ee7917f78dbd457f30e2a870d3d092992b5bb5cd00f8c81426fcfbb340979bcc9ffebcfda628a13544ff18c727e24a3ac47a749e425bc3ac98e68269a721b5d24bf5eab5a56108235da012560517faec013fabb439483d2d0c4b8405114f63fd49d31e5148429c263c0b0dcc5ef0544686aaae3b2e7b');


app.get('/deleteUser/:userId', (req, res) => {
    console.log(process.env)
    const promise = users.delete(req.params.userId);
    promise.then(function (response) {
        res.send({ response });
    }, function (error) {
        res.send({ error });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
