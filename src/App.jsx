import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./sections/Footer.jsx";
const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Hero />
			<Projects />
			<Experience />
			<Footer />
		</main>
	);
};

export default App;
