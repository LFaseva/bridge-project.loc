window.onload = function(){

  var btn_Menu = document.querySelector('.caption');
    
  for(var i=0; i<btn_Menu.length;i++){
        btn_Menu[i].onclick = function(){
            var mobile_Menu = this.parentNode.querySelector('.menuBlock');
            mobile_Menu.classList.toggle('openMenu');
        }
    }

}
