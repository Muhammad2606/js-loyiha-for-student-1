window.addEventListener('DOMContentLoaded', () =>{

    const tabsparent = document.querySelector('.tabitems'),
         tabs = document.querySelectorAll('.tabitem'),
         tabscontent = document.querySelectorAll('.tabcontent');



         function hideTabContent(){
            tabscontent.forEach((item) =>{
                item.classList.add('hide');
                item.classList.remove('show','lode');
            });
            tabs.forEach((item) =>{
                item.classList.remove('tabactive-item');
            });
         }



         function showTabContent(i = 0){
            tabscontent[i].classList.remove('hide');
            tabscontent[i].classList.add('add', 'lode');
            tabs[i].classList.add('tabactive-item');

         }

         hideTabContent();
         showTabContent();


         tabsparent.addEventListener('click', (Event) =>{
 

         const target = Event.target;

         if(target && target.classList.contains('tabitem')){
            tabs.forEach((item, idx) =>{
            if( item == target){
                hideTabContent();
                showTabContent(idx);
            }
            });
         }


         });



























});