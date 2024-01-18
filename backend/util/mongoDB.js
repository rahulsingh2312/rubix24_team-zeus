const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://allnetwork:65i0g0ZiyGOTcGAy@cluster0.ytanjka.mongodb.net/?retryWrites=true&w=majority", {
      dbName: "Cluster0",
    });
    console.log("database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectdb;
