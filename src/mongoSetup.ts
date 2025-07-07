import mongoose from "mongoose"

function connectToDB() {
    mongoose.connect(process.env.MONGO_URL, {});

    let db = mongoose.connection;
    db.on('error', console.error.bind(console, "Connection Error"));
    db.once('open', () => console.log("Connected to MongoDB"));
}

export {
    connectToDB
}