import React, {FC} from 'react';
import {View} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {loop, mix} from 'react-native-redash';
import {useMemoOne} from 'use-memo-one';

import {Logo} from './components';
import LoadingStyles from './styles/LoadingStyles';

const {
  Value,
  Clock,
  useCode,
  set,
  block,
  cond,
  and,
  not,
  clockRunning,
  startClock,
  stopClock,
} = Animated;

interface ILoadingProps {
  isPlaying: any;
}

const Loading: FC<ILoadingProps> = ({isPlaying}) => {
  const {animation, clock} = useMemoOne(
    () => ({
      animation: new Value(0),
      clock: new Clock(),
    }),
    [],
  );
  useCode(
    () =>
      block([
        cond(and(not(clockRunning(clock)), isPlaying), startClock(clock)),
        cond(and(clockRunning(clock), not(isPlaying)), stopClock(clock)),
        set(
          animation,
          loop({
            clock,
            duration: 4000,
            easing: Easing.inOut(Easing.ease),
            boomerang: true,
            autoStart: false,
          }),
        ),
      ]),
    [],
  );
  const scale = mix(animation, 1, 1);
  const rotate = mix(animation, 0, 2 * Math.PI * 5);
  return (
    <View style={LoadingStyles.container}>
      <View style={LoadingStyles.circle}>
        <Animated.View style={{transform: [{scale}, {rotate}]}}>
          <Logo />
        </Animated.View>
      </View>
    </View>
  );
};

export default Loading;
