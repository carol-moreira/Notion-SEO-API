const getPages = require('./services/notion')

;(async () => {
    const nPages = await getPages()
    console.log(nPages)
})()
