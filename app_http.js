
//variavel http carregando o modulo 'http' do node
var http = require("http")

//variavel 'http' chama a funcao createserver e a funcao listen na porta 3000
//a function recebe os valores de requisicao e resposta
http.createServer(function(req,res){
//o valor res recebe o bem vindo
    res.end("<h1>bem vindo</h1><h4>servidor http</h4>")

}).listen(3000)

//msg de retorno do servidor
console.log("Servidor Node rodando")



