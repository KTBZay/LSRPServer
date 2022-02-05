
const Discord = require('discord.js');
const BotDetails = require('./config/config.json');
    /**
     * @param {Folder} folder will store the bot data
     */
console.log('DBC is outdated please upgrade to version 1.0.1')
function CreateBot(folder) {
    const fs = require('fs')
    if(!fs.existsSync(folder)){
        fs.mkdirSync(`./${folder}/`, {recursive: false})
    }else{

    }
    fs.writeFileSync(`./${BotDetails.Name}.starter.cmd`, `node ./${folder}/${BotDetails.Name}.js \n pause`);
    fs.writeFileSync(`./${folder}/${BotDetails.Name}.js`, `const Discord = require('discord.js');const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});client.on('ready',()=>{console.log('${BotDetails.Name} is starting')});client.on('message',(msg)=>{if(msg.content==='${BotDetails.BotPrefix}ping'){msg.reply('Pong!')}});client.login('${BotDetails.BotToken}');`)


}
module.exports = CreateBot;