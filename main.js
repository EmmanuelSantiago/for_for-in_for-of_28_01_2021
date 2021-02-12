console.time('for()');
let lista = ['emmanuel', 'santiago', 'forero', 'bucaramanga', 'santander', 'colombia'];
for (let i = 0; i < lista.length; i++) {
 console.log(lista[i]);
}
console.timeEnd('for()');

for(let id in lista){
    for(let valor of lista){
        console.log(`La posicionde la lista es ${id}, y el nombre es ${valor}`);
    }
}