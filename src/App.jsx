import Header from "./components/Header";
import DemoRequestForm from "./components/DemoRequestForm";
import Footer from "./components/Footer";
import GreenBackdrop from "./components/GreenBackdrop";

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <GreenBackdrop />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 sm:px-6">
        <Header />
        <DemoRequestForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
