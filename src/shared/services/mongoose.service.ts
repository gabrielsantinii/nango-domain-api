import mongoose from "mongoose";
import mongooseTest from "../__tests__/mongoose.test";

export class MongooseService {
    static init() {
        const mongoURI = process.env.MONGO_URI as string;
        const mongooseOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        if (process.env.TEST) {
            console.log("Connecting to Test MongoDB");
            mongooseTest.connect();
        } else {
            console.log("Attempting MongoDB connection (will retry if needed)");
            mongoose
                .connect(mongoURI, mongooseOptions)
                .then(() => {
                    console.log("MongoDB is connected");
                })
                .catch((err) => {
                    const retrySeconds = 5;
                    console.log(`MongoDB connection unsuccessful (will retry after ${retrySeconds} seconds):`, err);
                    setTimeout(this.init, retrySeconds * 1000);
                });
        }
    }
}
