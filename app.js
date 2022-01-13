import FavoriteItem from "./Components/pop-up-favorites/pop-up-favorites";

const btnSearch = document.querySelector('.loop')
const inputSearch = document.querySelector('#inputSearch')
const closeBtn = document.querySelector('.close_btn')
function showInput() {
    inputSearch.classList.add('show')
    setTimeout(()=>{
        closeBtn.classList.remove('hide')
    }, 500)
    inputSearch.classList.remove('hide')
    btnSearch.classList.add('show-input')
}
btnSearch.addEventListener('click', () => {
    if (inputSearch.classList.contains('hide')) {
        inputSearch.value = ''
        showInput()
    }
})
const hideInput =()=>{
    inputSearch.classList.remove('show')
    inputSearch.classList.add('hide')
    btnSearch.classList.remove('show-input')
    closeBtn.classList.add('hide')
}
closeBtn.addEventListener('click',()=>{
    hideInput()
})
const langPopUp = document.querySelector('.change_lang_box')
const arrow = document.querySelector('.arrow')
function rotateArrow (element, string1, string2){
    element.classList.remove(string1)
    element.classList.add(string2)
}
function hideAnimation (){
    langPopUp.classList.add('pop-up-langHide')
    setTimeout(()=>{
        langPopUp.classList.add('hide')
    },300)
}
arrow.addEventListener('click',()=>{
    if (arrow.classList.contains('rotateArrow')){
        rotateArrow(arrow,'rotateArrow', 'rotateArrowElse')
    } else if (arrow.classList.contains('rotateArrowElse')){
        rotateArrow(arrow,'rotateArrowElse','rotateArrow')
    }
    if (langPopUp.classList.contains('pop-up-langHide')){
        langPopUp.classList.remove('pop-up-langHide')
        langPopUp.classList.remove('hide')
        langPopUp.classList.add('pop-up-langShow')
    }else hideAnimation()
})
import Button from "./Components/listMenuItems/listMenuItems";
import {menu} from "./data/data";
import {} from "./Helpers/ArrayExt"
const menuContainer = document.querySelector('.menu_container')
const buttonsText = menu.map((category)=> category.category).distinct();
const buttonsComponents = buttonsText.map((buttonsContent) => new Button(buttonsContent));
const buttonsContainer = menuContainer.querySelector(".menu-title-parent")
const renderData = buttonsComponents.reduce((renderData, btn) =>
    (renderData += btn .render()),''
)
buttonsContainer.innerHTML = buttonsComponents.reduce((renderData, btn)=>
    renderData += btn.render(), ''
)
let menuFilter = "Burger"

function renderMenu(menuItems) {
    const MenuContainer = document.querySelector('.menu-items')
    MenuContainer.innerHTML = menuItems.reduce((renderData, MenuItem)=>
        renderData += MenuItem.render(),'')
    const cards = MenuContainer.querySelectorAll('.item')
    cards.forEach((card)=>{
        card.classList.add('fadeMenu')
    })
}
const slideSlots = document.querySelectorAll('.slide-slot')
const buttonsFilter = document.querySelectorAll('.menu-title')
function main() {
    buttonsFilter[0].classList.add('main')
}
main()
buttonsFilter.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
        menuFilter = event.target.innerText;
        renderMenu(menu.filter(obj => obj.category === menuFilter))
        if (event.target.classList.contains('menu-title')){
            buttonsFilter.forEach((item, i)=>{
                if (event.target === item){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
})
renderMenu(menu.filter(obj => obj.category === menuFilter))
function hideTabContent() {
    buttonsFilter.forEach((btn)=>{
      btn.classList.remove('main')
    })
    slideSlots.forEach((slot=>{
       slot.classList.remove('main-slot')
    }))
}
function showTabContent( i = 0) {
    buttonsFilter[i].classList.add('main')
    slideSlots[i].classList.add('main-slot')
}
const rightLeftSlider = menuContainer.querySelectorAll('.slide-btn')
function sliderFunc(i) {
    hideTabContent()
    showTabContent(i)
}
function sliderIf(string, string2, string3, i, i2, i3){
    if (menuFilter === string){
        menuFilter = string3
        sliderFunc(i3)
        renderMenu(menu.filter(obj => obj.category === string3))
    } else if (menuFilter === string3){
        menuFilter = string2
        sliderFunc(i2)
        renderMenu(menu.filter(obj => obj.category === string2))
    } else if (menuFilter === string2){
        menuFilter = string
        sliderFunc(i)
        renderMenu(menu.filter(obj => obj.category === string))
    }
}
rightLeftSlider[0].addEventListener('click', ()=>{
    sliderIf('Burger','Pizza','Sandwich', 0, 1, 2)
})
rightLeftSlider[1].addEventListener('click', ()=>{
    sliderIf('Burger','Sandwich','Pizza', 0, 2, 1)
})
const popupBasket = document.querySelector('.basket')
const closePopUpBtn = document.querySelectorAll('.close_pop_btn')
const popupTrigger = document.querySelector('.basket_icon')
const favoritesPopup = document.querySelector('#saved')
const favoritesTrigger = document.querySelector('.favorites_icon')
function hidePopup (popup){
    popup.classList.add('hide')
    popup.classList.remove('show')
    document.body.style.overflow = 'scroll'
}
function showPopup (popup){
    popup.classList.remove('hide')
    popup.classList.add('show')
    document.body.style.overflow = 'hidden'
}
favoritesTrigger.addEventListener('click',()=>{
    showPopup(favoritesPopup)
})
popupTrigger.addEventListener('click', ()=>{
    showPopup(popupBasket)
})
closePopUpBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    if (!popupBasket.classList.contains('hide')){
        hidePopup(popupBasket)
    }
    else if (!favoritesPopup.classList.contains('hide')){
        hidePopup(favoritesPopup)
    }
})
})

popupBasket.addEventListener('click',(e)=>{
    if (e.target.classList.contains('basket')){
        hidePopup(popupBasket)
    }
})
favoritesPopup.addEventListener('click',(e)=>{
    if (e.target.classList.contains('favorites')){
        hidePopup(favoritesPopup)
    }
})
document.body.addEventListener('keydown',(e)=>{
    if (e.code === 'Escape'){
        hidePopup(popupBasket)
        hidePopup(favoritesPopup)
    }
})
import {basket} from "./data/basketData"
const basketItemContainer = popupBasket.querySelector('.pop_up_content')
basketItemContainer.innerHTML = basket.reduce((renderData, BasketItem)=>
    renderData += BasketItem.render(),'')
import {favorite} from "./data/favoritesData";
const favoritesContainer = favoritesPopup.querySelector('.saved')
favoritesContainer.innerHTML = favorite.reduce((renderData, savedItem)=>
    renderData += savedItem.render(),'')