import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
function Footer() {
	return (
		<div className="footer">
			<div className="footer__container">
				<div className="footer__header">
					<h1 className="gradient--text">
						Do you want to step in to the future before others
					</h1>
					<button>Request Early Access</button>
				</div>
				<div className="footer__content">
					<div className="footer__content-logo">
						<img src={logo} alt="logo" />
						<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
					</div>
					<div className="footer__content-links">
						<div>
							<h6>Links</h6>
							<p>
								<a>Overons</a>
							</p>

							<p>
								<a>Social Media</a>
							</p>
							<p>
								<a>Counters</a>
							</p>
							<p>
								<a>Contact</a>
							</p>
						</div>
						<div>
							<h6>Company</h6>
							<p>
								<a>Terms & Conditions</a>
							</p>
							<p>
								<a>Privacy Policy</a>
							</p>
							<p>
								<a>Contact</a>
							</p>
						</div>
						<div>
							<h6>Get in touch</h6>
							<p>
								<a>Crechterwoord K12 182 DK Alknjkcb</a>
							</p>
							<p>
								<a>085-132567</a>
							</p>
							<p>
								<a>info@payme.net</a>
							</p>
						</div>
					</div>
				</div>
				<div className="footer__copy-right">
					© 2021 GPT-3. All rights reserved.
				</div>
			</div>
		</div>
	);
}

export default Footer;
