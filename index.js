const content = {
  aboutMe : {
    className : 'about-me',
  },

  centralWashington : {
    className : 'central-washington',
  },

  universityOfWashingtonTacoma : {
    className : 'uwt',
  },

  codecademy : {
    className : 'codecademy',
  },

}

const showContent = (name) => {
  const readMore = document.querySelector(`.${name}-btn`);
  const closeBtn = document.querySelector(`.close-${name}-btn`);
  const content = document.querySelector(`.${name}-content`);
  readMore.style.display = 'none';
  content.style.display = 'flex';
  closeBtn.style.display = 'flex';
}

const hideContent = (name) => {
  const readMore = document.querySelector(`.${name}-btn`);
  const closeBtn = document.querySelector(`.close-${name}-btn`);
  const content = document.querySelector(`.${name}-content`);
  closeBtn.style.display = 'none';
  content.style.display = 'none';
  readMore.style.display = 'flex';
}

const contentWalker = () => {
    for (let i in content) {
      document.querySelector(`.${content[i].className}-btn`)
        .addEventListener('click', 
          () => {
              showContent(content[i].className)
          });
      document.querySelector(`.close-${content[i].className}-btn`)
        .addEventListener("click", 
          () => {
              hideContent(content[i].className)
          });
    }
}

contentWalker();