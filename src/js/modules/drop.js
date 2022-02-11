import { postData } from "../services/requests";

const drop = () => {
    // drag *
    // dragend *
    // dragenter - объект над dropArea
    // dragexit *
    // dragleave - объект за пределами dropArea
    // dragover - объект завистает над dropArea
    // dragstart *
    // drop - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['drop', 'dragover', 'dragleave', 'dragenter'].forEach(eventName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(eventName, eventPreventDefaults , false);
        })
    })

    function eventPreventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, .7)';
    }
    function unhighlight(item){
        item.closest('.file_upload').style.border = 'none';
        if(item.closest('.calc_form')){
            item.closest('.file_upload').style.backgroundColor = '#fff';
        }else if(item.closest('.file_upload_small')){
            item.closest('.file_upload').style.backgroundColor = '#F7E7E6';
        }else{
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName =>{
        fileInputs.forEach(input =>{
            input.addEventListener(eventName, ()=> highlight(input), false);
        })
    });

    ['dragleave', 'drop'].forEach( eventName => {
        fileInputs.forEach( input => {
            input.addEventListener(eventName, ()=> unhighlight(input), false);
        })
    });

    fileInputs.forEach(input =>{
        input.addEventListener('drop', (e)=>{
            input.files = e.dataTransfer.files;

            let dots;
            const arr = input.files[0].name.split('.');
            arr[0].length > 5 ? dots ='...' : dots ='.';
            const name = arr[0].substring(0,6) + dots + arr[1];

            input.previousElementSibling.textContent = name;

             if(input.closest('.main')){

                let formData = new FormData();

                formData.append('file', input.files[0]);

                postData('assets/server.php', formData)
                .then(res=>{
                    console.log(res);               
                })
                .catch(()=>{
                    console.log('error');
                })
             }
        });
    });
}

export default drop;