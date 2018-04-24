const Mock = require('mockjs')
module.exports = (req, res) => {
    console.log(req.query.ctgtext)    //二级分类
    // let text = req.query.ctgtext
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",
            // 'title':'@ctitle',
            'data|2-5': [
            {
                guid: '@guid',
                text: '@cword(2,4)', 
                'children|4-9':[
                    {
                        guid: '@guid',
                        text: '@cword(2,4)', 
                        'imgs|1':[
                            'static/img/wer1.jpg',
                            'static/img/wer3.jpg',
                            'static/img/wer4.jpg',
                            'static/img/wer5.jpg',
                            'static/img/wer6.jpg',
                            'static/img/wer7.jpg',
                            'static/img/wer8.jpg',
                            'static/img/wer9.jpg',
                            'static/img/wer10.jpg',
                            'static/img/wer11.jpg',
                            'static/img/wer12.jpg',
                            'static/img/wer13.jpg',
                            'static/img/wer27.jpg',
                            'static/img/wer15.jpg',
                            'static/img/wer26.jpg',
                            'static/img/wer17.jpg',
                            'static/img/wer18.jpg',
                            'static/img/wer19.jpg',
                            'static/img/wer20.jpg',
                            'static/img/wer21.jpg',
                            'static/img/wer22.jpg',
                            'static/img/wer23.jpg',
                            'static/img/wer24.jpg',
                            'static/img/wer25.jpg',
                            'static/img/wer28.jpg',
                            'static/img/wer29.jpg',
                        ]
                        
                    }
                    
                    
                ]
            }
         ]
        })
    )
}