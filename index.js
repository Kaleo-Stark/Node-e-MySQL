( async () => { // ... Possibilita a utilização de await.
    const db = require("./db"); // ... Importa o modulo de conexão com o Banco de dados.

    // Insert cliente.
    let retornoInsert = await db.insertCustomer({nome: "Zé", idade: 18, uf: "MG"});
    console.log("Retorno do insert: ", retornoInsert);

    // Update cliente.
    let retornoUpdate = await db.updateCustomer(4, {nome: "Zé Alterado", idade: 18, uf: "MG"});
    console.log("Retorno do update: ", retornoUpdate);

    // Delete cliente
    let retornoDelete = await db.deleteCustomer(4);
    console.log("Retorno do delete: ", retornoDelete);

    // Select clientes.
    let clientes = await db.selectCustomers();
    console.log(clientes);
})();