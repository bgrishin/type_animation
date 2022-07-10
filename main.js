const player = require('play-sound')(opts = {})
require('colors');

const beep = () => {
    player.play('beep.mp3',{ afplay: ['-v', 1.5 ] /* volume */ }, (err) => {
        if (err) throw err
    })
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

let write = async (text, timeout = 150) => {
    let P = text.split('');
    for (let i = 0; i < P.length; i++) {
        await sleep(timeout)
        process.stdout.write(P[i].green);
        if(P[i] !== ' ') beep()
    }
    process.stdout.write('\n');
    beep()
}

(async () => {
    await write("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", 30)
})()
