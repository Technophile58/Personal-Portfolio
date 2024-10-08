const div = document.querySelector(".text");
const text = "I'm Tushar";

function textTypingeffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = " ";
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        setTimeout(() => {
            element.textContent = " ";
            textTypingeffect(element, text); // Restart typing effect
        }, 2000); // Adjust the delay before restarting typing
        return;
    }

    setTimeout(() => textTypingeffect(element, text, i + 1), 90);
}

textTypingeffect(div, text);

const div2 = document.querySelector(".text1");
const text1 = "A learner & Web developer";

function textTypingeffect2(element, text, i = 0) {
    if (i === 0) {
        element.textContent = " ";
    }

    element.textContent += text[i];

    if (i === text.length - 1) {
        setTimeout(() => {
            element.textContent = " ";
            textTypingeffect2(element, text); // Restart typing effect
        }, 2000); // Adjust the delay before restarting typing
        return;
    }

    setTimeout(() => textTypingeffect2(element, text, i + 1), 90);
}

textTypingeffect2(div2, text1);
