import * as process from 'node:child_process';




export default async function hello(req, res) {
    
    process.exec('cmd /c dir', function (err, stdout) {
        const re = /^[0-9].*\s(\S*)\r\n/gm;
        const items = [...stdout.matchAll(re)].map(x=>x[1]);
        console.log(items);
        return res.status(200).json({ result: items });
        });
}