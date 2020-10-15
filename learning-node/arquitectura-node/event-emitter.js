const EventEmiter = require('events');


class Logger extends EventEmiter {
    execute(cb) {
        console.log('Before');
        this.emit('pene');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const logger = new Logger()

logger.on('pene', () => console.log('Starling'))
logger.on('finish', () => console.log('Finishing'))
logger.on('finish', () => console.log('it\'s Done'))

logger.execute(() => console.log('hello world'));

// logger.execute(() => setTimeout(() => console.log('hello world'), 2000))

// const myEmiter = new EventEmiter();


// myEmiter.once('newListener', (event, listener) => {
//     if(event === 'event') {
//         myEmiter.on('event', (event) => {
//             console.log('Estoy oyendo el evento', event)
//         })
//     }
// })

// myEmiter.on('event', (event) => {
//     console.log('Yo deberia de estar escuchando primero el evento' , event)
// })

// console.log(myEmiter)

// myEmiter.emit('event');