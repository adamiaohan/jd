const Mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin','*')
    res.json(
        Mock.mock({
            errcode: 0,
            msg: "ok",
            'data|10-15': [
            {
                // 'id|+1': 1,
                guid: '@guid',
                text: '@cword(2,4)',
                show:false,
                'childrens|2-6': [
                    {
                        // 'id|+1': 1,
                        guid: '@guid',
                        text: '@cword(2,5)',
                    }
                ]
            }
         ]
        })
    )
}