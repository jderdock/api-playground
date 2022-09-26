import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Request received");
});

const PORT = 3000;

export const start = () => {
  app.listen(PORT, () => {
    console.log(`server is on PORT ${PORT}`);
  });
};
