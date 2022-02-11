import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {

    const btn = document.querySelector(trigger);

    btn.addEventListener('click', ()=>{
        getResource(' http://localhost:3000/styles')
            .then(res => createCard(res))
            .catch(Error);

        btn.style.display ='none';
    })

    const createCard = (response) => {

        response.forEach(item =>{
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `<div class='styles-block'>
                                <img src=${item.src} alt='style'>
                                <h4>${item.title}</h4>
                                <a href=${item.link}>Подробнее</a>
                            </div>`;
                            document.querySelector(wrapper).appendChild(card);
        })

        
    }
}


export default showMoreStyles;