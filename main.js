window.addEventListener('DOMContentLoaded', () => {
  let pen = document.querySelector('.pencil'),
    text = document.querySelector('.add__text'),
    list = document.querySelector('.list'),
    i = 0;

  pen.addEventListener('click', () => {
    list.textContent = '';
  });

  text.addEventListener('keydown', (e) => {

    if (e.code === 'Enter')
      if (e.target.value) {
        list.innerHTML += `<li>- ${e.target.value}</li>`;
        text.value = '';
      }
    
  });

  list.addEventListener('click', (event) => {
    let e = event.target;

    if (i % 2 == 0) {
      i++;
      e.style.cssText = 'text-decoration: line-through;';
    } else {
      i++;
      e.style.cssText = 'text-decoration: none;';
    }
  });
});
