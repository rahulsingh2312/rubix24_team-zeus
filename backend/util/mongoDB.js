const mongoose = require("mongoose");

const connectdb = async () => {
  try {

    const connect = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Cluster0",
    });
    console.log("database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectdb;
