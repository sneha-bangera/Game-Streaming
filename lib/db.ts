import { MongoClient, Db } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

// Single global client (important for Next.js)
// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

const clientPromise = global._mongoClientPromise;

// ALWAYS return a Db instance
export async function getDatabase(): Promise<Db> {
  const client = await clientPromise;
  return client.db(); // <-- Db object
}

export default clientPromise;
