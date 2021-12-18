import mongoose from "mongoose";
import mongooseTest from "../__tests__/mongoose.test";

class MongooseService {
    private count = 0;
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    };
    private mongoURI = "";

    constructor() {
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = () => {
        if (process.env.TEST) {
            console.log("Connecting to Test MongoDB");
            mongooseTest.connect();
        } else {
            console.log("Attempting MongoDB connection (will retry if needed)");
            mongoose
                .connect(this.mongoURI, this.mongooseOptions)
                .then(() => {
                    console.log("MongoDB is connected");
                })
                .catch((err) => {
                    const retrySeconds = 5;
                    console.log(
                        `MongoDB connection unsuccessful (will retry #${++this.count} after ${retrySeconds} seconds):`,
                        err
                    );
                    setTimeout(this.connectWithRetry, retrySeconds * 1000);
                });
        }
    };
}
export default new MongooseService();
