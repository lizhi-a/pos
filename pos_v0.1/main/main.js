'use strict';

function printReceipt(inputs) {
    var list='****/<没钱赚的商店/>收据****';
    var sum = 0;
    var a = [];
    for(var i=0;i<inputs.length;i++){
        if(i==0){
            a.push(inputs[i]);
            a[0].count=1;
            a[0].sum=inputs[i].price;
        }
        else{
            var flag=0;
            for(var j=0;j<a.length;j++){
                if(inputs[i].barcode==a[j].barcode){
                    a[j].count+=1;
                    a[j].sum=inputs[i].price*a[j].count;
                    flag=1;
                }
            }
            if(flag==0){
                a.push(inputs[i]);
                a[a.length-1].count=1;
                a[a.length-1].sum=inputs[i].price;
            }
        }
    }
    for(var i=0;i<a.length;i++){
        list = list+'\n'+"名称："+a[i].name+
        ",数量："+a[i].count+a[i].unit+
        "，单价："+a[i].price+".00(元)"+
        "，小计："+a[i].sum+".00(元)";
        sum+=a[i].sum;
    }
    console.log(list+'\n'+'----------------------------'+'\n'+'总计：'+sum+'.00'+'\n'+'***************************');
}