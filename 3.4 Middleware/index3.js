import express from "express";

const app = express();
const port = 3000;

//custom middleware logger fuction 
function logger(req,res,next) {
  console.log("loging Method ", req.method );
console.log("loging Url ", req.originalUrl );
next();
};

app.use(logger);

//another customer middlewas
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
