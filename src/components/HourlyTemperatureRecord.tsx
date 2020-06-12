import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {Separator} from './commons';
import {Localizable} from '../lib';
import HourlyTemperatureRecordStyles from './styles/HourlyTemperatureRecordStyles';

interface IRecord {
  hour: string;
  temperature: string;
}

interface IHourlyTemperatureRecordProps {
  record: IRecord;
  index: number;
}

const HourlyTemperatureRecord: FC<IHourlyTemperatureRecordProps> = ({
  record,
  index,
}) => (
  <View style={HourlyTemperatureRecordStyles.container}>
    <Text style={HourlyTemperatureRecordStyles.text}>
      {index === 0 ? Localizable.t('weatherDetails.now') : record.hour}
    </Text>
    <Separator />
    <Text style={HourlyTemperatureRecordStyles.text}>{record.temperature}</Text>
  </View>
);

export default HourlyTemperatureRecord;
