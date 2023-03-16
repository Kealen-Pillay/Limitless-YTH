import express, {Express} from "express";
import mongoose, {ConnectOptions} from "mongoose";
import cors from "cors";
import router from "./routes";

const index: Express = express();
const PORT: string | number = process.env.PORT || 5000;

index.use(cors());
index.use(router);

const uri: string = `mongodb+srv://production:8qUHLItFypCQGtF1@cluster0.juadezf.mongodb.net/Limitless?retryWrites=true&w=majority`;
const options = {
    useNewURLParser:    true,
    useUnifiedTopology: true,
} as ConnectOptions;

mongoose.connect(uri, options)
    .then(() => {
        index.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        })
    })
    .catch(error => {
        throw error;
    });