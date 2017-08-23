/**
 * Created by hello_qi on 2017/8/23.
 */
const data = [
    {
        "id":'1',
        "children":[
            {
                "id":'1-1',
                "children":[],
                "value":"a-1",
            },{
                "id":'1-2',
                "children":[],
                "value":"a-2",
            },
        ],
        "value":"a",
    },{
        "id":'2',
        "children":[
            {
                "id":'2-1',
                "children":[
                    {
                        "id":'2-1-1',
                        "children":[],
                        "value":"c-1",
                    }
                ],
                "value":"b-1",
            },
        ],
        "value":"b",
    },{
        "id":'3',
        "children":[],
        "value":"c",
    },
]
function transformData(data){
    for(var i=0;i<data.length;i++){
        if(data[i].children.length > 0){
            data[i].RelatedId = data[i].children[0].id;
            transformData(data[i].children)
        }
    }
}
console.log(data);
transformData(data);
console.log(data);
console.log(data[1].children[0]);