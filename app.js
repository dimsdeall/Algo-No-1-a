const SortArray = () => {
    let dst = document.getElementById('inputString').value;
    let str = [];
    let num = [];
    dst = dst.split('');

    dst.map((val) => {
        // check integer on type input
        isNaN(+val) ? num.push(val) : str.push(val);
    });

    dst = [];

    dst = dst.concat([num.sort()], [str.sort()]);
    document.getElementById("result").innerHTML = dst;
}