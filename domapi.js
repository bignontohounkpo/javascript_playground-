

function createarticle(post){
    const article= document.createElement ('article')
    const h2 = document.createElement('h2');
    h2.innerText = post.title;
    article.append(h2);
    const p = document.createElement('p').innerText=post.body
    article.append(p)
    return article
}
 async function main (){
    const wrapper =document.querySelector('#lastposts')

    const loader = document.createElement('p')
    loader.innerHTML= "Chargement..."
    wrapper.append(loader)
    try {
   const r= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5',{
        headers: {
            Accept:'application/json'
        }
    })
    if(!r.ok){
        throw new Error('erreur serveur')
    }
    const posts = await r.json()
    loader.remove()
    for( let post of posts){
        wrapper.append(createarticle(post))
    }

} 
 catch (e) {
    loader.innerText='Impossible de charger les article'
    loader.style.color='red'
    return
 }
}

main()