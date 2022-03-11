 
    const createCode = (codeLength) =>{ // codeLength POUR PARAMETRER LE NOMBRE DE CHIFFRES COMPOSANT LE CODE
        let count = 0;
        let code = [];
        for(let i = 0; i < codeLength; i++) // On boucle pour obtenir le nombre de chiffres souhaité
        {
            code.push(Math.floor(Math.random()*10));
        }
        return code;
    }    
    code = createCode(3);
    codeString = code.join(''); // Avec join on convertit le tableau en string pour faciliter la comparaison et le format de sortie
    console.log(`code => ${codeString}`);


/*------------------------------------ VERSION 1 --------------------------------------
//---- PAS DE SURPRISE LE NOMBRE TROUVé CORRESPOND AU NOMBRE DE TENTATIVES ------------ */
const searchCode = (code) =>{  
    let count = 0;      
    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            for(let k = 0; k < 10; k++)
            {                                          
                console.log(`${code[0]} ${code[1]} ${code[2]} ---- ${i} ${j} ${k}`);               
                if(code[0] === i && code[1] === j && code[2] === k)
                {
                    return `Après ${count} tentatives vous avez trouvé ${i}${j}${k}`;                        
                }
                count++; 
            }                
        }
    }        
}     

soundClick = new Audio('./click.mp3');
let keyWord;
let textCode = [];
let isExist = false;
let timer = 60;
let timerStart;
let container = document.getElementById('container');
let timerContent = document.getElementById('timer');
let createDiale = (i) => {
    let div = document.createElement('div');
    div.classList.add('button');
    div.textContent = i;
    container.appendChild(div);
    div.addEventListener("mousemove", (e) => {
        e.target.classList.remove('flash');
        e.target.classList.remove('danger');
    })
    div.addEventListener("mousedown",  (e) =>{
        soundClick.play();
        if (timer == 60) {
            timerStart = setInterval(() => {
                timerContent.textContent = timer;
                timer--;
                if (timer < 30) {
                    timerContent.style.backgroundColor = 'red';
                    timerContent.style.opacity = '.9';
                    timerContent.style.color = 'white';
                }
    
                if (timer < 0) {
                    clearInterval(timerStart);
                    alert('Le temps est ecoulé');
                    code = createCode(3);
                    timer = 60;
                    timerContent.textContent = timer;
                    timerContent.style.backgroundColor = '';
                    timerContent.style.color = 'green';
                }

               
            }, 1000); 
        }
      
        
        if (code.includes(i)) {
            e.target.classList.add('flash');
        }else {
            e.target.classList.add('danger');
        }
        if (i ==  code[2] && textCode[0] != null && textCode[1] != null) {
            textCode[2] = i;
            document.getElementById('code3').textContent = i;
        }
        if (i ==  code[1]  && textCode[0] != null) {
            textCode[1] = i;
            document.getElementById('code2').textContent = i;
        }
        if (i ==  code[0]) {
            textCode[0] = i;
            document.getElementById('code1').textContent = i;
        }

        if (textCode.join('') == code.join('')) {
            clearInterval(timerStart);
            console.log(timer);
            setTimeout(() => {
                body.innerHTML = `<h3>Bravo vous avez  trouvé le code ${textCode.join('')} en ${60 - timer} seconde</h3>`;
            }, 3000);
        }
        
    })
   
}




for (let i = 0; i < 10; i++) {
   createDiale(i) 
}

const btnExit = document.getElementById('btnExit');

btnExit.addEventListener('click', () => {
    body.innerHTML = "<h1>Bienvenue sur Ma page</h1>";
})

