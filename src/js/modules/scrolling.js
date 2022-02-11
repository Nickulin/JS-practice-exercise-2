const scrolling = (upSelector) => {
    const upElem =  document.querySelector(upSelector);

   window.addEventListener('scroll', ()=>{
       if(document.documentElement.scrollTop > 1650){
           upElem.classList.add('animated','fadeIn');
           upElem.classList.remove('fadeOut');
       }else{
           upElem.classList.add('fadeOut');
           upElem.classList.remove('fadeIn');
       }
   });

   let links = document.querySelectorAll('[href^="#"]'),
       speed = 0.5;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let heightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {

                if(start === null){
                    start = time;
                }

                let progress = time - start,
                r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock)); // r - число px куда надо двигаться
                document.documentElement.scrollTo(0, r); 

                if(r != heightTop + toBlock){
                    requestAnimationFrame(step);
                }else{
                    location.hash = hash;
                }
            }
        })
    })

//    const smoothScroll = (from, to, hash) =>{
//         let timeInterval = 1,
//             prevScrollTop,
//             speed;

//         if(to < from){
//             speed = -30;
//         }else{
//             speed = 30;
//         }

//         let move = setInterval(function(){
//             let scrollTop = Math.round(body.scrollTop || element.scrollTop);

//             if(
//                 prevScrollTop === scrollTop ||
//                 (to < from && scrollTop <=to) ||
//                 (to > from && scrollTop >= to) 
//             ){
//                 clearInterval(move);

//             }else{
//                 body.scrollTop +=speed;
//                 element.scrollTop +=speed;
//                 prevScrollTop = scrollTop;
//             }
//         }, timeInterval);
//    }

//    calcScroll();
    
}

export default scrolling;