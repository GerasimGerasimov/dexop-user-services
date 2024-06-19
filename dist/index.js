import express from "express";
import Server from "./config/Server";
const app = express();
const server = new Server(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5005;
app.listen(PORT, "localhost", () => {
    console.log(`User service is running on port ${PORT}.`);
});
//# sourceMappingURL=index.js.map