const SortArray = () => {
    let dst = document.getElementById('inputString').value;
    let str = [];
    let num = [];
    dst = dst.split('');

    dst.map((val) => {
        typeof val == "string" ? str.push(val) : num.push(val);
    });

    dst = [];
    
    dst = dst.concat([str.sort()], [num.sort()]);
    document.getElementById("result").innerHTML = dst;
}