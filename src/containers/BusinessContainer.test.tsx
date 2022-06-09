import { screen } from '@testing-library/react';

import { testRender } from 'test';
import { Component } from 'containers/BusinessContainer';
import { business } from 'test/model';
import { IBusiness } from 'models';

test('checks that BusinessContainer fetches data', async () => {
    let fetchCalled = false;
    const fetchCallback = () => {
        fetchCalled = true;
        return Promise.resolve([business]);
    };
    const setCallback = (businesses: IBusiness[]) => {
        return {
            type: 'test-action',
            data: businesses,
        };
    }; 
    testRender(<Component businessId={business.id} businesses={[]} fetchBusinesses={fetchCallback} setBusinesses={setCallback} />);
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
    expect(fetchCalled).toBe(true);
});
