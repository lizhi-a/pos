'use strict';

// function printReceipt(inputs) {
//     var a = [
//         {
//             barcode: 'ITEM000000',
//             name: '可口可乐',
//             unit: '瓶',
//             price: 3.00,
//             count:0,
//             sum:3.00
//         },
//         {
//             barcode: 'ITEM000001',
//             name: '雪碧',
//             unit: '瓶',
//             price: 3.00,
//             count:0,
//             sum:3.00
//         },
//         {
//             barcode: 'ITEM000004',
//             name: '电池',
//             unit: '个',
//             price: 2.00,
//             count:0,
//             sum:2.00
//         }
//     ];
    
//     var list='****/<没钱赚的商店/>收据****';
//     var sum=0;

//     for(var i=0;i<inputs.length;i++){
//         for(var j=0;j<a.length;j++){
//             if(inputs[i]==a[j].barcode){
//                 a[j].count+=1;
//                 a[j].sum=a[j].count*a[j].price;
//             }
//         }
//     }

//     for(var i=0;i<a.length;i++){
//         list=list+'\n'+'名称：'+a[i].name+
//         ','+'数量：'+a[i].count+a[i].unit+
//         ','+'单价：'+parseFloat(a[i].price).toFixed(2)+'(元)'+
//         ','+'小计：'+parseFloat(a[i].sum).toFixed(2)+'(元)';
//         sum+=a[i].count*a[i].price;
//     }
//     console.log(list+'\n'+'----------------------------'+'\n'+'总计：'+parseFloat(sum).toFixed(2)+'\n'+'***************************');
// }

function printReceipt(inputs) {
    var list  = loadAllItems();
    var sum = 0;
    var string = '****/<没钱赚的商店/>收据****' + '\n';
    for(let i=0; i<list.length; i++)
    {
        var n = 0;
        for(let j=0; j<inputs.length; j++)
        {
            if(list[i].barcode == inputs[j])
            {
                n++;
            }
        }
        list[i].count = n;
    }
    for(let i=0; i<list.length; i++)
    {
        if (list[i].count != 0)
        {
            string = string + '名称：' + list[i].name +
             ',' + '数量：' + list[i].count + list[i].unit
              +'，' + '单价：' + parseFloat(list[i].price).toFixed(2) + '(元)'
              +'，' + '小计：' + parseFloat(list[i].price*list[i].count).toFixed(2) +
              '(元)' + '\n';
            sum = sum + list[i].price*list[i].count;
        }
    }
    string = string + '----------------------------' + '\n' + '总计：' + parseFloat(sum).toFixed(2) + '\n' + '***************************';
    console.log(string);
}