const burger = (burgerBtn, burgerMenu) =>{

    const btn = document.querySelector(burgerBtn),
          menu = document.querySelector(burgerMenu);

    menu.style.display = 'none';

    btn.addEventListener('click', ()=>{
        if(menu.style.display == 'none' && window.innerWidth < 993){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    });

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 993){
            menu.style.display = 'none';
        }
    })

}

export default burger;