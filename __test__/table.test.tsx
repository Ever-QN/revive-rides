import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

describe('Tabs Components', () => {
  it('renders TabsList component correctly', () => {
    render(
      <Tabs>
        <TabsList className="custom-class" />
      </Tabs>
    );
    const tabsList = screen.getByRole('tablist');
    expect(tabsList).toHaveClass('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground custom-class');
  });
});
