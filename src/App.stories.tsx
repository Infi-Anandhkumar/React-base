import { userEvent } from '@testing-library/user-event';
import { within } from '@testing-library/dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';
import App from './App';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const DefaultBookingForm: Story = {
    name: 'Default Booking Form',
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
};

export const RoundTripBookingForm: Story = {
    name: 'Round-Trip Booking Form',
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByRole('combobox'));
        const options = await within(document.body).findAllByRole('option');
        await userEvent.click(options[1]);
    },
};

export const InvalidBookingForm: Story = {
    name: 'Invalid Booking Form',
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Search Flights'));
    },
};

export const ConfirmationPage: Story = {
    name: 'Confirmation Page',
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/confirm?from=New+York&to=London&depart=2024-08-01&return=2024-08-15&tripType=roundtrip&passengers=2']}>
                <Routes>
                    <Route path="/*" element={<Story />} />
                </Routes>
            </MemoryRouter>
        ),
    ],
};
