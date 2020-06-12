import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {Separator} from './commons';

import TableCellStyles from './styles/TableCellStyles';

interface ICell {
  title: string;
  description: string;
}

interface ITableCellProps {
  cell: ICell;
  index: number;
}

const TableCell: FC<ITableCellProps> = ({cell, index}) => (
  <View>
    <View
      key={cell.title}
      style={[
        TableCellStyles.container,
        index % 2 === 0
          ? TableCellStyles.paddingRight
          : TableCellStyles.paddingLeft,
      ]}>
      <Text
        style={TableCellStyles.title}
        numberOfLines={1}
        ellipsizeMode="tail">
        {cell.title}
      </Text>
      <Text style={TableCellStyles.description}>{cell.description}</Text>
    </View>
    {index < 8 && <Separator />}
  </View>
);

export default TableCell;
