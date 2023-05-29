// import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Feature from "./components/feature/Feature";
import Pricing from "./components/pricing/Pricing";
import Success from "./components/success/Success";
import Contact from "./components/contact/Contact";
import FAQ from "./components/faq/Faq";

const questions = [
  {
    id: 1,
    question: "Popular Articles",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Feature></Feature>
      <Pricing></Pricing>
      <Success></Success>
      {/* <FAQ data={questions}></FAQ> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
