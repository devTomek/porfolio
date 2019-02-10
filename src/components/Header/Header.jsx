import React from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
import "./Header.scss";

const Header = ({ toggle, isOpen, text }) => (
	<div className="header-wrapper">
		<Navbar dark expand="lg">
			<NavbarBrand href="#">{text.brand}</NavbarBrand>
			<NavbarToggler onClick={toggle} className="navbar-toggler" />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="#">{text.home}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">{text.about}</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">{text.projects}</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="#">{text.contact}</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	</div>
);

export default Header;
