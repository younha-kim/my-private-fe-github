const intervalID = [];

const showAction = (idx) => {
  const imgs = document.querySelectorAll(".imgs__container img");
  if (imgs.length > idx && idx >= 0) {
    for (let i = 0; i < imgs.length; i += 1) {
      if (i === idx) {
        imgs[i].style.display = "inline-block";
      } else {
        imgs[i].style.display = "none";
      }
    }
  }
};

const repeatAction = (idx) => {
  let intervalIdx = idx;
  let id;
  id = setInterval(() => {
    if (intervalIdx === idx - 1) {
      clearInterval(id);
    }
    if (intervalIdx >= idx) {
      intervalIdx = 0;
    } else {
      intervalIdx += 1;
    }
    showAction(intervalIdx);
  }, 300);
  intervalID.push(id);
};

const stopInterval = (id) => {
  clearInterval(id);
}

const actions = document.querySelectorAll(".actions__container > button");

for (let i = 0; i < actions.length; i += 1) {
  actions[i].addEventListener("click", () => {
    if (i === 3) {
      repeatAction(i);
    } else {
      intervalID.forEach(id => clearInterval(id));
      showAction(i);
    }
  });
}

window.addEventListener("load", () => {
  showAction(0);
});
