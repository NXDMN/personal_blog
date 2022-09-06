const express = require('express');
const path = require('path');
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, 'public');

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
  res.sendFile(path.join(initial_path, 'index.html'));
});

app.get('/editor', (req, res) => {
  res.sendFile(path.join(initial_path, 'editor.html'));
});

//uplaod link
app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }

  let file = req.files.image;
  let date = new Date();

  let imageName = date.getDate() + date.getTime() + file.name;

  let path = 'public/uploads/' + imageName;
  console.log(__dirname);

  file.mv(path, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.json(`uploads/${imageName}`);
    }
  });
});

app.get('/:blog', (req, res) => {
  res.sendFile(path.join(initial_path, 'blog.html'));
});

app.use((req, res) => {
  res.json('404');
});

app.listen('3000', () => {
  console.log('Listening......');
});

module.exports = app;
