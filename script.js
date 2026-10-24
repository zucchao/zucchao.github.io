const filterButtons = document.querySelectorAll('[data-filter]');
const photos = document.querySelectorAll('.photo');
const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const dialogTitle = dialog.querySelector('p');

filterButtons.forEach((button) => button.addEventListener('click', () => {
  filterButtons.forEach((item) => item.classList.toggle('active', item === button));
  photos.forEach((photo) => photo.classList.toggle('is-hidden', button.dataset.filter !== 'all' && photo.dataset.category !== button.dataset.filter));
}));

document.querySelectorAll('.photo button').forEach((button) => button.addEventListener('click', () => {
  dialogImage.src = button.dataset.image;
  dialogImage.alt = button.querySelector('img').alt;
  dialogTitle.textContent = button.dataset.title;
  dialog.showModal();
}));

dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
