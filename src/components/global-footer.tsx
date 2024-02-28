import React from 'react';

export default function GlobalFooter() {
    const year = new Date().getFullYear(); // Get the current year
    return (
        <footer className="w-full py-6 bg-gray-900 text-gray-50 text-center">
            <p>© {year} S&D Autobody. All rights reserved.</p>
        </footer>
    )
}