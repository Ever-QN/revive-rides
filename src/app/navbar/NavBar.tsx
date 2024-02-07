import React from 'react';
import * as data from './pages.json';
import './navbar.css';

const pagesString = JSON.stringify(data);
const pages = JSON.parse(pagesString).pages;

type Page = {
    label: string;
    href: string;
}

const Links: React.FC<{ pages: Page[] }> = ({ pages }) => {
    return (
        <div className="links-container">
            {pages.map((page: Page, index: number) => {
                return (
                    <div className="link" key={index}> 
                        <a href={page.href}>{page.label}</a>
                    </div>
                )
            })}
        </div>
    )
}

const Nav: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <span>Logo</span>
            </div>
            <Links pages={pages} />
        </nav>
    )
};

export default Nav;