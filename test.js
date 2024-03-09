
const chatBtn = document.querySelector("#chatbot-btn");
const chatContainer = document.querySelector(".chatbot-container");
const closeBtn = document.querySelector("#close-btn");
const chatBox = document.querySelector(".chatbox");


const data = {
  chatinit: {
  title: ["Hello 😀", "I am Barbara Chatbot", "I can answer questions about Barbara's work","How can I help you?"],
  options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"]
},
  one: {
    title: ["Hello", "Thanks for saying hi", "I hope you enjoyed looking at my work","Can i help you with anything else?"],
   options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"],
    url: {}
 },

  two: {
    title: ["For a quick response, try to contact me via Linkedin or send me an email","You can find my links here:","", "Or you can contact me via the contact form"],
    options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"],
    url: {}

 },
  three: {
    title: ["Sorry, I'm not a tax consultant anymore","Now, I'm a dev 😎" ],
   options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"],
     url: {}
 },
 four: {
    title: ["You can download it from the homepage", "Do not hesitate to reach me out!", "I will be happy to chat with you!"],
     options: ["Just saying hello", "How can I reach out to you?", "I need a tax advice", "I want to see your resume"],
     url: {

    }
 },
}

chatBtn.addEventListener("click", (event) => {
  chatContainer.style.display = "flex";
  handleChat();
});


closeBtn.addEventListener("click", (event) => {
  chatContainer.style.display = "none";
});

const Scroll = () =>{
  chatBox.scrollTop = chatBox.scrollHeight
}


const handleChat = () => {
  const titles = data.chatinit.title;
  titles.forEach((title) => {
  const element = document.createElement("p");
  element.innerText = `${title}`;
  element.classList.add("message-chatbot");
  chatBox.insertAdjacentElement("beforeend", element);
  Scroll()
  })
  showOptions()
}

const appendMessage = () => {
  const element = document.createElement("p");
  element.innerText = `${t}`;
  element.classList.add("message-chatbot");
  chatBox.insertAdjacentElement("beforeend", element)
}

const showOptions= () => {
  const options = data.chatinit.options
  options.forEach((d) => {
    const element = document.createElement("p");
    element.innerText = `${d}`;
    element.classList.add("answers-chatbot");
    chatBox.insertAdjacentElement("beforeend", element);
    Scroll()
  });

  const answers = document.querySelectorAll(".answers-chatbot");
  console.log(answers)

  answers.forEach((answer) => {
    answer.addEventListener("click", (event) => {
      console.log(answer)
      if (answer.innerText.includes("hello")) {
        const titlesOne = data.one.title
        titlesOne.forEach((t) => {

          const element = document.createElement("p");
          element.innerText = `${t}`;
          element.classList.add("message-chatbot");
          chatBox.insertAdjacentElement("beforeend", element)
          Scroll()
        });

      } else if (answer.innerText.includes("reach")) {
        const titlesTwo = data.two.title
        titlesTwo.forEach((t) => {
          const element = document.createElement("p");
          element.innerText = `${t}`;
          element.classList.add("message-chatbot");
          chatBox.insertAdjacentElement("beforeend", element)
          Scroll()
       })
      } else if (answer.innerText.includes("advice")) {
        const titlesThree = data.three.title
        titlesThree.forEach((t) => {
          const element = document.createElement("p");
          element.innerText = `${t}`;
          element.classList.add("message-chatbot");
          chatBox.insertAdjacentElement("beforeend", element)
          Scroll()
      })
      } else if (answer.innerText.includes("resume")) {
        const titlesFour = data.four.title
        titlesFour.forEach((t) => {
          const element = document.createElement("p");
          element.innerText = `${t}`;
          element.classList.add("message-chatbot");
          chatBox.insertAdjacentElement("beforeend", element)
          Scroll()
      })
      };
      showOptionsAgain()
    });
  })
}

const showOptionsAgain = () => {
  const options = data.chatinit.options
  options.forEach((d) => {
    const element = document.createElement("p");
    element.innerText = `${d}`;
    element.classList.add("answers-chatbot");
    chatBox.insertAdjacentElement("beforeend", element);
    Scroll()
  });
}

const refreshBtn = document.querySelector("#refresh-btn")
refreshBtn.addEventListener("click", (event) => {
  const elements = document.querySelectorAll(".answers-chatbot, .message-chatbot");
  elements.forEach((element) => {
    console.log(element)
    element.remove();
  });
  handleChat();
})
