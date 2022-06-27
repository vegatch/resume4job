
const  mysql = require('mysql');

 const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sanglade',
    password: 'Bengadov@1979',
    database: 'resumedb',
    multipleStatements: true
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 