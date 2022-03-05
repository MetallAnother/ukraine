let nom1 = prompt('Путін - ')
if (nom1=='хуйло'){
    let nom2 = prompt('Слава Україні - ')
    if(nom2 == 'героям слава'){
        let b = document.createElement("img")
        b.src ='ukraine-anime.jpg'
        document.querySelector('.found').append(b)
    }
    else{
        let c = document.createElement("h1")
        let x = document.createElement("p")
        let z = document.createElement("p")
        c.innerHTML ="404"
        x.innerHTML ="Not Found"
        z.innerHTML ="The resource requested could not be found on this server!"
        c.className ='hh'
        x.className ='hh2'
        z.className ='pp'
        document.querySelector('.found').append(c)
        document.querySelector('.found').append(x)
        document.querySelector('.found').append(z)
        }
}
else{
    let c = document.createElement("h1")
    let x = document.createElement("p")
    let z = document.createElement("p")
    c.innerHTML ="404"
    x.innerHTML ="Not Found"
    z.innerHTML ="The resource requested could not be found on this server!"
    c.className ='hh'
    x.className ='hh2'
    z.className ='pp'
    document.querySelector('.found').append(c)
    document.querySelector('.found').append(x)
    document.querySelector('.found').append(z)
}