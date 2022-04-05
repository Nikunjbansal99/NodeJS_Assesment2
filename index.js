const regexops = require('./regexops.js')
const fs = require('fs');

const fname = process.argv[2];

console.log("-----------------------------------------------------------------------------------------------------------")

console.log("Input filename:", fname);

console.log("-----------------------------------------------------------------------------------------------------------")

const contentUpload = (fname, callback) => {
    try {
        var data = fs.readFileSync(fname,'utf8');
        return callback(data.toString(), undefined);
    } 
	catch(e) {
		console.log("File Upload Failed. Please check filename.")
    }
}

const data = contentUpload(fname,(ferr, content)=>{
	if (ferr) {
		return ferr 
	};
    return content;
});

console.log("Input File Contains: ");
console.log(data);


console.log("-----------------------------------------------------------------------------------------------------------")

regexops.main(data, function(output){
    console.log(output);
});

console.log("-----------------------------------------------------------------------------------------------------------")
