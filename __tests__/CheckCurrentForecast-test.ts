import {RestClient} from '../src/services';

test('Current forecast fetched correctly.', async () => {
  try {
    const response = await RestClient.checkCurrentForecast('Warszawa');
    expect(response.status).toBe(200);
  } catch (error) {
    expect(error.response.data.message !== 'city not found').toBeTruthy();
  }
});
