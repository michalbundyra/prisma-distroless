var platform = require("@prisma/get-platform");

platform.getPlatform().then(function (x) {
    console.log('Platform: ', x)
}).catch(function (e) {
    console.log('Error: ', e)
}).finally(function () {
    console.log('Done!')
});
