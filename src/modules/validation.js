const validation = () => {
  const calcInputs = document.querySelectorAll('.calc-block > input');
  const textInputs = document.querySelectorAll('[name=user_name], .mess');
  const emailInputs = document.querySelectorAll('[type=email]');
  const telInputs = document.querySelectorAll('[type=tel]');

  const typeNumber = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/\D+/, '');
    });
  };

  const typeCyrillic = input => {
    input.addEventListener('blur', e => {
      e.target.value = e.target.value
        .replace(/\s+/g, ' ') // заменить 1+ пробелов на 1
        .replace(/\-+/g, '-') // заменить 1+ дефизов на 1
        .replace(/^\s+|\s+$/g, '') // убрать все пробелы в начале и конце
        .replace(/^\-+|\-+$/g, '') // убрать все дефизы в начале и конце
        .replace(/[^А-Яа-я\s-]/g, '') // убрать все символы за исключением:
        .replace(/(^|\s)\S/g, a => {
          return a.toUpperCase();
        });
    });
  };

  const typeEmail = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\w\@\-\.\!\~\*\']/g, '');
    });
  };
  const typeTel = input => {
    input.addEventListener('input', e => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-]/g, '');
    });
  };

  calcInputs.forEach(item => {
    typeNumber(item);
  });

  textInputs.forEach(item => {
    typeCyrillic(item);
  });

  emailInputs.forEach(item => {
    typeEmail(item);
  });

  telInputs.forEach(item => {
    typeTel(item);
  });
};

export { validation };
