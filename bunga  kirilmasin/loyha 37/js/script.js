window.addEventListener('DOMContentLoaded', () =>{
 const tabsParent = document.querySelector('.tabheader__items'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabContent =document.querySelectorAll('.tabcontent');


function hideTabcontent(){
    tabContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show','fade');
    });

    tabs.forEach((item) =>{
        item.classList.remove('tabheader__item_active');
    });
}
function showTabContent (i = 0){
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}


hideTabcontent();
showTabContent();

tabsParent.addEventListener( 'click', (Event) => {

const target = Event.target;


if(target && target.classList.contains('tabheader__item')){
    tabs.forEach((item, idx) =>{
      if( target == item ){ 
        hideTabcontent();
        showTabContent(idx);
      }
    });
   }

});














});

