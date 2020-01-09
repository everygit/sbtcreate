const options = {
    title: 'Document',
    pre:'',
    last:''
}


module.exports = function(opt) {
    var opts = {...options, ...opt};
    var baseTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${opts.pre}
        <title>${opts.title}</title>
    </head>
    <body>
        ${opt.last}
    </body>
    </html>
    `;
    return baseTemplate;
}