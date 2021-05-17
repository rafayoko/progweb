function displayPicture(element){
  const frame = document.getElementById("framevitor");
  frame.style.backgroundImage="url('"+element.src+"')";

  var txt = document.getElementById("textofoto");

  if(element.id == "rafa1") {
      txt.setAttribute('data-value', texto[0]);
  }
  else if(element.id == "rafa2") {
      txt.setAttribute('data-value', texto[1]);
  }
  else if(element.id == "rafa3") {
      txt.setAttribute('data-value', texto[2]);
  }
  else if(element.id == "rafa4") {
    txt.setAttribute('data-value', texto[3]);
}
else if(element.id == "rafa5") {
  txt.setAttribute('data-value', texto[4]);
}
  else {
      txt.setAttribute('data-value', "");
  }
}

function undisplayPicture(){
  const frame = document.getElementById("framevitor");
  frame.style.backgroundImage="none";
  
  var txt = document.getElementById("textofoto");
  txt.setAttribute('data-value', "");
}

const texto = [
  "Essa foto foi tirada em 2018 com essa vista linda de Pebble Beach",
  "Bateria Invocada - Minha primeira apresentação na Tabu ano de 2018",
  "Ubatuba - 2018 - 1º Réveillon com o Rafa",
  "Uma das minhas fotos favoritas, uso ela sempre que preciso fazer um perfiil novo. Foi tirada no Museu da Arte Sacra.",
  "Foto tirada no Tusca de 2018. Foi o meu primeiro Tusca e neste momento tinha encontrado meus amigos depois de muito tempo perdido.",
  "Essa foto foi tirada quando recebi minha fantasia para o desfile do carnaval de São Paulo 2019. Desfilei pela Unidos de Vila Maria na bateria, foi incrível!"
]