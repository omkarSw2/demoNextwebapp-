import mongoose from "mongoose";
const connection: { isconnected?: number } = {};

async function dbConnect() {
  if (connection.isconnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URL!);
  connection.isconnected = db.connections[0].readyState;
}

export default dbConnect;
