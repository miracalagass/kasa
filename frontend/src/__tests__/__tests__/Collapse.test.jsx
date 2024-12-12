import React from 'react'; // React bileşenler için gerekli
import { render, fireEvent } from '@testing-library/react'; // Render ve etkileşim fonksiyonları
import { describe, test, expect } from 'vitest'; // Vitest test araçları
import '@testing-library/jest-dom'; // jest-dom matcher'ları
import Collapse from '../../components/Collapse';
test('Collapse bileşeninin açılıp kapanma işlevi', () => {
    const title = 'Test Başlığı';
    const children = 'Bu içerik Collapse içinde';
    const { getByText } = render(<Collapse title={title}>{children}</Collapse>);
    
    const collapseHeader = getByText('Test Başlığı');
    expect(getByText('Test Başlığı')).toBeInTheDocument();
    expect(getByText(children)).not.toBeVisible();
  
    fireEvent.click(collapseHeader);
    expect(getByText(children)).toBeVisible();
  });
