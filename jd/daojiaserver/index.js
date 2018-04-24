const express=require('express')

const app = express()
app.use(express.static('/static'))


app.get("/index",require('./src/get.index.js'))  //get是请求方式   .index.js'是路径
app.get("/shops",require('./src/get.shops.js'))
app.get("/ctgs",require('./src/get.ctgs.js'))
app.get("/goods",require('./src/get.goods.js'))
app.get("/classify",require('./src/get.classify.js'))
app.get("/cdetail",require('./src/get.cdetail.js'))
app.get("/maincar",require('./src/get.maincar.js'))
app.get("/order",require('./src/get.maincar.js'))
app.get("/gddetail",require('./src/get.gddetail.js'))


app.listen(88)