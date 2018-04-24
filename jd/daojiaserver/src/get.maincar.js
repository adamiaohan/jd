const Mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",
            'data|1-4': [
            {
                // 'id|+1': 1,
                guid: '@guid',
                text: '@cword(4,9)',
                show:false,
                'date':'@datetime("MM-dd HH:mm:ss")',
                'Tprice|50-400.1':0,
                'childrens|1-4': [
                    {
                        // 'id|+1': 1,
                        guid: '@guid',
                        // text: '@cword(2,5)',
                        'imgs|1':[
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
                        ],
                        'price|1-100.1':0,
                        
                    }
                ]
            }
         ]
        })
    )
}