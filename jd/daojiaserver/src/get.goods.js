const Mock = require('mockjs')
module.exports = (req, res) => {
    console.log(req.query.ctgtext)    //二级分类
    let text = req.query.ctgtext
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",
            ctgText:text,
            'count|10-18':0,
            'data|10-18': [
            {
                // 'id|+1': 1,
                guid: '@guid',
                text: '@cword(6,12)',
                'price|1-100.1':0,
                'store|1-10':0,
                'goodImg|1':[
                    'static/img/df1.jpg',
                    'static/img/df2.png',
                    'static/img/df3.jpg',
                    'static/img/df4.png',
                    'static/img/df5.jpg',
                    'static/img/df6.jpg',
                    'static/img/df7.jpg',
                    'static/img/df8.jpg',
                    'static/img/df9.jpg',
                    'static/img/df10.jpg',
                    'static/img/df11.jpg',
                    'static/img/df12.jpg',
                    'static/img/df13.jpg',
                    'static/img/df14.jpg',
                    'static/img/df15.jpg',
                    'static/img/df16.jpg',
                    'static/img/df17.jpg',
                    'static/img/df18.jpg',
                    'static/img/df19.jpg',
                    'static/img/df20.jpg',
                    'static/img/df21.jpg',
                    'static/img/df22.jpg',
                    'static/img/df23.jpg',
                    'static/img/df24.jpg',
                    'static/img/df25.jpg',
                    'static/img/df26.jpg',
                    'static/img/df27.jpg',
                    'static/img/df28.jpg',
                    'static/img/df29.jpg',
                    'static/img/df30.jpg',
                    'static/img/df31.jpg',
                ],
                'nums|100-500':100,
                'rate|80-100':80,
                
            }
         ]
        })
    )
}