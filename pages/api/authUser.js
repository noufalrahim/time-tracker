import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        console.log(data);
        const client = await MongoClient.connect('mongodb+srv://projectmail0444:noufalrahim@cluster0.o60sual.mongodb.net/Database?retryWrites=true&w=majority');
        const db = client.db();
        const Collection = db.collection('User');
        const query = { username: data.username };
        const result = await Collection.findOne(query);
        if (result) {
            if (result.password == data.password) {
                console.log("Authenticated");
                const timeCollection = db.collection('Time');
                const timeQuery = { username: data.username };
                const timeResult = await timeCollection.find(timeQuery).toArray();
                res.status(201).json({ message: 'success', data: timeResult, status: 201 });
            } else {
                res.status(201).json({ message: 'failed', data: [], status: 201 });
                console.log("Not Authenticated");
            }
        }
    }
}

export default handler;