const express = require("express");
const path = require("path")


const { spawn } = require("child_process");
const app = express();
const port = 8080;

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});
app.use(limiter)

// Use body-parser
var bodyParser = require("body-parser");
// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
var distDir = __dirname + "/public/neurodiversity-main/";
app.use(express.static(distDir));

function getRoot(request, response) {
  response.sendFile(path.resolve(distDir + "index.html"));
}

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
  res.status(200).json({ status: "UP" });
});

app.get("/", getRoot);

app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);
