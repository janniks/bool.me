import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const userAgent = req.get('user-agent')
  const isTerminal =
    !userAgent ||
    ['curl', 'wget'].some(a => userAgent.toLowerCase().includes(a))

  // todo: check accepts json

  const bool = !!Math.round(Math.random())
  res.send(bool)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`bool.me listening on port ${port}`))
