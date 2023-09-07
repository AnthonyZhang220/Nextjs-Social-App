import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";

export default function App() {
	return (
		<div className="app">
			<Header />
			<Landing />
			<Footer />
		</div>
	);
}
