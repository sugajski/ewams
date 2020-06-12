import React, {useEffect, FC} from 'react';
import {View, Image, TouchableOpacity, BackHandler} from 'react-native';
import {useHistory} from 'react-router-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Images} from '../../themes';
import NavBarStyles from './styles/NavBarStyles';

interface INavBarProps {
  additionalBackAction: () => void;
}

const NavBar: FC<INavBarProps> = ({additionalBackAction = null}) => {
  const router = useHistory();
  const safeAreaInsets = useSafeAreaInsets();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPressed);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPressed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBackPressed = () => {
    if (additionalBackAction) {
      additionalBackAction();
    }
    router.goBack();
    return true;
  };

  return (
    <View style={[NavBarStyles.container, {height: 56 + safeAreaInsets.top}]}>
      <TouchableOpacity onPress={handleBackPressed}>
        <View style={NavBarStyles.backButtonContainer}>
          <Image
            source={Images.back_ic}
            style={NavBarStyles.backButtonIcon}
            resizeMode="stretch"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
