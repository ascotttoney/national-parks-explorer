import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { GiDandelionFlower } from 'react-icons/gi';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	.navbar-brand,
	.navbar-nav .nav-link {
		color: #bbb;

		&:hover {
			color: white;
		}
	}
`;

export const NavigationBar = (props) => (
	<Styles>
		<Navbar expand="sm">
			<Navbar.Brand href="/">
				<GiDandelionFlower /> NATIONAL PARKS EXPLORER
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Item>
						<Nav.Link href="/parks">Parks</Nav.Link>
					</Nav.Item>
					{localStorage.token ? (
						<Nav.Item>
							<Nav.Link href="/future_visits">
								Future Visits
							</Nav.Link>
						</Nav.Item>
					) : null}
					{localStorage.token ? (
						<Nav.Item>
							<Nav.Link href="/past_visits">Past Visits</Nav.Link>
						</Nav.Item>
					) : null}
				</Nav>
			</Navbar.Collapse>

			{localStorage.token ? (
				<Nav className="ml-auto">
					<Nav.Item>
						<Nav.Link name="profile" href="/profile">
							Profile
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link name="logout" onClick={props.handleLogout}>
							Logout
						</Nav.Link>
					</Nav.Item>
					<span> - </span>
					<input
						type="text"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => props.searchChange(e)}
					/>
				</Nav>
			) : (
				<Nav className="ml-auto">
					<Nav.Item>
						<Nav.Link name="login" href="/login">
							Login
						</Nav.Link>
					</Nav.Item>
					<span> - </span>
					<input
						type="text"
						placeholder="Search"
						aria-label="Search"
						onChange={(e) => props.searchChange(e)}
					/>
				</Nav>
			)}
		</Navbar>
	</Styles>
);
