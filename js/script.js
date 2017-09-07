window.onload = function(){

    var btn_Menu = document.querySelector('.caption');
    var mobile_Menu = document.querySelector('.menuBlock');

    btn_Menu.onclick = function(){
        mobile_Menu.classList.toggle('openMenu');
    }

}
