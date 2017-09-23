//打印1-10(分别使用setTimeout和setInterval）
var i=1;
var interval;
function onetoten(){
    console.log(i++);
    if(i<=10)
        interval = setTimeout(onetoten, 1000);
    else
        clearTimeout(interval);
}

var intervalId = setInterval(oneToTen2,1000);
function oneToTen2(){
    console.log(i++);
    if(i>10)
        clearInterval(intervalId);
}
//onetoten();
oneToTen2();