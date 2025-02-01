import e from "express";

const app = e();
const PORT = 3300;
app.use(e.json())

const email = "hminstatwat@gmail.com"
const current_datetime = new Date().toISOString();
const github_url = "https://github.com/sammy-nte/hng-stage-zero.git"

const returnObj = {
    email,
    current_datetime,
    github_url
}

app.get("/", (req, res) => {
  res.status(200).json(returnObj);
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost/${PORT}`);
});
