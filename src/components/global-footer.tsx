import React from 'react';

export default function GlobalFooter() {
    const year = new Date().getFullYear(); // Get the current year
    return (
        <footer className="w-full p py-6 bg-gray-900 text-gray-50 text-center z-50">
            <p>© {year} S&D Autobody. All rights reserved.</p>
        </footer>
    )
}