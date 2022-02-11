const pictureSize = (imgSelector) =>{

    const blocks = document.querySelectorAll(imgSelector);

    function showBlock(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p=>{
            p.style.display = 'none';
        })
    }
    function hideBlock(block){
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p').forEach(p=>{
            p.style.display = 'block';
        })
    }

    blocks.forEach(block =>{
        block.addEventListener('mouseover', ()=>{
            showBlock(block);
        });
        block.addEventListener('mouseout', ()=>{
            hideBlock(block);
        });
    });
}

export default pictureSize;