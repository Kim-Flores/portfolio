import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Works from "../components/Works";

export default function Page() {
  return (
    <div>
      <NavBar />
      <main className="flex min-h-screen flex-col justify-start lg:px-3.5 lg:mx-80">
        <Works />
      </main>
      <Footer />
    </div>
  );
}
