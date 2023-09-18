require("dotenv").config();

import app from "./app";
import db from "./config/mongo";

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await db();
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server listening at port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

startServer();