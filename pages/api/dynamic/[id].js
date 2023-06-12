export default function Handler(req, res) {
  console.log(req.query);
  res.status(200).json("good");
}
