// const { Transform } = require('stream');

// const transformStream = new Transform({
//     transform(chunk, enconding, callback) {
//         this.push(chunk.toString().toUpperCase());
//         callback()
//     }
// })

// process.stdin.pipe(transformStream).pipe(process.stdout);

const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, enconding, callback) {
        let data = chunk.toString();
        data.split(" ").map((word,index) => {
            this.push(index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1));
             });
        callback()
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout);
 
