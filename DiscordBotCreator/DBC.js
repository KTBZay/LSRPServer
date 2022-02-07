const fs = require('fs')
try {
    const Discord = require('discord.js');
    const BotDetails = require('./config/config');
        /**
         * @param {Folder} folder will store the bot data
         */
    console.log('DBC is outdated please upgrade to version 1.0.3')
    function CreateBot(folder) {
        const fs = require('fs')
        if(!fs.existsSync(folder)){
            fs.mkdirSync(`./${folder}/`, {recursive: false})
    
        }else{
    
        }
        fs.writeFileSync(`./${BotDetails.Name}.starter.cmd`, `node ./${folder}/${BotDetails.Name}.js \n pause`);
        fs.writeFileSync(`./${folder}/${BotDetails.Name}.js`, `
        const Discord = require('discord.js');\n
        const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});\n
        client.on('ready',()=>{\n
            console.log('${BotDetails.Name} is starting')\n
        });\n
        client.on('message',(msg)=>{\n
            if(msg.content==='${BotDetails.BotPrefix}ping'){\n
                msg.reply('Pong!')\n
            }
        }
        );\n
        client.on('message',(msg)=>{\n 
            if(msg.content==='${BotDetails.BotPrefix}CreatorsGitHub'){\n
                msg.reply('https://github.com/KTBZay/')
            }\n
        });\n
        client.on('message',(msg)=>{\n 
            if(msg.content==='${BotDetails.BotPrefix}issues'){\n
                msg.reply('https://github.com/KTBZay/LSRPServer/issues')
            }\n
        });\n

    
        client.login('${BotDetails.BotToken}');
   
        `)
      
    
    }
    module.exports = CreateBot; 
} catch (error) {
    fs.writeFileSync('./error.txt', error)    
}
