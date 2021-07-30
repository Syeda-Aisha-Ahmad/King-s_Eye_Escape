const express = require('express');
const path = require('path');
const Axios = require('axios')
const fs = require('fs')
const seo = require('./seo')

const app = express();
const port = 3030;

app.use(express.urlencoded({ extended: true }))

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', '/build')));

app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl;
  let page = seo.find((item) => item.path === pathname);
  if (page) {
    let html = fs.readFileSync(path.join(__dirname, "..", "/build", "index.html"));
    let htmlWithSeo = html
      .toString()
      .replace("King's Eye Escape", page.title)
      .replace("Join us and be taken on a thrilling adventure.", page.description);
    return res.send(htmlWithSeo);
  }
  res.sendFile(path.join(__dirname, '..', '/build', 'index.html'))
})

app.post('/schedule', (req, res) => {
  Axios.get(`https://api.resova.us/v1/availability/calendar`, req.body)
    .then(result => res.status(200).send(result['data']['data']))
    .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});