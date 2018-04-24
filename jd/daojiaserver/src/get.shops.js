const mock=require('mockjs')
//mock  伪造数据

module.exports = (req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    var result=mock.mock({
        // 'id|+1':1,
        // 'username':'@name'
        errcode:0,
        msg:'ok',
        'data|5':[
            {
                'id|+1':1,
                'guid':'@guid',   //唯一标识符
                'title':'@ctitle' ,  //商店名称
                'star|2-5':'★',
                // 'imgUrl':'static/img/shop + parseInt(Math.random()*10)+.jpg'
                'imgURLS|1':[
                    'static/img/shop1.jpg',
                    'static/img/shop2.png',
                    'static/img/shop3.jpg',
                    'static/img/shop4.png',
                    'static/img/shop5.jpg',
                    'static/img/shop6.jpg',
                    'static/img/shop7.png',
                    'static/img/shop8.png',
                    'static/img/shop9.png',
                    'static/img/shop10.png',
                ],
                'minite|20-59':20,
                'sold|3000-8000':3000,
                'num|0-50':0,
                'distance|0-5.2':0,
                'freight|1':[
                    '基础运费4元',
                    '免基础运费',
                    '基础运费6元',
                ],
                'sales|0-4':[
                    {
                        'saleName|+1':['领券','运费','打包','首单'],
                        'id2|1':['8.8折劵,7.0折劵','满69减20,满40减12,满59减12','满59元减4元运费','立减3','新人专享特惠商品','满19减1','满59元免运费','满109元减4元运费'],
                    },
                ]
            }
        ]
 
    })
    res.send(result)
}