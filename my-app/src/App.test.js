import { render, screen } from '@testing-library/react';
import App from './App';

/** If you want to set up some tests for your app, you can do it here. 
 * For example, you can test that the app renders a specific element
 * This uses the @testing-library/react library and the setupTests.js file, which contains an import of jest-dom
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
