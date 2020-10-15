const { Duplex } = require('stream');

const dupplexStream = new Duplex({
    write(chunk, enconding, cb) {
        console.log(chunk.toString());
        cb()
    },

    read(size) {
        setTimeout(() => {

            if(this.currentCharCode > 90) {
                this.push(null);
                return;
            }
    
            this.push(String.fromCharCode(this.currentCharCode++));
        }, 000)
    }
})

dupplexStream.currentCharCode = 65;
process.stdin.pipe(dupplexStream).pipe(process.stdout);