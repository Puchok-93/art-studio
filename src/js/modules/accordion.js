const accordion = (triggers) => {

    const btns = document.querySelectorAll(triggers);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('active-content');

            if(this.classList.contains('active')) {
                this.nextElementSibling.style.maxHeight =  this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        })
    })


    // Вариант реализации на классах контента
    // const blocks = document.querySelectorAll(items);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style')
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // })
}

export default accordion;