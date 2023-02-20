const eventDesc = document.querySelector('.event-desc');



if (eventDesc) {
  const eventDescMain = eventDesc.querySelector('.event-desc__main');
  const showMoreBtn = eventDesc.querySelector('.show-more-btn');

  showMoreBtn.addEventListener('click', () => {
    eventDescMain.classList.add('js-show-more');
    showMoreBtn.hidden = true;
  })
}

