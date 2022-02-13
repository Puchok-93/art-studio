const forms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const upload = document.querySelectorAll('[name=upload]');

    const message = {
        loading: 'Загрузка...',
        success: 'Отправлено',
        error: 'Ошибка',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    // Адресв серверов, куда будут отправлятся данные

    const path = {
        designer: 'assets/server.php',
        quation: 'assets/quation.php',
    };

    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
            upload.forEach(item => {
                item.previousElementSibling.textContent = 'Файл не выбран';
            })
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {

            let dots;
            const arr = item.files[0].name.split('.');
           arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    //Перебираем все формы и на каждую навешиваем обработчик события 'submit'(Отправка)
    //Указываем в функции event и сбрасываем действие по умолчанию
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Создаем новый блок с текстом сообщения. Создается в момент отправки формы
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            // Помещаем созданный блок в конец формы, которую перебираем
            form.parentNode.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);


            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            // Собираем все данные из формы с помощью конструктора. ОБъект FormData найдет все инпуты внутри формы и соберет их в структуру и поместит в переменную 
            const formData = new FormData(form);


            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.quation;

            // Отправляем данные на сервер по адресу
            // И обрабатываем промис
            postData(api, formData)
            .then(result => {
                console.log(result);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
            })
            .catch(() => {
                console.log(result);
                statusImg.setAttribute('src', message.fail);
                textMessage.textContent = message.error;
            }).finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                    form.style.display = 'block';
                    form.classList.remove('fadeOutUp');
                    form.classList.add('fadeInUp');
                }, 150000);
            });
        });
    });
}

export default forms;
