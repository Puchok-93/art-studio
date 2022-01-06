function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector, overlayClose) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                })

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        closeBtn.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal && overlayClose) {
                windows.forEach(window => {
                    window.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }

                if (!display) {
                    document.querySelector(selector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 5000)
};

export default modals;