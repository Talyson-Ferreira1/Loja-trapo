

//---  Esse código é responsável por abri e fechar o menu responsivo  ----------

const btnMobile = document.getElementById( 'btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart')event.preventDefaut();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); 

}

btnMobile.addEventListener('click', toggleMenu);


//---  Esse código é responsável pelo slide de imagens  ----------

let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {
    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener("load", start)

//---  Esse código é responsável pelas abas de produtos ----------

const $ = document.querySelector.bind(document)

function TabNavigation(){

    const html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab:$('[data-open]')
    }
     
    function hideAllTabContent(){
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function removeAllActiveClass(){
        html.links.forEach(tab =>{
            tab.className = tab.className.replace("active",)
        })
    }

    function showCurrentTab(id){
        const tabcontent = $('#' + id)
        tabcontent.style.display = "block"
    }

    function selectTab(event){
        hideAllTabContent()
        removeAllActiveClass()

        const target = event.currentTarget
        showCurrentTab(target.dataset.id)

        target.className += " active"
        
    }

    function listenForChange(){
        html.links.forEach(tab =>{
            tab.addEventListener('click', selectTab)
        })
    }
    
    
    function init(){
        hideAllTabContent()
        listenForChange()  
        html.openTab.click()
    }

    return{
        init
    }

}


window.addEventListener('load', () => {
    const tabNavigation = TabNavigation()
    tabNavigation.init()
})
