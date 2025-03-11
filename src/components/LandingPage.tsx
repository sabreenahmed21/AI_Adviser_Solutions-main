import { ToastContainer } from "react-toastify";
import Intro from "./Intro";
import About from "./About";
import KeyDifferentiators from "./KeyDifferentiators";
import Services from "./Services";
import Success from "./Success";
import ChooseUs from "./ChooseUs";
import ContactUs from "./ContactUs";
import ScrollButton from "./ScrollButton";

export default function LandingPage() {
  return (
    <div className="flex flex-col">

      <About />

      <KeyDifferentiators />

      <Services />

      <Success />

      <ChooseUs />

      <ContactUs />

      <ScrollButton />
    </div>
  );
}
