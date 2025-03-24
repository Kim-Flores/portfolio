import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col lg:px-3.5 lg:mx-80 ">
        <About />
      </main>
      <Footer />
    </div>
  );
}
