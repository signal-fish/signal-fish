const portfolios = [
  // {
  //   id: 1,
  //   title: "movie website",
  //   category: "mern stack",
  //   image: "assets/portfolio/mern-stack/admin-dashboard.png",
  //   webLink: "",
  //   sourceLink: "",
  // },
  {
    id: 2,
    title: "personal website",
    category: "react",
    image: "assets/portfolio/react/signal-fish.png",
    webLink: "https://signal-fish.gitee.io/signal-fish/",
    sourceLink: "https://github.com/signal-fish/signal-fish",
  },
  {
    id: "2-1",
    title: "admin dashboard",
    category: "react ui",
    image: "assets/portfolio/react/admin-dashboard.png",
    webLink: "https://signal-fish.gitee.io/admin-dashboard/",
    sourceLink: "https://github.com/signal-fish/admin-dashboard",
  },
  {
    id: "2-2",
    title: "fish shop",
    category: "react ui",
    image: "assets/portfolio/react/fish-shop.png",
    webLink: "https://signal-fish.gitee.io/fish-shop/",
    sourceLink: "https://github.com/signal-fish/fish-shop",
  },
  {
    id: "2-3",
    title: "dictionary",
    category: "react ui",
    image: "assets/portfolio/react/dictionary.png",
    webLink: "https://signal-fish.gitee.io/dictionary/",
    sourceLink: "https://github.com/signal-fish/dictionary",
  },
  {
    id: 3,
    title: "resume",
    category: "html/css/js",
    image: "assets/portfolio/html-css-js/resume.png",
    webLink: "https://signal-fish.gitee.io/resume/",
    sourceLink: "https://github.com/signal-fish/resume",
  },
  {
    id: 4,
    title: "corporate",
    category: "bootstrap",
    image: "assets/portfolio/bootstrap/corporate.png",
    webLink: "https://signal-fish.gitee.io/corporate/",
    sourceLink: "https://github.com/signal-fish/corporate",
  },
  {
    id: 5,
    title: "moon",
    category: "css animation",
    image: "assets/portfolio/css-animation/animated-moon.png",
    webLink: "https://signal-fish.gitee.io/animated-moon/",
    sourceLink: "https://github.com/signal-fish/animated-moon",
  },
  {
    id: "5-1",
    title: "tea cup",
    category: "css animation",
    image: "assets/portfolio/css-animation/animated-tea-cup.png",
    webLink: "https://signal-fish.gitee.io/animated-tea-cup/",
    sourceLink: "https://github.com/signal-fish/animated-tea-cup",
  },
  {
    id: "5-2",
    title: "clock",
    category: "css animation",
    image: "assets/portfolio/css-animation/clock.png",
    webLink: "https://signal-fish.gitee.io/clock/",
    sourceLink: "https://github.com/signal-fish/clock",
  },
  {
    id: 6,
    title: "forum",
    category: "material ui",
    image: "assets/portfolio/material-ui/forum.png",
    webLink: "https://signal-fish.gitee.io/forum/",
    sourceLink: "https://github.com/signal-fish/forum",
  },
  {
    id: 7,
    title: "profile page",
    category: "react/redux",
    image: "assets/portfolio/react-redux/profile-page.png",
    webLink: "https://signal-fish.gitee.io/profile-page/",
    sourceLink: "https://github.com/signal-fish/profile-page",
  },
  {
    id: 8,
    title: "tech",
    category: "ant design",
    image: "assets/portfolio/ant-design/tech.png",
    webLink: "https://signal-fish.gitee.io/tech/",
    sourceLink: "https://github.com/signal-fish/tech",
  },
  // {
  //   id: 9,
  //   title: "resume",
  //   category: "html/css/js",
  //   image: "assets/portfolio/html-css-js/resume.png",
  //   webLink: "https://signal-fish.gitee.io/resume/",
  //   sourceLink: "https://github.com/signal-fish/resume",
  // },
  {
    id: 118,
    title: "shining text",
    category: "css animation",
    image: "assets/portfolio/css-animation/shining-text.png",
    webLink: "https://signal-fish.gitee.io/shining-text/",
    sourceLink: "https://github.com/signal-fish/shining-text",
  },
  {
    id: 9,
    title: "birthday reminder",
    category: "react ui",
    image: "assets/portfolio/react/birthday-reminder.png",
    webLink: "https://signal-fish.gitee.io/birthday-reminder/",
    sourceLink: "https://github.com/signal-fish/birthday-reminder",
  },
  {
    id: 10,
    title: "loading",
    category: "css animation",
    image: "assets/portfolio/css-animation/loading.png",
    webLink: "https://signal-fish.gitee.io/loading/",
    sourceLink: "https://github.com/signal-fish/loading",
  },
  {
    id: 11,
    title: "tours",
    category: "react ui",
    image: "assets/portfolio/react/tours.png",
    webLink: "https://signal-fish.gitee.io/tours/",
    sourceLink: "https://github.com/signal-fish/tours",
  },
  {
    id: 12,
    title: "accordion",
    category: "react ui",
    image: "assets/portfolio/react/accordion.png",
    webLink: "https://signal-fish.gitee.io/accordion/",
    sourceLink: "https://github.com/signal-fish/accordion",
  },
  {
    id: 13,
    title: "menu",
    category: "react ui",
    image: "assets/portfolio/react/menu.png",
    webLink: "https://signal-fish.gitee.io/menu/",
    sourceLink: "https://github.com/signal-fish/menu",
  },
  {
    id: 14,
    title: "tabs",
    category: "react ui",
    image: "assets/portfolio/react/tabs.png",
    webLink: "https://signal-fish.gitee.io/tabs/",
    sourceLink: "https://github.com/signal-fish/tabs",
  },
  {
    id: 15,
    title: "slider",
    category: "react ui",
    image: "assets/portfolio/react/slider.png",
    webLink: "https://signal-fish.gitee.io/slider/",
    sourceLink: "https://github.com/signal-fish/slider",
  },
  {
    id: 16,
    title: "shopping list",
    category: "react ui",
    image: "assets/portfolio/react/shopping-list.png",
    webLink: "https://signal-fish.gitee.io/shopping-list/",
    sourceLink: "https://github.com/signal-fish/shopping-list",
  },
  {
    id: 17,
    title: "sidebar and modal",
    category: "react ui",
    image: "assets/portfolio/react/sidebar-modal.png",
    webLink: "https://signal-fish.gitee.io/sidebar-modal/",
    sourceLink: "https://github.com/signal-fish/sidebar-modal",
  },
  {
    id: 18,
    title: "navbar",
    category: "react ui",
    image: "assets/portfolio/react/navbar.png",
    webLink: "https://signal-fish.gitee.io/navbar/",
    sourceLink: "https://github.com/signal-fish/navbar",
  },
  {
    id: 19,
    title: "stripe",
    category: "react ui",
    image: "assets/portfolio/react/stripe.png",
    webLink: "https://signal-fish.gitee.io/stripe/",
    sourceLink: "https://github.com/signal-fish/stripe",
  },
  {
    id: 20,
    title: "cart",
    category: "react ui",
    image: "assets/portfolio/react/cart.png",
    webLink: "https://signal-fish.gitee.io/cart/",
    sourceLink: "https://github.com/signal-fish/cart",
  },
  {
    id: 21,
    title: "cocktails",
    category: "react ui",
    image: "assets/portfolio/react/cocktails.png",
    webLink: "https://signal-fish.gitee.io/cocktails/",
    sourceLink: "https://github.com/signal-fish/cocktails",
  },
  {
    id: 22,
    title: "markdown preview",
    category: "react ui",
    image: "assets/portfolio/react/markdown-preview.png",
    webLink: "https://signal-fish.gitee.io/markdown-preview/",
    sourceLink: "https://github.com/signal-fish/markdown-preview",
  },
  {
    id: 23,
    title: "dark mode",
    category: "react ui",
    image: "assets/portfolio/react/dark-mode.png",
    webLink: "https://signal-fish.gitee.io/dark-mode/",
    sourceLink: "https://github.com/signal-fish/dark-mode",
  },
  {
    id: 24,
    title: "quiz",
    category: "react ui",
    image: "assets/portfolio/react/quiz.png",
    webLink: "https://signal-fish.gitee.io/quiz/",
    sourceLink: "https://github.com/signal-fish/quiz",
  },
];

export default portfolios;
