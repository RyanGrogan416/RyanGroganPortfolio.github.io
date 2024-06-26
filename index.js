const content = {
  aboutMe: {
    className: "about-me",
  },
};

const showContent = (name) => {
  const readMore = document.querySelector(`.${name}-btn`);
  const closeBtn = document.querySelector(`.close-${name}-btn`);
  const content = document.querySelector(`.${name}-content`);
  readMore.style.display = "none";
  content.style.display = "flex";
  closeBtn.style.display = "flex";
};

const contentWalker = () => {
  for (let i in content) {
    console.log(content[i]);
    document
      .querySelector(`.${content[i].className}-btn`)
      .addEventListener("click", () => {
        showContent(content[i].className);
      });
  }
};

contentWalker();
