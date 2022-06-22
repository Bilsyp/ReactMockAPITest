 const open = (e)=>{
  const ul = document.querySelector(".Navigation");
  const btn = document.querySelector("button");
  const attr = ul.getAttribute("aria-controls")
     if(attr=="false"){
       ul.setAttribute("aria-controls","true")
       btn.innerHTML = `<i class="fas fa-2x fa-times"></i>`
     }else{
        ul.setAttribute("aria-controls","false")
       btn.innerHTML = `<i class="fas fa-2x fa-bars"></i>`
     }
 }
export default open