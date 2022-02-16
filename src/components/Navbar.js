import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <Nav>
                <Nav.Item>
                    <Link href="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link href="/favList">Favorites</Link>
                </Nav.Item>
            </Nav>
        </>
    );
}
