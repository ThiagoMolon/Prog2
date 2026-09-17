const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./banco/meubanco.db', (erro) => {
    if (erro) {
        console.log(erro.message);
    } else {
        console.log('Banco conectado.');
    }
});

db.serialize(() => {
    db.run(`
            create table if not exists produtos (
                id integer primary key autoincrement,
                nome text not null,
                valor float not null,
                quantidade integer not null
            );
    `);

});

module.exports = db;