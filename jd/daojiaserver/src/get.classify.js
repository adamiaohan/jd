const Mock = require('mockjs')
module.exports = (req, res) => {
    console.log(req.query.ctgtext)    //二级分类

    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",

            'data|10': [
            {
                guid: '@guid',
                text: '@cword(2,4)',       
            }
         ]
        })
    )
}