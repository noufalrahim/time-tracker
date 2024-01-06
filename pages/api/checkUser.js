import { MongoClient } from "mongodb";

async function handler(req, res) {
    if(req.method == 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(process.env.MONGODB_URI);
        const db = client.db();
        const Collection = db.collection('User');
        const result = await Collection.findOne({username: data});
        console.log(result);
        if(result){
            res.status(201).json({message: 'failed', data: data, status: 201});
        }
        else{
            res.status(201).json({message: 'success', data: data, status: 201});
        }
        
        client.close();
    }
}

export default handler;