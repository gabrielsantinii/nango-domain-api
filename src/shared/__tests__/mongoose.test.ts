import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoURI: string;
let mongodb: MongoMemoryServer;

class MongooseTest {
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  connect = async () => {
    mongodb = await MongoMemoryServer.create();
    mongoURI = mongodb.getUri();
    await mongoose.connect(mongoURI, this.mongooseOptions);
  };

  close = async () => {
    await mongoose.connection.close();
    await mongodb.stop();
  };
}

export default new MongooseTest();
