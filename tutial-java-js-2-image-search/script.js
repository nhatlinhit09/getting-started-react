const accsessKey = "4zpRD8KN9EOLFW6WWqkaA5icRYYnmQIcP-oZhkvjsW4"
const formEl = document.querySelector("form")
const inputEl=document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")
let inputData="";
let page =1;
async function searchImages(){
    inputData =inputEl.value;
    // const url =`https://api.unsplash.com/search/photos?page='+2+'&query="+apple+"&client_id=432423423423`

    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accsessKey}`

    console.log("url ne",url)

    const response = await fetch(url) //dooan nay la lay API -> tra ve du lieu response
    const data =await response.json() // chuyen response thanh json {...}
    const results =data.results // lay du lieu results  ben trong json
    if (page==1){ 
        searchResults.innerHTML =""
    }


    // hoc. search bang tieng viet:
    // ---- 
    // google
    // 1/ javascript object la gi?
    // 2/ javascript arrray la gi?
    // 3/ javascript object va array la gi?
    // 4/ json la gi
    // 5/ javascript vong lap array
    // 6/ javascript looop object
    // 7/ loop javascript for, foEach, map, filter, reduce ...
    // 8/ event trong javascript: onclick,...

    //advance:
    // function va arrow function trong javascript: function a() va ()=>
    // anoynimous function trong javascriptn 
    // destructuring trong javascript
    // spead trong javascript
    // 
    

    const searchResultsDOMCha = document.getElementsByClassName('search-results')[0];

    // [{}, {}, {},{},{}] ..10 qua tao'
    // for (let i = 0; i < results.length; i++){
    //  let result = results[i]
    //
    //}
    results.map((result)=>{ // chay vong lap results 10 qua tao
        console.log(result)
        // 


        // ung voi moi qua tao' tao noi dung html va append vao .results > xong 
        const imageWrapper  = document.createElement('div') // tao ra 1 the div <div></div>
        imageWrapper.classList.add("search-result") // <div class="search-result"></div>
       
       
        const image =document.createElement('img') // <img />
        image.src=result.urls.small // <img src="https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjUzMDR8MHwxfHNlYXJjaHwxfHxhcHBsZXxlbnwwfHx8fDE2ODc1MzU3MjV8MA&ixlib=rb-4.0.3&q=80&w=400"
        image.alt =result.alt_description // img src= "cai o tren" alt="chu chu thich"...
        const imageLink =document.createElement('a')  // <a></a>
        imageLink.href =result.links.html  // <a href="https://unsplash.com/photos/CoqJGsFVJtM"></a>
        imageLink.target= "_blank" // <a href="https://unsplash.com/photos/CoqJGsFVJtM" target="_blank"></a>
        imageLink.textContent =result.alt_description //?

        imageWrapper.appendChild(image)  //<div class="search-result"><img src="..."/></div>
        imageWrapper.appendChild(imageLink) //<div class="search-result"><img src="..."/><a href=""></a></div>
      
       
      
        searchResultsDOMCha.appendChild(imageWrapper) //<div class="search-results">
    });
    page++
    if(page > 1 ){
        showMore.style.display="block"
    }

}
// form nao do duoc submit -> goi cai ham searchImages
formEl.addEventListener("submit",(event)=> {
    event.preventDefault()
    page = 1; 
    searchImages()
})

// cach1: khi bam vao button showmore -> goi ham searchImages
// anoynimous function nhung sai cu phap arrow function
showMore.addEventListener("click", ()=> {
    searchImages()
})

//cach2:  giong nhau
// showMore.addEventListener("click", function() {
//     searchImages()
// })

// cach 3:  giong nhau dinh nghia goi ham
// showMore.addEventListener("click", xulyClick)
// function xulyClick(){
//     searchImages()
// }

//function() { => anoynimous function => la 1  function khong co ten
   
//     searchImages()
// }