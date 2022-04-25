window.addEventListener('DOMContentLoaded', () => {
  let pen = document.querySelector('.pencil'),
    text = document.querySelector('.add__text'),
    list = document.querySelector('.list');

  pen.addEventListener('click', () => {
    list.textContent = '';
  });

  text.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      list.innerHTML += `<li>- ${e.target.value}</li>`;
      text.value = '';
    }
  });
});
/* Попробовать также с textContent */
