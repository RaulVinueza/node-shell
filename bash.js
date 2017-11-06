const commands = require('./commands');
process.stdout.write('prompt > ');
let cmd;
let method;
process.stdin.on('data', (data)=>{
    cmd = data.toString().trim().split(' ');
    method = cmd[0];
    commands[method](cmd.slice(1));
});