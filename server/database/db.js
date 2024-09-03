// import mongoose from "mongoose";

// const Connection = async (username, password) => {
//   const URL =
//     "mongodb://shivani:abc@ac-dfsnxzs-shard-00-00.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-01.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-02.cx3krw2.mongodb.net:27017/?ssl=true&replicaSet=atlas-oslzj8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
//   try {
//     await mongoose.connect(URL, { useNewUrlParser: true });
//     console.log("Database connected successfully");
//   } catch (error) {
//     console.log("Error while connecting to the database ", error);
//   }
// };

// export default Connection;

import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://shivani:abc@ac-dfsnxzs-shard-00-00.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-01.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-02.cx3krw2.mongodb.net:27017/?ssl=true&replicaSet=atlas-oslzj8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true, // Removed useNewUrlParser as it is deprecated
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database:", error);
  }
};

export default Connection;
