const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

    async function vizualizarInformacoesGlobais() {
        const res = await fetch(url)
        const dados = await res.json()
        cosole.log(dados);
        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graficos-container__texto')
        paragrafo.innerHTML = `No mundo existem ${dados.total_pessoas_mundo} de pessoas, das quais ${dados.total_trabalhadores_mundo} são trabalhadores e desses, ${dados.total_pessoas_que_necessitam_transporte_para_trabalho} utilizam algum tipo de transporte para ir ao trabalho, levando um tempo médio de deslocamento de ${dados.tempo_medio_deslocamento_para_trabalho} minutos.`
        
        const container = document.getElementById(‘graficos-container’)
        container.appendChild(paragrafo)
      }
      
      vizualizarInformacoesGlobais()

