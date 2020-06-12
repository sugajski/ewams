import React, {FC} from 'react';
import {ScrollView} from 'react-native';

import HourlyTemperatureRecord from './HourlyTemperatureRecord';
import HourlyTemperaturesTableStyles from './styles/HourlyTemperaturesTableStyles';

interface IHourlyTemperaturesRecord {
  hour: string;
  temperature: string;
}

interface IHourlyTemperaturesTableProps {
  hourlyTemperatures: IHourlyTemperaturesRecord[];
}

const HourlyTemperaturesTable: FC<IHourlyTemperaturesTableProps> = ({
  hourlyTemperatures,
}) => (
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={HourlyTemperaturesTableStyles.container}>
    {hourlyTemperatures.map((record, index) => (
      <HourlyTemperatureRecord key={index} record={record} index={index} />
    ))}
  </ScrollView>
);

export default HourlyTemperaturesTable;
