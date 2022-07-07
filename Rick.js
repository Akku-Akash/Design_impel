var res = document.querySelector(".box")
var last_box = document.querySelector(".result")
let popup = document.getElementById("result")
let a = 1
let id;
async function getdata(a){
    try{
      let response = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&page=${a}`)
      let data = await response.json()
      rick(data)
    }
    catch(err){
        console.log("err",err)
    }
}
getdata()

function rick(data){
     for(let i = 0; i<25; i++){
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        div2.id = "div2"
        div.id = "inner_div"
        let img = document.createElement("img")
        let name = document.createElement("p")
        let status = document.createElement("p")
        let a = data.results
       img.src = a[i].image
       img.id = "img_logo"
       name.innerText = a[i].name
       
       if(a[i].status == "Alive" || a[i].status == "Dead"){
        status.innerText = "🟢 "+a[i].status + " - " + a[i].species
       }else{
        status.innerText = "⚪ "+a[i].status + " - " + a[i].species
       }
       status.id = "logo_status"
        
        div2.append(name,status)
        div.append(img,div2)
        res.append(div)
        name.onclick = function(){
            box_item(a[i])
        } 
     }
   
}
res.addEventListener("scroll",function(){
    getdata(a++)
    getdata()
    
})
 async function search(){
     try{
        var name = document.getElementById("name").value
        if(name.length <=2){
            return false
        }
      let res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      let data = await res.json()
      
      app(data)
    }catch(err){
        console.log("err",err)
    }
 }

 function app(data){
    res.innerHTML = null;
    if(data.error == "There is nothing here"){
        return false
    }
    res.innerHTML = null;
    
    for(let i = 0; i<data.info.count; i++){
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        div2.id = "div2"
        div.id = "inner_div"
        let img = document.createElement("img")
        let name = document.createElement("p")
        let status = document.createElement("p")
        let a = data.results
       img.src = a[i].image
       img.id = "img_logo"
       name.innerText = a[i].name
       
       if(a[i].status == "Alive" || a[i].status == "Dead"){
        status.innerText = "🟢 "+a[i].status + " - " + a[i].species
       }else{
        status.innerText = "⚪ "+a[i].status + " - " + a[i].species
       }
       status.id = "logo_status"
        
        div2.append(name,status)
        div.append(img,div2)
        res.append(div)
        name.onclick = function(){
            box_item(a[i])
        } 
    }
 }

 function box_item(arr){
    let cut = document.createElement("p")
    cut.innerHTML = "✖";
    cut.id = "cut"
    let res_div = document.createElement("div")
    let div_1 = document.createElement("div")
    let div_2 = document.createElement("div")
    let main_div = document.createElement("div")
   main_div.id = "main_div"

    let img = document.createElement("img")
    let status = document.createElement("p")
    img.src = arr.image
    img.id = "img_logo1"
    let h1 = document.createElement("h3")
    h1.innerText = arr.name
    if(arr.status == "Alive" || arr.status == "Dead"){
        status.innerText = "🟢 "+arr.status + " - " + arr.species
       }else{
        status.innerText = "⚪ "+arr.status + " - " + arr.species
       }


      div_2.append(h1,status)
    div_1.append(img,div_2)
    div_1.id = "div_1"

    let p =document.createElement("p")
    p.innerText = "Gender -- "+ arr.gender
    let location =document.createElement("p")
    location.innerText = "Location -- "+ arr.origin.name
    let species =document.createElement("p")
    species.innerText = "Species -- "+ arr.species
    let origin =document.createElement("p")
    origin.innerText = "Origin -- "+ arr.origin.name

    main_div.append(p,location,species,origin)
    res_div.append(cut,div_1,main_div)
    last_box.append(res_div)
    cut.onclick = function(){
        close()
    }
    console.log(arr)
    open()
}

 function open(){
    popup.classList.add("open-res")
 }
 function close(){
    popup.classList.remove("open-res")
 }

 function debounce(search,delay){
    if(id){
        clearTimeout(id)
    }
   id = setTimeout(function(){
           search()
       },delay);
    
 }