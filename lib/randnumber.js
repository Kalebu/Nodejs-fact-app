
function random(m, n){
    let no = m + Math.floor((n-m+1)*Math.random());
    return no;
}

module.exports.random = random;