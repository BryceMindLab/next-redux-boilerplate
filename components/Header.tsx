import Link from 'next/Link';
import React, { FunctionComponent } from 'react';

const linkStyle = {
	marginRight: 15,
};

type HeaderProps = {};

export const Header: FunctionComponent<HeaderProps> = ({}) => {
	return (
		<div>
			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>
			<Link href="/about">
				<a style={linkStyle}>About</a>
			</Link>
		</div>
	);
};

export default Header;
