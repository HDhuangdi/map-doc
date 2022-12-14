const fs = require('fs')
const resolve = path => require('path').resolve(__dirname, path)

const packageJSON = JSON.parse(fs.readFileSync(resolve('../package.json')))
const version = packageJSON.dependencies['ark-map']
const js = `export default '${version}';`
fs.writeFileSync(resolve('../docs/version.js'), js)