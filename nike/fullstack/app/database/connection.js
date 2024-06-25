import dotnev from "dotenv";
import { MongoClient } from "mongodb";
dotnev.config();
export async function conx() {
  try {
    const uri = `mongodb+srv://${process.env.User}:${process.env.Password}@tackosday.tykb3fk.mongodb.net/${process.env.Database}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(uri, options);
    return client.db();
  } catch (error) {
    return { status: 500, message: error }
  }
}