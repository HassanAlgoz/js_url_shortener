import path from 'path';
import express from 'express'
import shortid from 'shortid'


const app = express()
const port = 3000

app.use(express.static('static'))
app.use(express.json())

const short_to_long: { [key: string]: string } = {}
const long_to_short: { [key: string]: string } = {}

app.put('/shorten', (req, res) => {
  const url = req.body.url
  let shortUrl: string;

  // Ensure Idempotency; i.e., if the URL has already
  // been shortened, return the existing short URL
  if (url in long_to_short) {
    shortUrl = long_to_short[url]
  } else {
    shortUrl = shortid.generate()
  }

  // Store in both maps
  short_to_long[shortUrl] = url
  long_to_short[url] = shortUrl

  // Return result
  res.send('s/' + shortUrl)
})

app.get('/s/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  if (shortUrl in short_to_long) {
    res.redirect(short_to_long[shortUrl])
  } else {
    res.status(404).send('URL not found')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Export the app for testing
export { app }