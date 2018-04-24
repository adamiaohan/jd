const Mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",
            'data': [
            {
                // 'id|+1': 1,
                guid: '@guid',
                text: '@cword(6,18)',
                'tit': '@cword(4,8)',
                'Tprice|5-13':0,
                'num|1':50-200,
                'gdimg|2-5':[
                    {
                        'pics|1':[
                            'static/img/a1.jpg',
                            'static/img/a2.jpg',
                            'static/img/a3.jpg',
                            'static/img/a4.jpg',
                            'static/img/b1.jpg',
                            'static/img/b2.jpg',
                            'static/img/b3.jpg',
                            'static/img/b4.jpg',
                            'static/img/b5.jpg',
                        ]
                    }
                    
                    
                ],
            }
         ]
        })
    )
}