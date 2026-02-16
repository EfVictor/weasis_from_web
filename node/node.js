const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'DownloadWeasis'))); // Folder where the images in ZIP format will be downloaded

app.use((req, res, next) => {
  res.send("Сервер, для просмотра zip файлов в Weasis");
})

app.listen(8088)