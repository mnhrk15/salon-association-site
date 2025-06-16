import { render, screen } from '@testing-library/react';
import { PageHeader } from '@/components/common/PageHeader';

describe('PageHeader', () => {
  it('renders title and subtitle', () => {
    const title = 'Test Title';
    const subtitle = 'Test Subtitle';
    const imageUrl = 'https://example.com/image.jpg';

    render(<PageHeader title={title} subtitle={subtitle} imageUrl={imageUrl} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    // Check if the subtitle is rendered
    const subtitleElement = screen.getByText(subtitle);
    expect(subtitleElement).toBeInTheDocument();
    expect(subtitleElement.tagName).toBe('P');
  });
}); 