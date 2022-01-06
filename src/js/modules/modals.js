function modals() {
    function bindModal(triggerSelector, modalSelector, closeSelector, overlayClose) {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const closeBtn = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none';
                })

                modal.style.display = 'block';
            });
        });
    }
}

export default modals;