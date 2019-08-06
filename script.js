 
 //Глобальная функция ожидающая построения DOM дерева
 window.addEventListener('DOMContentLoaded', function(){
'use strict';


// Модуль показывающий табы. В CSS необходимы классы 'show' и 'hide', меняющие параметр: display. В аргументы помещаются название классов пунктов меню, родительского блока меню и самих табов.
function tabContentFromMenu(infoHeaderTab, infoHeader, infoTabContent){

  let tab = document.querySelectorAll('.'+ infoHeaderTab),
      info = document.querySelector('.' + infoHeader),
      tabContent = document.querySelectorAll('.' + infoTabContent);
  //фуекция скрывающая контент, начиная с блока (а)
      function hideTabContent(a){
        
        for (let i = a; i < tabContent.length; i++){
          tabContent[i].classList.remove('show');
          tabContent[i].classList.add('hide');
        }
      };
  
      hideTabContent (1);
  //функция показывающая контент блока (b)
      function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
          tabContent[b].classList.remove('hide');
          tabContent[b].classList.add('show');
        };
      };
  
      //Обработчик по клику скрывает все блоки и показывает тот на имя которого кликнули
      info.addEventListener('click', function(e){
        let target = e.target;
        if (target && target.classList.contains(infoHeaderTab)){
          for (let i = 0; i < tab.length; i++){
            if(tab[i] == target){
              hideTabContent (0);
              showTabContent(i);
              break;
            };
          }
        };
        
  
      })


};


//Вызывает модуль с указанием селекторов
 tabContentFromMenu('info-header-tab', 'info-header', 'info-tabcontent');
 }); 

