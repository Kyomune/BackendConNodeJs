const fs = require('fs');

const fiels = fs.readdir(__dirname, (err, files) => {
    if(err) {
        console.log(err)
    }

    console.log(files);
} )