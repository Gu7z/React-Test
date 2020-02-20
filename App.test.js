import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import App from './App';

test('Test if Button is working', async () => {

  const { getByTestId, getByText } = render(<App />)
  const fieldNode = await waitForElement (
    ()=>getByTestId('button-teste')
  )
  fireEvent.click(fieldNode)
  const text = getByText(/Gustavo/i);
  
  expect(text).toBeInTheDocument()

});

