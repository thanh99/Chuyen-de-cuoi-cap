const express = require("express")
const router = new express.Router()
const path = require('path')
const multer = require('multer')

const productHandlers = require("./modules/restaurants")
const categoryHandlers = require("./modules/category")
const emailCutomerHandlers = require("./modules/emailCustomer")
const userHandlers = require("./modules/user")
const reviewHandlers = require("./modules/reviews")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../de-an/src/assets/images')
  },
  filename: function (req, file, cb) {
     console.log(new Date().toISOString() + '_' + file.originalname)
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
// const upload = multer({dest: 'upload/'})
// const upload = multer({dest: '../admin/images'})

router.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
  })

router.get("/", (req, res) => {
  res.send('a')
})

router.post("/restaurants/uploadImage", upload.single('image'), productHandlers.test)

router.post("/restaurants", productHandlers.create)
  
router.get("/restaurants", productHandlers.findMany)

router.get("/restaurants/:id", productHandlers.findOne)

router.delete("/restaurants/:id", productHandlers.delete)

router.put("/restaurants",productHandlers.update)

//category
router.get('/api/category', categoryHandlers.findMany)

router.get('/api/category/:id', categoryHandlers.findOne)

router.post('/api/category', categoryHandlers.create)

router.put('/api/category', categoryHandlers.update)

router.delete('/api/category/:id', categoryHandlers.delete)

//email
router.get('/api/email', emailCutomerHandlers.findMany)

router.post('/api/email', emailCutomerHandlers.create)

//user
router.post('/api/user', userHandlers.create)

router.get('/api/user', userHandlers.findMany)

// review
router.post("/reviews", reviewHandlers.create)
  
router.get("/reviews", reviewHandlers.findMany)

router.get("/reviews/:id", reviewHandlers.findOne)

router.delete("/reviews/:id", productHandlers.delete)

router.put("/reviews",productHandlers.update)


module.exports = router