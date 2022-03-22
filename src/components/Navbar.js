import World from "../images/world.png"

export default function Navbar() {
	return (
		<nav className="nav">
			<img className="nav--img" src={World} alt="world" ></img>
			<p className="nav--title">my travel journal.</p>
		</nav>
	)
}