let entnumobj=document.querySelector('input#entnum')

function gerar(){
    let entnum=Number.parseInt(entnumobj.value)
    let res=document.querySelector('p#res')
    let resval=document.querySelector('div#resvalue')
    res.innerHTML=""
    let conta=1
    while(entnum<=10){
        let parres=document.createElement('p')
        parres.setAttribute('id', `id${conta}`)
        parres.innerHTML=`O contador está em ${entnum}`
        res.appendChild(parres)

        entnum++
        conta++
    }
    /*
    par=document.querySelector('p#id3')
    resval.innerHTML=document.write(par.value)
    */
}