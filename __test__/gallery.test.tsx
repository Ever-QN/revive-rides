import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from '@/app/gallery/page';

describe('Gallery component', () => {
  test('renders images with correct alt text', () => {
    render(<Gallery />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(6);
    
    const altTexts: string[] = [
      'Broken black sedan',
      'Fixed black sedan',
      'Broken red sedan in a scrapyard outside',
      'Fixed red sedan in a garage',
      'Red truck with a crushed front end in a garage with the hood up',
      'Fixed red truck outside'
    ];
    images.forEach((image, index) => {
      expect(image).toHaveAttribute('alt', altTexts[index]);
    });
  });
});

