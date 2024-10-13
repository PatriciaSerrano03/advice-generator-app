// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const adviceIdElement = document.getElementById(`advice-id`);
const adviceTextElement = document.getElementById(`advice-text`);
const ButtonElement = document.getElementById(`card-button`);

const printAdvice = (id, advice) => {
  adviceIdElement.textContent = `ADVICE #${id}`;
  adviceTextElement.textContent = advice;
};

const answerAdvice = async () => {
  const response = await fetch(`https://api.adviceslip.com/advice`);
  const data = await response.json();
  const id = data.slip.id;
  const advice = data.slip.advice;
  printAdvice(id, advice);
};

answerAdvice();

ButtonElement.addEventListener(`click`, answerAdvice);
