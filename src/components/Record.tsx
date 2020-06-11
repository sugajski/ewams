import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import moment from 'moment';

import {Colors} from '../themes';
import {Separator} from './commons';
import RecordStyles from './styles/RecordStyles';

interface IRecord {
  city: string;
  date: moment.Moment;
}

interface IRecordProps {
  record: IRecord;
  checkCurrentForecast: (city: string) => void;
  isLast: boolean;
}

const Record: FC<IRecordProps> = ({record, checkCurrentForecast, isLast}) => (
  <TouchableOpacity onPress={() => checkCurrentForecast(record.city)}>
    <View style={RecordStyles.container}>
      <Text style={RecordStyles.title}>{record.city}</Text>
      <Text style={RecordStyles.date}>{moment(record.date).fromNow()}</Text>
    </View>
    {!isLast && <Separator color={Colors.slate} />}
  </TouchableOpacity>
);

export default Record;
