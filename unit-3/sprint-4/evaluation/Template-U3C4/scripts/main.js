async function apiCall(url) {
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(e){
        console.log('e:', e)

    }
      
    //add api call logic here


}


function appendArticles(articles, main, location1) {
    articles.forEach((el)=>{
        var div = document.createElement("div")
        var img = document.createElement("img")
        img.src = el.image
        var h1 = document.createElement("h1")
        h1.innerText = el.title
        div.append(h1,img)
        img.onclick = function (){
           location1.innerHtml = null;
            var div1 = document.createElement("div")
            var head = document.createElement("h1")
            head.innerText = el.title
            var imag = document.createElement("img")
            imag.src = el.image
            var des = document.createElement("p")
            des.innerText = el.description
            div1.append(head,imag,des)
            location1.append(div1)
        }
        
        main.append(div)
     
    })
    
   
}

export { apiCall, appendArticles }