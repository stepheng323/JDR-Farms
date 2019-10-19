const hamburger = document.querySelector('.hamburger');
const card = document.querySelector('.card');

const openSlideMenu = () => {
  document.getElementById('side-menu').style.width = '250px';
  // document.querySelector('.main-container').style.marginRight = '250px';
  hamburger.style.display = 'none';
};

const closeSlideMenu = () => {
  document.getElementById('side-menu').style.width = '0';
  // document.querySelector('.main-container').style.marginRight = '0';
  hamburger.style.display = 'unset';
};

const seeProduce = () => {
  card.scrollIntoView({
    behavior: 'smooth'
  });
};
