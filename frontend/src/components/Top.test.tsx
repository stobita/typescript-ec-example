import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Top } from './Top';

let container: Element | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container as Element);
  if (container !== null) {
    container.remove();
    container = null;
  }
});

it('render', () => {
  act(() => {
    render(<Top />, container);
    expect(container?.textContent).toBe('top');
  });
});
