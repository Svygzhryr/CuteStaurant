function initials(name) {
    let arr = name.split('');
    let res = [];
    arr.forEach(element => {
        if (element === element.toUpperCase()) {
            res.push(element);
        }
    });
    res = res.join('');
    let regex = /\s/gi;
    console.log(typeof res)
    res = res.replace(regex, '.');
    return res
}

console.log(initials('Hate Niggers'))