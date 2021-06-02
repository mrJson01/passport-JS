const app = require('./app.js');

app.set('port',process.env.SERVER_PORT || 8000);

const server = app.listen(app.get('port'),()=>{
    console.log("Server is working");
});