// Modulo que fará a comunicação com o MySQL.

async function connect(){
    if(global.connection && global.connection.state !== "disconnected") // ... Verifica se já existe uma conexão criada.
        return global.connection; // ......................................... Retorna a conexão que já está criada.

    const mysql = require("mysql2/promise"); // .............................. Importa o modulo que da supore a promisses para utilizar com o MySQL.
    
    // A string de conexão segue o seguinte modelo: "mysql://<USUÁRIO>:<SENHA>@<DOMINIO>:<PORTA>/<NOME DO BANCO>".
    const connection = await mysql.createConnection("mysql://kaleostark:@localhost:3306/crud"); // ... Espera a conexão.

    console.log("Conectou no MySQL!");

    global.connection = connection; // ....................................... Atribui a conexão a uma variável global.

    return connection; // .................................................... Retorna a conexão criada.
}

async function selectCustomers(){ // ............................... Função responsável por fazer o Select. 
    let conn = await connect(); // ................................. Solicita a conexão com o Banco.

    let [rows] = await conn.query('SELECT * FROM clientes;'); // ... Executa o comando e atribui o retorno a uma variável.

    return rows; // ................................................ Retorna a variável.
}

async function insertCustomer(customer){ // .................................. Função responsável por inserir, está recendo os dados.
    let conn = await connect(); // ........................................... Solicita a conexão com o Banco.

    let sql = 'INSERT INTO clientes (nome, idade, uf) VALUES (?,?,?);'; // ... Atribui o comando a uma variável. 

    let values = [customer.nome, customer.idade, customer.uf]; // ............ Atribui os dados a uma variável em forma de Array.

    return await conn.query(sql, values); // ................................. Executa o comando SQL passando os dados necessários, e retorna o resultado.
}

async function updateCustomer(id, customer){ // ............................. Função responsável por atualizar os dados, está recebendo os dados.
    let conn = await connect(); // .......................................... Solicita a conexão com o Banco.

    let sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?;'; // ... Atribui o comando a uma variável. 

    let values = [customer.nome, customer.idade, customer.uf, id]; // ....... Atribui os dados a uma variável em forma de Array.

    return await conn.query(sql, values); // ................................ Executa o comando SQL passando os dados necessários, e retorna o resultado.
}


async function deleteCustomer(id){ // ................. Função responsável por deletar algum dado, está recebendo o id para deletar.
    let conn = await connect(); // .................... Solicita a conexão com o Banco.

    let sql = 'DELETE FROM clientes WHERE id=?;';// ... Atribui o comando a uma variável. 

    return await conn.query(sql, [id]); // ............ Executa o comando SQL passando os dados necessários, e retorna o resultado.
}

module.exports = { 
    selectCustomers,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}; // ... Exporta todas as funções resposáveis pelo CRUD.