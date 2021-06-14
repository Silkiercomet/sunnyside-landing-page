const checkbox = document.querySelector('#checkbox_id');
const mobile = document.querySelector('.mobile-menu');

const showMobile = () => {
    if(checkbox.checked == true){
        mobile.classList.toggle('mobile-menu-active')
    }else{
        mobile.classList.toggle('mobile-menu-active')
    }
}

 checkbox.addEventListener("click",showMobile);
