import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest'; // Vitest fonksiyonlarını import etmelisin
import Banner from '../../components/Banner';
import imageBanner from './../../assets/image/homepage-banner.jpg'
test('Banner bileşeninin başlık görüntüleme testi', () => {
    const title = 'Test Başlığı';
    const { container } = render(<Banner image={imageBanner} title={title} />);
    
    expect(container.querySelector('h1').textContent).toBe('Test Başlığı');
  });
  
  test('Banner bileşeninin başlık olmadan render edilmesi', () => {
    const { container } = render(<Banner image={imageBanner} />);
    
    expect(container.querySelector('h1')).toBeNull();
  });