import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../src/components/Button';

describe('Componente Button', () => {
  it('renderiza com os filhos', () => {
    render(<Button>Comprar</Button>);
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });

  it('chama o handler onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Comprar</Button>);
    fireEvent.click(screen.getByText('Comprar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('aplica o estilo arredondado quando a prop rounded é true', () => {
    const { container } = render(<Button rounded>Comprar</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle('background-color: rgb(2, 138, 31)');
  });

  it('não aplica o estilo arredondado quando a prop rounded é false', () => {
    const { container } = render(<Button rounded={false}>Comprar</Button>);
    const button = container.firstChild as HTMLElement;
    expect(button).toHaveStyle('background-color: rgb(240, 240, 240)');
  });
});
