var platform = require("@prisma/get-platform");

platform.getPlatform().then(function (x) {
    console.log('Platform: ', x)
}).catch(function (e) {
    console.log('Error: ', e)
}).finally(function () {
    console.log('Done!')
});

try {
    var library = eval('require')('./lib/libquery_engine-debian-openssl-1.1.x.so.node')
    var queryEngine = library.QueryEngine

    console.log('QueryEngine: ', queryEngine)
} catch (e) {
    console.log('Error: ', e)
} finally {
    console.log('END')
}
