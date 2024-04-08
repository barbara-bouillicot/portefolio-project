// navbar

const navLinks = document.querySelector(".nav-links")
const navLinksItems = document.querySelectorAll(".nav-links-item")

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 0) {
    navLinks.classList.add("filled")
    navLinksItems.forEach((item) =>
      item.classList.add("white")
    );
  } else {
    navLinks.classList.remove("filled")
    navLinksItems.forEach((item) =>
      item.classList.remove("white")
    );
  }
});

navLinksItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinksItems.forEach((link) => {
      link.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// carousel

document.querySelectorAll('.project-card').forEach((card) => {
  const slidesContainer = card.querySelector('.slides-container');
  const slides = card.querySelectorAll('.slide');
  const prevButton = card.querySelector('.slide-arrow.prev');
  const nextButton = card.querySelector('.slide-arrow.next');
  const slideWidth = slides[0].clientWidth;

  let currentSlideIndex = 0;

  const updateSlidesContainer = () => {
    slidesContainer.scrollLeft = currentSlideIndex * slideWidth;
  };

  prevButton.addEventListener('click', () => {
    currentSlideIndex = Math.max(0, currentSlideIndex - 1);
    updateSlidesContainer();
  });

  nextButton.addEventListener('click', () => {
    currentSlideIndex = Math.min(slides.length - 1, currentSlideIndex + 1);
    updateSlidesContainer();
  });
});

// switch toggle for dark mode
const moonBtn = document.querySelector("#btn-moon");

moonBtn.addEventListener("click", (event) => {
  document.body.classList.toggle("dark-mode");
});

// chatbot
const chatBtn = document.querySelector("#chatbot-btn");
const chatContainer = document.querySelector(".chatbot-container");
const closeBtn = document.querySelector("#close-btn");
const chatBox = document.querySelector(".chatbox");

closeBtn.addEventListener("click", () => {
  chatContainer.style.display = "none";
});

const data = {
  chatinit: {
    title: ["Hello 😀", "This is my chatbot!", "I can answer questions about my work", "How can I help you?"],
    options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"]
  },
  options: {
    "Just saying hello": ["Hello", "Thanks for saying hi", "I hope you enjoyed looking at my work", "Can I help you with anything else?"],
    "How can I reach out to you?": ["For a quick response, try to contact me via Linkedin or send me an email", "You can find my links on the homepage", "Or you can also contact me via the contact form"],
    "I need a tax advice": ["Sorry, I'm not a tax consultant anymore", "Now, I'm a dev 😎"],
    "I want to see your resume": ["You can download it from the homepage", "Do not hesitate to reach me out!", "I will be happy to chat with you!"]
  }
};


const appendMessage = (message) => {
  const element = document.createElement("p");
  element.innerText = message;
  element.classList.add("message-chatbot");
  chatBox.appendChild(element);
  Scroll();
}

const appendResponse = (message) => {
  const element = document.createElement("p");
  element.innerText = message;
  element.classList.add("response");
  chatBox.appendChild(element);
  Scroll();
}

const showOptions = () => {
  const options = data.chatinit.options;
  options.forEach(option => {
    const element = document.createElement("p");
    element.innerText = option;
    element.classList.add("answers-chatbot");
    chatBox.appendChild(element);
    Scroll()
  });
}


const handleResponse = (option) => {
  const responses = data.options[option];
  let delay = 500
  responses.forEach(response => {
    delay += 500
    setTimeout(
    appendMessage, delay, response);
  });
  setTimeout(
  showOptionsAgain,4200)
  Scroll()
}

const showOptionsAgain = () => {
  const options = data.chatinit.options;
  options.forEach(option => {
    const element = document.createElement("p");
    element.innerText = option;
    element.classList.add("answers-chatbot");
    chatBox.appendChild(element);
  });
  Scroll()
}

const Scroll = () => {
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatBtn.addEventListener("click", () => {
  chatContainer.style.display = "flex";
  setTimeout(
  handleChatInit,1000)
});



const handleChatInit = () => {
  const titles = data.chatinit.title;
  let delay = 500
  titles.forEach(title => {
    delay += 500
    setTimeout(
    appendMessage, delay , title);
    console.log(delay)
  });
  setTimeout(
  showOptions,4000)
};

chatBox.addEventListener("click", event => {
  if (event.target.classList.contains("answers-chatbot")) {
    const option = event.target.innerText;
    const elements = document.querySelectorAll(".answers-chatbot")
    elements.forEach(element => {
         element.remove();
    });

    appendResponse(option);
    handleResponse(option);
  }
});

const refreshBtn = document.querySelector("#refresh-btn");
refreshBtn.addEventListener("click", () => {
  const elements = document.querySelectorAll(".answers-chatbot, .message-chatbot, .response");
  elements.forEach(element => {
    element.remove();
  });
  handleChatInit();
});


// typing effect

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const words = ["Barbara", "a Full Stack Dev"];
const el = document.querySelector('.typing-effect');

let sleepTime = 100;

let currentWordIndex = 0;

const writeLoop = async () => {
  while (true) {
    let currentWord = words[currentWordIndex];

    for (let i = 0; i < currentWord.length; i++) {
      el.innerText = currentWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = currentWord.length; i > 0; i--) {
      el.innerText = currentWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (currentWordIndex === words.length - 1) {
      currentWordIndex = 0;
    } else {
      currentWordIndex++;
    }
  }
};

writeLoop();

// background timeline display

const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const addParagraph = btn.nextElementSibling;

    if (addParagraph.style.display === "none" || addParagraph.style.display === "") {
      addParagraph.style.display = "block";
    } else {
      addParagraph.style.display = "none";
    }
  });
});


// const backgroundContainer = document.querySelector(".background-container");

//const scrollTimeline = () => {
 // backgroundContainer.scrollTop = backgroundContainer.scrollHeight;
//}


// contact form

const contactForm = document.querySelector(".form");
const submitBtn = document.querySelector(".btn-form");
const nameInput = document.querySelector("#fname");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "BebmJfcwHyeYms6UU";
const serviceID = "service_0dya1r3";
const templateID = "template_5n08i9b";

emailjs.init(publicKey);

const validateform = () =>{

  if (nameInput.value==null || nameInput.value==""){
    alert("Name can't be blank");
    return false;
  }else if(emailInput.value==null || emailInput.value==""){
    alert("Email can't be blank");
    return false;
  }else if(messageInput.value==null || messageInput.value==""){
    alert("Message can't be blank");
    return false;
    }
  }

contactForm.addEventListener("submit", (event) => {
  validateform();
  console.log("test")
  event.preventDefault();
  submitBtn.value = "Just a moment...";
  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  }

  emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
      submitBtn.value = "Message sent!";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value ="";
    },(error) => {
      console.log(error);
      submitBtn.innerText = "Something went wrong!";
    });
});
