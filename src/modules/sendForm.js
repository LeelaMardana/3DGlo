const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  statusBlock.classList.add('status');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка!';
  const successText =
    'Данные успешно отправлены! Наш менеджер с вами свяжется.';

  const validate = formElements => {
    const errorDescription = document.querySelectorAll('.error-description');
    errorDescription.forEach(item => item.remove());

    let error = false;

    const CreateNewError = error => {
      const newError = document.createElement('span');
      newError.classList.add('error-description');
      newError.textContent = error;
      form.append(newError);
    };

    formElements.forEach(input => {
      input.classList.remove('reg-error');

      if (input.value.trim() === '') {
        error = true;
        CreateNewError(`Поле «${input.placeholder}» не может быть пустым*`);
        input.classList.add('reg-error');
      }
    });

    // Находим первую ошибку и даем фокус именно ей
    const has = form.querySelector('.reg-error');
    if (has) {
      has.focus();
    }

    return error;
  };

  // Отправка через multipart/form-data
  // const sendData = data => {
  //   return fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: data,
  //     headers: {
  //       'Content-Type': 'multipart/form-data', // работает если у инпута есть атрибуут name
  //     },
  //   }).then(res => res.json());
  // };

  // form.addEventListener('submit', e => {
  //   e.preventDefault();

  //   const formData = new FormData(form);
  //   sendData(formData);
  // });

  // Отправка через application/json
  const sendData = data => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json', // работает если у инпута есть атрибут name
      },
    }).then(res => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    // Формируем обьект для отправки
    const formData = new FormData(form);
    const formBody = {};
    formData.forEach((value, key) => (formBody[key] = value));

    // Формируем доп данные для обьекта (если нужны)
    someElem.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[element.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[element.id] = element.value;
      }
    });

    // Проверка валидации
    if (validate(formElements)) return (statusBlock.textContent = errorText);

    // Отправка на сервер
    sendData(formBody)
      .then(res => {
        formElements.forEach(input => (input.value = ''));
        statusBlock.textContent = successText;
        console.log(res);
      })
      .catch(
        error => (statusBlock.textContent = errorText + ' Сервер не доступен.')
      );
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitForm();
  });
};

export { sendForm };
