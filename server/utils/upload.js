import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: "mongodb://shivani:abc@ac-dfsnxzs-shard-00-00.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-01.cx3krw2.mongodb.net:27017,ac-dfsnxzs-shard-00-02.cx3krw2.mongodb.net:27017/?ssl=true&replicaSet=atlas-oslzj8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0",
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
