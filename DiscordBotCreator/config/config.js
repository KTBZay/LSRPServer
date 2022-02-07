const BotDetails = {
    "Name": "Test",
    "BotPrefix": "!",
    "BotToken": ""

}
const mysql = require('mysql');
const datacollector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'LSRP.DataCenter'
})
datacollector.connect(function(err){
    if(err) {console.log(`LSRP_Server: Offline \n ` + err.message)}else{console.log(`LSRP_Server: Online`)};
})
const Data = `INSERT INTO discordbotinfo(name,prefix,token) VALUES ('${BotDetails.Name}','${BotDetails.BotPrefix}', '${BotDetails.BotToken}')`;
datacollector.query(Data, (err)=>{
    if(err){console.log(err.message)}else{console.log(`Data uploaded`)}
})
module.exports = BotDetails