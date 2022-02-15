const reportAcudits = [];

const boto = document.querySelector("#boto")
boto.addEventListener("click", obtindreAcudits)


    function obtindreAcudits(){
        const Api_url ='https://icanhazdadjoke.com/';
        
        fetch(Api_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        
        })
        .then(res => res.json())
        .then(resultado => mostrarHTML(resultado))
        
    }
    function mostrarPuntuacion(){
        let valor_score = document.getElementsByTagName("valor").value;
        console.log(valor_score);
    }
      

    function mostrarHTML(acudits){
        const contenido = document.querySelector(".nou_acudit");
        
        let html = "";

      const acudit = acudits.joke
            

            html += `
                <p>${ acudit }</p>
                <button id="boto1" value= 1 name="valor" onclick="mostrarPuntuacion()">1</button> <button id="boto2" value= 2 name="valor" onclick="mostrarPuntuacion()">2</button> <button id="boto3" value= 3 name="valor" onclick="mostrarPuntuacion()">3</button>
            `
        

        contenido.innerHTML = html;
    }

    
    
  
        