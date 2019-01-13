var json2csv = require('json2csv').parse;
 
exports.get = function(req, res) {
 
    var fields = [
        'name',
        'shop',
        'small',
        'regular',
        'large'
    ];
 
    var csv = json2csv({ data: '', fields});
 
    res.set("Content-Disposition", "attachment;filename=boba-tea-format.csv");
    res.set("Content-Type", "application/octet-stream");
 
    res.send(csv);
 
};