const modals = () =>{

    let btnPress = false;

    const bindModal = (triggerSelector, contentSelector, closeSelector, destroy = false)=>{
        const trigger = document.querySelectorAll(triggerSelector) ,
              modal = document.querySelector(contentSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();        

        trigger.forEach(item=>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault();
                }

                if(destroy){
                    item.remove();
                }

                window.forEach(item=>{
                    item.style.display ='none';
                    item.classList.add('animated', 'fadeIn');
                })                

                btnPress = true;

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            })
        })

        close.addEventListener('click', ()=>{
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
            window.forEach(item=>{
                item.style.display ='none';
            })
        })

        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.style.display ='none';
                document.body.style.overflow ='';
                document.body.style.marginRight = '0px';
                window.forEach(item=>{
                    item.style.display ='none';
                })
            }
        })       
    }
   function showModalByTime (selector, time){
        setTimeout(()=>{

            let display;

            document.querySelectorAll('[data-modal]').forEach(item=>{
                if(getComputedStyle(item).display !=='none'){
                    display = 'block';
                }
            })            

            if(!display){
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }      

        }, time)
   }
  
   function calcScroll(){
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        return scrollWidth;
   }

   function openByScroll(selector){
        window.addEventListener('scroll', ()=>{
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            if(!btnPress && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)){
                document.querySelector(selector).click();
            }
        })
    }


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close' );
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close' );
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close',  true );
    openByScroll('.fixed-gift');
    
  
    showModalByTime('.popup-design', 200000);
}

export default modals;