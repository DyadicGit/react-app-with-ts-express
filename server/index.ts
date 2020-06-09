import express from 'express'
import { postsApi } from "./router/api-posts";
const app = express()

// Cors
const cacheHours = 24 * 60 * 60; // 24 hours
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Max-Age', `${cacheHours}`);
  next();
});

app.get('/', (req, res) => res.send('ok'))
app.use('/api', postsApi)

const PORT = 4000
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
