const reportAcudits:any[] = [];
let acudit: any;


const boto = document.querySelector("#boto")
boto.addEventListener("click", obtindreAcudits)
;

     function obtindreAcudits():any{
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
    function mostrarPuntuacion(n):any{
        let valor_score = n;
        let d =  new Date()
        let valor_date = d.toISOString();

        const opinion = {
            joke: acudit ,
            score: valor_score,
            date: valor_date
        }
     
        reportAcudits.push(opinion)
      console.log("reportAcudits", reportAcudits)
      
    }
   

    function mostrarHTML(acudits):any{
        const contenido = document.querySelector(".nou_acudit");
        
        let html = "";

        acudit = acudits.joke
            

            html += `
                <p>${ acudit }</p>
                <button id="boto1"  name="valor" onclick="mostrarPuntuacion(1)">1</button> <button id="boto2"  name="valor" onclick="mostrarPuntuacion(2)">2</button> <button id="boto3" name="valor" onclick="mostrarPuntuacion(3)">3</button>
            `
        
           
        contenido.innerHTML = html;
      
    }

    
    
  
        