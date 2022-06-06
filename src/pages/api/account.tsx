import { MongoClient } from "mongodb";
import { stringify } from "querystring";

const handler = async (req, res) => {
    const client = await MongoClient.connect(
        `mongodb+srv://bherman:GENESISpgatour3!@degencluster.bqy0g.mongodb.net/?retryWrites=true&w=majority`
    );
    const db = client.db();
    const accountCollection = db.collection("account");
  if (req.method === "POST") {
    await accountCollection.insertOne(req.body);
    client.close();
    res.status(201).send({ Message: "Added Account" });
  }
  if (req.method === "GET") {
    return accountCollection.find().forEach(console.log);
  }
};

export default handler;

