// 1. Reescribe o seguinte código usando async/await:
//       function loadJson(url) {
//          return fetch(url)
//              .then(response => {
//                  if (response.status == 200) {
//                      return response.json();
//                  } else {
//                      throw new Error(response.status);
//                  }
//              });
//       }
//       loadJson('https://no-such-user.json')
//       .catch(console.log);

async function loadJson(url) {
  try {
    const response = await fetch(url); // Realiza a solicitude

    // Comproba o estado da resposta
    if (response.status === 200) {
      const data = await response.json(); // Obtén os datos como JSON
      console.log(data); // Imprime os datos
    } else {
      throw new Error(response.status); // Lanza un erro se o estado non é 200
    }
  } catch (error) {
    console.log(error); // Captura e imprime calquera erro
  }
}

// Exemplo de chamada
loadJson('https://no-such-user.json');
