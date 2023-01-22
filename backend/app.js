const express = require("express");
// to enable CORS with options
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Connect
const db = require("./models");
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to db");
}).catch(err => {
  console.log("error occurred ", err);
  process.exit();
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});