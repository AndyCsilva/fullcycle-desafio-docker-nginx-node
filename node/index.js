const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);
let times = 0;

app.get('/', (req, res) => {
    insertName();
    getName(res);
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
function insertName() {
    const sql = `INSERT INTO PEOPLE(NOME) VALUES ('ANDRÉ ${times++}')`;
    connection.query(sql);
}

function getName(res) {
    const sql = `SELECT ID, NOME FROM PEOPLE`;
    connection.query(sql, function (err, result, fields) {

        if (err) throw err;

        let r = '';
        Object.keys(result).forEach(function (key) {
            r += `<li> 
                    <b>ID</b> ${result[key]["ID"]}  
                    <b>NOME DA PESSOA</b> ${result[key]["NOME"]}
                 </li>`
        })

        const resp = `
            <h1>Full Cycle Rocks!</h1>
            <ul>
                ${r}
            </ul>
        `
        res.send(resp)
      });
}