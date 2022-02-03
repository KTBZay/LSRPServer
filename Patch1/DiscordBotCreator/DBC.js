const Discord = require('discord.js');
const BotDetails = require('./config/config');
    /**
     * @param {Folder} folder will store the bot data
     */
<<<<<<< Updated upstream

=======
console.log('DBC is outdated please upgrade to version 1.0.1')
>>>>>>> Stashed changes
function CreateBot(folder) {
    const fs = require('fs')
    if(!fs.existsSync(folder)){
        fs.mkdirSync(`./${folder}/`, {recursive: false})
    }else{

    }
<<<<<<< Updated upstream
    fs.writeFileSync(`./${BotDetails.Name}.cmd`, `node ./${folder}/BotFile.js \n pause`);
=======
    fs.writeFileSync(`./botstarter.cmd`, `node ./${folder}/BotFile.js \n pause`);
>>>>>>> Stashed changes
    fs.writeFileSync(`./${folder}/BotFile.js`, `const Discord = require('discord.js');const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});client.on('ready',()=>{console.log('${BotDetails.Name} is starting')});client.on('message',(msg)=>{if(msg.content==='${BotDetails.BotPrefix}ping'){msg.reply('Pong!')}});client.login(${BotDetails.BotToken})`)


}
module.exports = CreateBot;