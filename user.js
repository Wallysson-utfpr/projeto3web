import { mongoClient as client } from 'mongodb';

export default class User {

    static async find ({ age }) {
        const conn = await client.connect('mongodb://mongo/express01'),
        db = conn.db(),
        query = {};

        if(age) query['age'] = age;

        let users = await db.collection('user').find(query).toArray();
        conn.close();
        return users;

    }
}