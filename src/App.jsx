import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./sections/Footer.jsx";
import Quote from "./sections/Quote.jsx";
import { quote } from "./constants/index.js";

const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Hero />
			<Projects />
			<Quote quote={quote[0].quote} />
			<Experience />
			<Quote quote={quote[1].quote} />
			<Footer />
		</main>
	);
};

export default App;
