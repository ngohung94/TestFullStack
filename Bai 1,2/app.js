// 1

function findOppositeNumber(n,fistNum){
    if(n <= 4 && n <= 20 && n % 2 == 0){
        
    }
}











// 2


const a = "abcdef";
const b = "xyzt";
function merge2String(a,b){
        let s = '';
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (i === j) {
                    s += a[i] + b[j];
                }else if (i == a.length - 1 && j > i) {
                    s += b[j];
                }else if (j == b.length - 1 && i > j) {
                    s += a[i];
                }
            }
        }
        return s;
}
alert(merge2String(a,b))



