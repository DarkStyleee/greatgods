const formEmail = document.getElementById("form-email");
const sendResult = document.getElementById("info");
const formBtn = document.getElementById("form-btn");
const formBtnMain = document.getElementById("form-btn-wrapper");
const email = document.getElementById("email");

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }

  sendResult.innerHTML =
    '<p style="font-size: 1rem; color: #ff7878; text-align: center;">Неправильный электронный адрес!</p>';
  return false;
};

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const valid = validateEmail(email.value);

  if (valid) {
    sendResult.innerHTML =
      '<p style="font-size: 1.25rem; color: #8ff88f; text-align: center;">Ваш электронный адрес успешно сохранен!</p>';

    formBtnMain.remove();
    email.remove();
  }
});

const chest = document.getElementById("chest");
const reward_html = document.getElementById("reward");

chest.addEventListener("click", (e) => {
  const elem = e.currentTarget;
  if (!elem.classList.contains("prepare")) {
    elem.classList.add("prepare");

    setTimeout(() => {
      elem.classList.add("opening");
    }, 1000);

    setTimeout(() => {
      elem.classList.add("opened");
    }, 2000);

    setTimeout(() => {
      chest.style.display = "none";
      formEmail.style.display = "flex";
      getReward();
    }, 2500);
  }
});

const itemsList = [
  {
    id: 1,
    name: "Золото",
    count: 500,
  },
  {
    id: 2,
    name: "Осколки",
    count: 50,
  },
  {
    id: 3,
    name: "Рунный камень ветра",
    count: 1,
  },
  {
    id: 4,
    name: "Рулон прочной ткани",
    count: 1,
  },
  {
    id: 5,
    name: "Часть карты сокровищ",
    count: 1,
  },
  {
    id: 6,
    name: "Магические кристаллы воды",
    count: 75,
  },
  {
    id: 7,
    name: "Магические кристаллы",
    count: 150,
  },
  {
    id: 8,
    name: "Прочная шкура",
    count: 2,
  },
  {
    id: 9,
    name: "Кристаллы огня",
    count: 15,
  },
  {
    id: 10,
    name: "Элексир восстановления",
    count: 2,
  },
];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getReward = () => {
  let getID = randomInteger(1, itemsList.length);
  const reward = itemsList.find((el) => el.id === getID);
  reward_html.innerHTML = "";
  reward_html.insertAdjacentHTML(
    "afterbegin",
    `
    <p> Вы выиграли: <span class="reward_name">${reward.name}</span> <span class="reward_count">x${reward.count}</span></p>
    <div class="reward-img">
      <img style="width: 100%;" src='./img/chest/reward/${reward.id}.png' />
    </div>
  `
  );
};
