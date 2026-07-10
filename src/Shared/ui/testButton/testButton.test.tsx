import { render, screen } from '@testing-library/react'
import { TestButton } from './testButton'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'


test('Render button', () => {
    render(<TestButton>Send</TestButton>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
})

test('Button has the expected name', () => {
    render(<TestButton>Send</TestButton>)

        const button = screen.getByRole('button')

        expect(button).toHaveTextContent('Send')
})

test('Button is clickable', async () => {
    const testFn = vi.fn()

    render(<TestButton onClick={testFn}>Send</TestButton>)

    const button = screen.getByRole('button')

    await userEvent.click(button)
})