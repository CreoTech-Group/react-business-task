import { screen } from '@testing-library/react';

import { testRender } from 'test';
import { Component } from 'containers/BusinessListContainer';
import { IBusiness } from 'models';

test('checks that BusinessListContainer fetches data', async () => {
    let fetchCalled = false;
    const fetchCallback = () => {
        fetchCalled = true;
        return Promise.resolve([]);
    };
    const setCallback = (businesses: IBusiness[]) => {
        return {
            type: 'test-action',
            data: businesses,
        };
    }; 
    testRender(<Component businesses={[]} fetchBusinesses={fetchCallback} setBusinesses={setCallback} />);
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    expect(fetchCalled).toBe(true);
});
