let bill = [275, 40, 430];
let total = [];

for (let i = 0; i < 3; i++) {
  let tip =
    bill[i] >= 50 && bill[i] <= 300
      ? (15 * bill[i]) / 100
      : (20 * bill[i]) / 100;
  let totalSpend = bill[i] + tip;
  total.push([bill[i], tip, totalSpend]);
}
for (let j = 0; j < 3; j++) {
  console.log(
    `Your bill is ${total[j][0]} as per it, your tip would be ${total[j][1]}. So, total amount ${total[j][2]}`
  );
}

/*
if (bill[i] > 50 && bill[i] < 300){
    let tip = (15*bill[i])/100;
}else{
    let tip = (20*bill[i])/100;
}
*/
