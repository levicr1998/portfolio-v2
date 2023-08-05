import { Decorator } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

export const ReactRouterDecorator: Decorator = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
