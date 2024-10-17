import React from "react";
import "./Header.css";
import headerlogo from "../../assets/images/header-logo.png";

export default function Header() {
	return (
		<nav className="header">
			<div className="header-left">
				<div className="header-logo">
					<img src={headerlogo} alt="PerkPal Logo" />
					<span>
						<b>PerkPal</b>
					</span>
				</div>

				<ul className="header-links">
					<li>
						<a href="/exchange">Exchange</a>
					</li>
					<li>
						<a href="/market">Market</a>
					</li>
					<li>
						<a href="/discover">Discover</a>
					</li>
				</ul>
			</div>

			<div className="header-right">
				<select className="language-selector">
					<option value="EN/USD">EN/USD</option>
					{/* Add more language options here */}
				</select>

				<div className="login-signup">
					<button className="sign-up-btn">Sign up</button>
					<button className="login-btn">Login</button>
				</div>
			</div>
		</nav>
	);
}
