import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method == 'POST') {
        const data = req.body;
        console.log(data);
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const Collection = db.collection('Time');
        const result = await Collection.insertMany(data);
        console.log(result);
        client.close();

        res.status(201).json({message: 'Data inserted', data: data, status: 201});
    }
}

export default handler;