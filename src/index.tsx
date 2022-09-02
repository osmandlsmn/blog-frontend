import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/index.scss";
import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
