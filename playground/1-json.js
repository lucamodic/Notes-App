const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Luca"
data.age = 20

fs.writeFileSync('1-json.json', JSON.stringify(data))


