/* mostrar pagina de sucesso do cadastro dos proffy
   aguardar dois segundos na paginae redirecionar para pagina dos proffys com filtro
   usar settimeout aguraddar 2s
   location.href
*/

var btn = document.querySelector("#button");

if (btn) {
  btn.addEventListener("click", ()=>{
    location.href="http://localhost:8080/sucesso";
  })
}


 