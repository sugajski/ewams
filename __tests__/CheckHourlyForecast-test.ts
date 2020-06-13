import {RestClient} from '../src/services';

const warsawCoordinates = {lat: '52.237049', lon: '21.017532'};

test('Hourly forecast for 24h fetched correctly.', async () => {
  try {
    const response = await RestClient.checkHourlyForecast(
      warsawCoordinates.lat,
      warsawCoordinates.lon,
    );
    expect(response.status).toBe(200);
  } catch (error) {
    expect(error.response.data.cod === 200).toBeTruthy();
  }
});
