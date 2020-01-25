function chart(method) {
    let res = null;
    switch (method) {
        case 'GET':
            res = [120, 40, 78, 10, 30, 48].map(()=>{
                return Math.random(100);//产生随机数
            });
            break;
        default:
            res = null;
    }
    return res;
}
module.exports = chart;