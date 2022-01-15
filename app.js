import FavoriteItem from "./Components/pop-up-favorites/pop-up-favorites";

const btnSearch = document.querySelectorAll('.loop')
const inputSearch = document.querySelectorAll('.inputSearch')
const closeBtn = document.querySelectorAll('.close_btn')
function forEachFunc(arrayElements, string, string2,) {
    arrayElements.forEach((item)=>{
        item.classList.add(string)
        item.classList.remove(string2)
    })
}
function showInput() {
    forEachFunc(inputSearch, 'show', 'hide')
    setTimeout(()=>{
        closeBtn.forEach((btn)=>{
            btn.classList.remove('hide')
        })
    }, 500)
    forEachFunc(inputSearch, 'show', 'hide')
    forEachFunc(btnSearch,'show-input','hide')
}
btnSearch.forEach((btn)=>{
  btn.addEventListener('click', () => {
    if (inputSearch[0] || inputSearch[1].classList.contains('hide')) {
        inputSearch.forEach((input)=>{
            input.value = ''
        })
        showInput()
    }
})
})
const hideInput =()=>{
    forEachFunc(inputSearch,'hide', 'show')
    forEachFunc(btnSearch, 'show', 'show-input')
    forEachFunc(closeBtn, 'hide', 'show')
}
closeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    hideInput()
})
})
const langPopUp = document.querySelectorAll('.change_lang_box')
const arrow = document.querySelectorAll('.arrow')
function hideAnimation (){
    forEachFunc(langPopUp, 'pop-up-langHide', 'show')
    setTimeout(()=>{
        forEachFunc(langPopUp, 'hide', 'show')
    },300)
}
arrow.forEach((arr)=>{
    arr.addEventListener('click',()=>{
    if (arr.classList.contains('rotateArrow')){
        forEachFunc(arrow,'rotateArrowElse', 'rotateArrow')
    } else if (arr.classList.contains('rotateArrowElse')){
        forEachFunc(arrow,'rotateArrow', 'rotateArrowElse')
    }
    if (langPopUp[0] && langPopUp[1].classList.contains('pop-up-langHide')){
        forEachFunc(langPopUp,'pop-up-langShow', 'pop-up-langHide')
        langPopUp.forEach((item)=>{
            item.classList.remove('hide')
        })
    }else hideAnimation()
})
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

const menuCategoryNames = ['Burger','Pizza','Sandwich','Salad','Desert', 'Drink']
function sliderIfForLeftSlide(array){
    if (menuFilter === array[0]){
        menuFilter = array[5]
        sliderFunc(5)
        renderMenu(menu.filter(obj => obj.category === array[5]))
    } else if (menuFilter === array[1]){
        menuFilter = array[0]
        sliderFunc(0)
        renderMenu(menu.filter(obj => obj.category === array[0]))
    } else if (menuFilter === array[2]){
        menuFilter = array[1]
        sliderFunc(1)
        renderMenu(menu.filter(obj => obj.category === array[1]))
    }else if (menuFilter === array[3]){
        menuFilter = array[2]
        sliderFunc(2)
        renderMenu(menu.filter(obj => obj.category === array[2]))
    }else if (menuFilter === array[4]){
        menuFilter = array[3]
        sliderFunc(3)
        renderMenu(menu.filter(obj => obj.category === array[3]))
    }else if (menuFilter === array[5]){
        menuFilter = array[4]
        sliderFunc(4)
        renderMenu(menu.filter(obj => obj.category === array[4]))
    }
}
function sliderIfForRightSlide(array){
    if (menuFilter === array[0]){
        menuFilter = array[1]
        sliderFunc(1)
        renderMenu(menu.filter(obj => obj.category === array[1]))
    } else if (menuFilter === array[1]){
        menuFilter = array[2]
        sliderFunc(2)
        renderMenu(menu.filter(obj => obj.category === array[2]))
    } else if (menuFilter === array[2]){
        menuFilter = array[3]
        sliderFunc(3)
        renderMenu(menu.filter(obj => obj.category === array[3]))
    }else if (menuFilter === array[3]){
        menuFilter = array[4]
        sliderFunc(4)
        renderMenu(menu.filter(obj => obj.category === array[4]))
    }else if (menuFilter === array[4]){
        menuFilter = array[5]
        sliderFunc(5)
        renderMenu(menu.filter(obj => obj.category === array[5]))
    }else if (menuFilter === array[5]){
        menuFilter = array[0]
        sliderFunc(0)
        renderMenu(menu.filter(obj => obj.category === array[0]))
    }
}

rightLeftSlider[0].addEventListener('click', ()=>{
    sliderIfForLeftSlide(menuCategoryNames)
})
rightLeftSlider[1].addEventListener('click', ()=>{
    sliderIfForRightSlide(menuCategoryNames)
})
const popupBasket = document.querySelector('.basket')
// const closePopUpBtn = document.querySelectorAll('.close_pop_btn')
const closePopUpBtn = document.querySelectorAll('.close_pop-up')
const popupTrigger = document.querySelectorAll('.basket_icon')
const favoritesPopup = document.querySelector('#saved')
const favoritesTrigger = document.querySelectorAll('.favorites_icon')
function hidePopup (popup){
    popup.classList.add('hide')
    popup.classList.remove('show')
    document.body.style.overflow = 'scroll'
}
function showPopup (popup){
    popup.classList.add('show')
    popup.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
favoritesTrigger.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    showPopup(favoritesPopup)
})
})
popupTrigger.forEach((btn)=>{
   btn.addEventListener('click', ()=>{
    showPopup(popupBasket)
})
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