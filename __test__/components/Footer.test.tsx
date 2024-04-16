import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '@/components/Footer';

describe('Footer component', () => {
  it('renders logo, navigation links, legal links, branding, and copyright notice', () => {
    render(<Footer />);

    expect(screen.getByAltText('S&D Autobody Logo')).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Use')).toBeInTheDocument();
    expect(screen.getByAltText('Menu')).toBeInTheDocument();

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} S&D Autobody, Inc. All rights reserved.`)).toBeInTheDocument();
  });
});
