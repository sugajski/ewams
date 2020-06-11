import React, {FC} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

import {Localizable} from '../lib';
import SearchHistoryStyles from './styles/SearchHistoryStyles';
import Record from './Record';

interface IHistory {
  city: string;
  date: moment.Moment;
}

interface ISearchHistoryProps {
  history: IHistory[];
  checkCurrentForecast: (city: string) => void;
}

const SearchHistory: FC<ISearchHistoryProps> = ({
  history,
  checkCurrentForecast,
}) => (
  <View>
    <Text style={SearchHistoryStyles.title}>
      {Localizable.t('dashboard.recentlySearched')}
    </Text>
    {history.map((record, index) => (
      <Record
        key={index}
        record={record}
        checkCurrentForecast={checkCurrentForecast}
        isLast={index === history.length - 1}
      />
    ))}
  </View>
);

export default SearchHistory;
