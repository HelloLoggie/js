/*实现对js基本数据类型以及对象的克隆*/
function clone(obj){
    var o;
    switch(typeof obj){
        case "undefined":
            break;
        case "number":
            o = obj - 0;
            break;
        case "string":
            o = obj + "";
            break;
        case "boolean":
            o = obj;
            break;
        case "object":
            if(obj === null)
                o = obj;
            else if(Object.prototype.toString.call(obj).slice(8,-1) === "Array"){
                o = [];
                for(var i = 0;i<obj.length;i++){
                    o.push(clone(obj[i]));
                }
            }else if(Object.prototype.toString.call(obj).slice(8,-1) === "object"){
                o = {};
                for(var key in obj){
                    o[key] = clone(obj[key]);
                }
            }
            break;
        default:
            o =obj;
            break;
    }
    return o;
}