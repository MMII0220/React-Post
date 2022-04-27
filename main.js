window.addEventListener('DOMContentLoaded', () => {
  let pen = document.querySelector('.pencil'),
    text = document.querySelector('.add__text'),
    list = document.querySelector('.list'),
    add = document.querySelector('.add__mobile'),
    i = 0;

  pen.addEventListener('click', () => {
    list.textContent = '';
  });

  text.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      const e = event.target;
      if (e.value.trim()) {
        list.innerHTML += `<li class="show">- ${e.value}</li>`;
        text.value = '';
      }
    }
  });

  add.addEventListener('click', (event) => {
    if (text.value.trim()) {
      list.innerHTML += `<li class="show">- ${text.value}</li>`;
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
