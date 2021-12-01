let p = rn()

if(p==localStorage.getItem("gog")){
     p = rn()
     localStorage.setItem("gog", p) 
}

switch(p){
    case 0:
        document.body.style.backgroundImage = "url('temnye-kartinki-33.jpg')"
        break;
    case 1:
        document.body.style.backgroundImage = "url('6ac2aafbfbbbe72e088c9cfa00dbd724.jpg')"
        break;
    case 2:
        document.body.style.backgroundImage = "url('2560x1600-px-blue-sunset-1719165.jpg')"
        break;
    case 3:
        document.body.style.backgroundImage = "url('1614440087_24-p-temnii-nochnoi-fon-29.jpg')"
        break;
    case 4:
        document.body.style.backgroundImage = "url('1625301610_5-phonoteka-org-p-tyomnie-oboi-na-smartfon-priroda-oboi-kras-5.jpg')"
        break;    
}
localStorage.setItem("gog", p)

function rn(){
    const r = Math.random()*5
    return Math.floor(r)
}

let zvn = document.querySelector(".tel");
let modal = document.getElementById("mymodal");
let close1 = document.querySelector(".close_modal_window");
let btn = document.querySelector('.passed')

zvn.addEventListener('click',()=>{
    console.log(1+1)
    modal.style.display = "block"
})

close1.addEventListener('click',()=>{
    modal.style.display = "none"
})

window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
  }

btn.addEventListener('click',()=>{
    modal.style.display = "none"
})
// ------------------------------------------------------------------------

let opt = document.querySelector('.gorup')
let gor = document.querySelectorAll('.gor')
let prav = document.querySelector('.prav')
let lev = document.querySelector('.lev') 
let img = document.querySelector('.mes')    

let i = 0;
let j = 0;
let k = 0;
let price = 0
let dag_ph = ['/1_1.jpg','/1_2.jpg','/1_3.jpeg']
let shvec_ph = ['/2_1.jpg','/2_2.jpg','/2_3.png']
let nord_ph = ['/3_1.jpg','/3_2.jpg','/3_3.jpg']
let prc = document.querySelector('.cena')

let checked1 = document.querySelector('.checked')
let checked2 = document.querySelector('.checked1')
if (i>0 && i<5){
    prav.addEventListener()
}


opt.addEventListener('change',()=>{
    let p = opt.value
    console.log(p)
    switch(p){
        case '1':{
            price = 10000
            if (i>=0 || i<=dag_ph.length){
                prav.addEventListener('click',()=>{
                    if(i<0 || i>dag_ph.length-1){
                        i=0
                    }
                    img.src = dag_ph[i]
                    i++
                    console.log(i)
                    
                    
                })
                lev.addEventListener('click',()=>{
                    if(i<0 || i>dag_ph.length-1){
                        i=0
                    }
                    img.src = dag_ph[i]
                    i--
                    console.log(i)
                    
                })
            }}
            break


        case '2':{
            price = 20000
            if (j>=0 || j<=shvec_ph.length){
                prav.addEventListener('click',()=>{
                    if(j<0 || j>shvec_ph.length-1){
                        j=0
                    }
                    img.src = shvec_ph[j]
                    j++
                    console.log(j)
                    
                    
                })
                lev.addEventListener('click',()=>{
                    if(j<0 || j>shvec_ph.length-1){
                        j=0
                    }
                    img.src = shvec_ph[j]
                    j--
                    console.log(j)
                    
                })
            }}
            break
        case '3':{
            price = 23000
            if (k>=0 || k<=nord_ph.length){
                prav.addEventListener('click',()=>{
                    if(k<0 || k>nord_ph.length-1){
                        k=0
                    }
                    img.src = nord_ph[k]
                    k++
                    console.log(k)
                    
                    
                })
                lev.addEventListener('click',()=>{
                    if(k<0 || k>nord_ph.length-1){
                        k=0
                    }
                    img.src = nord_ph[k]
                    k--
                    console.log(k)
                    
                })
            }}    
            break         
    }
    checked1.addEventListener('change',()=>{
    if(checked1.checked){
        showPrice(3000)
        console.log(price)
    }else{showPrice(0)
    }
    
    
    })
    checked2.addEventListener('change',()=>{
        if(checked2.checked){
            showPrice(5000)
            console.log(price)
        }else{showPrice(0)
        }
        
        
        })

    function showPrice(p) {
        prc.textContent = `ЦЕНА: ${price+p}` 
        console.log(p)
        return (`ЦЕНА: ${price+p}`)  
    }

    showPrice(0)
    

})
//------------------------------------------------------

let oplt1 = document.querySelector('.oplt')
let imy = document.querySelector('#n1')
let fam = document.querySelector('#n2')
let otch = document.querySelector('#n3')

oplt1.addEventListener('click',()=>{
    localStorage.setItem("imya1", imy.value )
    localStorage.setItem("fam1", fam.value )
    localStorage.setItem("otch1", otch.value )
    console.log(imy.value)
})









