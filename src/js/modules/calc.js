const calc = (size, material, options, promocode, result) =>{

    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let summ = 0;
    const calcFunc = () => {
        summ = Math.round( (+sizeBlock.value)*(+materialBlock.value) + (+optionsBlock.value));

        if(sizeBlock.value == '' || materialBlock.value == ''){
            resultBlock.textContent = 'Введите все значения';
        }else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(summ * 0.7);
        }else{
            resultBlock.textContent = summ ;
        }
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
}

export default calc;