import { app } from "./app";

app.listen(3330, () => console.log("Server is Running!"));






/* GET => Busca POST => Salvar
PUT => Alterar DELETE => Deletar PATCH => Alteração
 */


// return response.send("Hello World - NLW04");
// http://localhost:3333/users o recurso que passar será o que vem depois da porta
// app.get("/", (request, response) => {
//   return response.json({message: "Hello World - NLW04"});
// });

// // 1 PARAMETRO => ROTA  (Recurso API)
// // 2 PARAMETRO => REQUEST, RESPONSE

// app.post("/", (request, response) => {
//   // Recebeu os dois parametros
//   return response.json({ message: "Os dados foram salvos com sucesso!" });
// });



// tem que converter para JS para o node rodar!!!