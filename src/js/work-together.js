const modal = document.querySelector('.work-t-modal-container');
const form = document.querySelector('.work-t-form');
const modalWindow = document.querySelector('.work-t-modal-container');
const inputBorderColor = document.querySelector('.work-t-input-email');
//request//
const formSubmit = event => {
  event.preventDefault();

  const request = 'https://portfolio-js.b.goit.study/api/requests';

  const addUser = user => {
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return fetch(`${request}`, fetchOptions).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };

  addUser({
    email: 'client@gmail.com', //`${formData.email}`
    comment: 'comments', //`${formData.comments}`
  })
    .then(user => {
      modal.classList.add('js-is-open');
      form.reset();
      console.log(user);
    })
    .catch(error => {
      inputBorderColor.classList.add('js-input-email');
      alert('Invalid Email');
      console.log(error);
    });

  const formData = {
    email: form.elements.user_email.value.trim(),
    comments: form.elements.user_comments.value.trim(),
  };
  console.log(formData);
};

//closeModal//
const onCloseModalBtn = event => {
  const addCloseClassOnBtn = modalWindow.classList.add('disabled');
  return;
};

const onCloseModalEscape = event => {
  const addCloseClassonEsc = modalWindow.classList.add('disabled');
};

// const onCloseModalBackdrop

form.addEventListener('submit', formSubmit);
modalWindow.addEventListener('click', onCloseModalBtn);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    onCloseModalEscape();
  }
});
