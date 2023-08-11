// Função para pegar o IP
function getIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').innerText = data.ip;
        })
        .catch(error => {
            console.error('Houve um erro ao obter o IP:', error);
        });
}

// Função para atualizar a data e a hora
function updateTime() {
    const now = new Date();
    document.getElementById('date').innerText = now.toLocaleDateString();
    document.getElementById('time').innerText = now.toLocaleTimeString();

    // Atualiza a hora a cada segundo
    setTimeout(updateTime, 1000);
}

// Chama as funções
getIP();
updateTime();
