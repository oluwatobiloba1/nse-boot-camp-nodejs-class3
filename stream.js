const fs = require('node:fs');

const WriteStream = fs.createWriteStream('newvideo1.mp4', 'base64');

const readStream = fs.createReadStream('index.ts - hng-chrome-extension-api - Visual Studio Code 2023-10-02 00-33-52.mp4','base64');

// readStream.on('data', (chunk)=>{
//     const buffer = Buffer.from(chunk, 'base64');
//     console.log('new buffer',buffer)

//     WriteStream.write(chunk);
// })


readStream.pipe(WriteStream);

// readStream.on('close', ()=>{
//     console.log('stream ended');
// })

// WriteStream.write('this is some random text');

// WriteStream.end();

// WriteStream.on('finish',(data)=>{
//    console.log('write finished!') 
// })

// WriteStream.on('error', (err)=>{
//     console.log(err);
// });


// readStream.on('data', (chunk)=>{
//     console.log(chunk);
// })

// readStream.on('close', ()=>{
//     console.log('stream closed');
// })