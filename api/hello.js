export default function handler(req, res) {
  const { name = 'world' } = req.query
  return res.send(`Hello ${name}!`)
}
