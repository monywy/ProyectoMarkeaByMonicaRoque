(function(){
    
    const sliders = [...document.querySelectorAll('.logros__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentlogros = document.querySelector('.logros__body--show').dataset.id;
        value = Number(currentlogros);
        value+= add;


        sliders[Number(currentlogros)-1].classList.remove('logros__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('logros__body--show');

    }

})();