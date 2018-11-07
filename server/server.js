const path = require('path')
const jsonServer = require('json-server')
const multer = require('multer')

const server = jsonServer.create()

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})
const upload = multer({ storage: store })

server.post('/api/upload', upload.any(), (req, res) => {
  console.log(`>>> Upload ${req.files}`)
  res.status(200)
})

const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use('/api/db', router)

const port = 3000

server.listen(port, () => {
  console.log(`>>> JSON Server is running on port ${port}`)
})
