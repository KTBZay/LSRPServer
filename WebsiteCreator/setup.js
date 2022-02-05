const fs = require('fs');
try {
    function WebsiteRoot(name) {
        const WebConfig = require('./config/WebConfig.json')
        if(!fs.existsSync(`./projects/${name}/`)){
            fs.mkdirSync(`./projects/${name}/`, {recursive: true})
        }
        fs.writeFileSync(`./projects/${name}/index.html`, `
            <!doctype html>
            <html>
            <head>
            <title>
            ${WebConfig['Site-Name']}
            </title>
            <head>
            <body>
                <h1>Edit your site at: ./projects/${name}/index.html
            </body>
            </html>
        
        `)    
    }
module.exports = WebsiteRoot
} catch (error) {
    
}