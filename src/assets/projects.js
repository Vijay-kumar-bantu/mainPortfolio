import todo from "./images/todoapp.png";
import budget from "./images/budget.png";
import blog from "./images/blog.png";
import portfolio from "./images/basicportfolio.png";
import tictactoe from "./images/tictactoe.png";
import chat_app from "./images/chat_app.png";

const data = [
  {
    name: "Real time chat app",
    image: chat_app,
    desc: "A basic chat app made with React and socket.io",
    code: "https://github.com/Vijay-kumar-bantu/chapt_app",
    deploy: false,
    web: "",
  },
  {
    name: "Tic tac toe",
    image: tictactoe,
    desc: "Tic tac toe game desinged with React js and react-router",
    code: "https://github.com/Vijay-kumar-bantu/tic-tac-toe",
    deploy: true,
    web: "https://tic-tac-toe-psi-three-24.vercel.app/",
  },
  {
    name: "Todo app list",
    image: todo,
    desc: "Basic Todo app list program where frontend is designed with React js and Backend with Node js,Express js & MongoDB",
    code: "https://github.com/Vijay-kumar-bantu/Todo-app-list",
    deploy: false,
    web: "",
  },
  {
    name: "Budget calculator",
    image: budget,
    desc: "Budget calculator is fronted application where it is entirely made with React js,Redux stagemanagement and React Hook Forms.",
    code: "https://github.com/Vijay-kumar-bantu/Budget-calculator",
    deploy: true,
    web: "https://budget-calculator-lake.vercel.app/",
  },
  {
    name: "Blog website",
    image: blog,
    desc: "A blog website which is frontend project where I have used React js, tailwind and vite.",
    code: "https://github.com/Vijay-kumar-bantu/MyBlog-website",
    deploy: true,
    web: "https://my-blog-app-sepia.vercel.app/",
  },
  {
    name: "Basic portfolio",
    image: portfolio,
    desc: "Basic portfolio website where I have desinged with only Html,css and deployed in github pages",
    code: "https://github.com/Vijay-kumar-bantu/portfolio",
    deploy: true,
    web: "https://vijay-kumar-bantu.github.io/portfolio/",
  },
];

export default data;
