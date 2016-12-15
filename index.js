'use strict';

import React, { PropTypes } from 'react';
import { View, requireNativeComponent, ColorPropType } from 'react-native';

const MarqueeLabel = (props) => {
  return (
    <RCTMarqueeLabel  {...props} />
  );
};

MarqueeLabel.propTypes = {
  ...View.propTypes,
  text: PropTypes.string.isRequired,
  scrollDuration: PropTypes.number, //秒
  marqueeType: PropTypes.number, //ios
  fadeLength: PropTypes.number, //ios
  leadingBuffer: PropTypes.number, //ios
  trailingBuffer: PropTypes.number, //ios
  animationDelay: PropTypes.number, //ios
  isRepeat: PropTypes.bool, //android
  startPoint: PropTypes.number, //android
  direction: PropTypes.number, //android
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOf(
    ['normal' /*default*/, 'bold',
      '100', '200', '300', '400', '500', '600', '700', '800', '900']
  ),
  fontStyle: PropTypes.oneOf(['normal', 'italic']),
  fontFamily: PropTypes.string,
  color: ColorPropType
};

var RCTMarqueeLabel = requireNativeComponent('RCTMarqueeLabel', MarqueeLabel);
export default MarqueeLabel;
