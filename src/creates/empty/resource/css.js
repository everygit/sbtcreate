const n = new Date();
const b = `${n.getFullYear()}-${fixed(n.getMonth() + 1)}-${fixed(n.getDate())}`;



const base = 
`/**
* ${b}
*/
body, ul, li, h1, h2, h3, h4, h5, dl, dt, dd {
    margin: 0;
    padding: 0;
}
`

function fixed(num) {
    var s = '' + num;
    return '00'.substring(0, 2 - s.length) + s;
}

module.exports = base;