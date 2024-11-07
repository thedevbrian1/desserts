import { MongoClient } from "mongodb";

// MongoDB connection string
let uri = `mongodb+srv://hik75638:${process.env.MONGODB_PASSWORD}@cluster0.wwmwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export let client = new MongoClient(uri);
