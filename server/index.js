import express from "express";
import path from "path";
import routes from "routes";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../build")));

app.use("/api", routes);

app.listen(PORT, HOST, () => {
  console.log(`Listening on Port: ${PORT}`);
});
