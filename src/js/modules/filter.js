const filter = () =>{

    const menu = document.querySelector('.portfolio-menu'),
          love = menu.querySelectorAll('li'),
          allBtn = menu.querySelector('.all'),
          loversBtn = menu.querySelector('.lovers'),
          wrapper = document.querySelector('.portfolio-wrapper'), 
          allMark = wrapper.querySelectorAll('.all'),
          loversMark = wrapper.querySelectorAll('.lovers');

    const tipeFilter = (markType) =>{
        allMark.forEach (item=> {
            item.style.display ='none';
            item.classList.remove('animated', 'fadeIn');
        });

        markType.forEach(item =>{
            item.style.display ='block';
            item.classList.add('animated', 'fadeIn');
        });
    }

    allBtn.addEventListener('click', ()=>{
        tipeFilter(allMark);
    });

    loversBtn.addEventListener('click', ()=>{
        tipeFilter(loversMark);
    });

    menu.addEventListener('click', (e)=>{
        let target = e.target;

        if(target && target.tagName == 'LI'){
            love.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    })
    
} 

export default filter;