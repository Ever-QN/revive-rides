import { useState } from "react";

type Page = {
    label: string;
    href: string;
}

const Links: React.FC<{ pages: Page[] }> = ({ pages }) => {
    return (
        <div>
            {pages.map((page: Page) => {
                return (
                    <div>
                        <a>{page.label}</a>
                    </div>
                )
            })}
        </div>
    )
}

const Nav: React.FC<{}> = () => {
    return (
        <nav>
            <div>
                <span>Logo</span>
            </div>
        </nav>
    )
};

export default Nav;