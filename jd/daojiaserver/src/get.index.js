const mock=require('mockjs')
//mock  伪造数据

module.exports = (req,res)=>{
    res.set('Access-Control-Allow-Origin','*')
    var result=mock.mock({
        // 'id|+1':1,
        // 'username':'@name'
        'data|5':[
            {
                'id|+1':1,
                'guid':'@guid',   //唯一标识符
                'title':'@ctitle' ,  //商店名称
                'star|1-5':'★',
            }
        ]
    })
    res.send(result)

    // console.log(mock.mock({
    //     'id|+1':1,
    //     'username':'@'
    // }))
    // res.send('hello,index')
    // module.exports=function(res,req){

    // }
}