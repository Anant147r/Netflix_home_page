var tabs=document.querySelectorAll(".tab");
var tabContents=document.querySelectorAll(".tab-contents")
function addBorder(e){
    remove();
    this.classList.add("redline");
    var id=this.id;
    document.querySelector(`.${id}-contents`).classList.add("show");
}
function remove(){
    tabs.forEach(tab=>{
        tab.classList.remove("redline");
    })
    tabContents.forEach(tab=>{
        tab.classList.remove("show");
    })
}
tabs.forEach(item=>{
    item.addEventListener('click',addBorder);
})
