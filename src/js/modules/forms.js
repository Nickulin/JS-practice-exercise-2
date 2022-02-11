import { postData } from "../services/requests";

const forms = () =>{
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          textarea = document.querySelectorAll('[name=message]'),
          upload = document.querySelectorAll('[name="upload"]');

    const message = {
        success: 'success',
        loading: 'loading',
        failure: 'failure',
        ok: 'assets/img/ok.png',
        fail:'assets/img/ok.png',
        spinner: 'assets/img/spinner.gif'
    }
    
    const path = {
        disigner: 'assets/question.php',
        server: 'assets/server.php'
    }

    const clearInputs = () =>{
        input.forEach(item=>{
            item.value ='';
        });
        textarea.forEach(item=>{
            item.value ='';
        });
        upload.forEach(item=>{
            item.previousElementSibling.textContent='файл не выбран';
        })
    }

    upload.forEach(item=>{
        item.addEventListener('input', ()=>{
            let dots;
            let arr = input.files[0].name.split('.');
            arr[0].length > 6 ? dots ='...' : dots ='.';
            const name = arr[0].substring(0,6) + dots + arr[1];

            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.append(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                item.style.display='none';
            },400);

            let statusImg = document.createElement('img');
            statusImg.classList.add('animated', 'fadeInUp');
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            let api;

            item.closest('.popup-design') ? api = path.disigner : api = path.server;

            let formData = new FormData(item);

            postData(api, formData)
                .then(res=>{
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch( ()=>{
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display='block';
                        item.classList.add('fadeInUp');
                        item.classList.remove('fadeOutUp');
                    }, 5000);
                });
        });
    });


}

export default forms;