Fork of [remobile/react-native-marquee-label](https://github.com/remobile/react-native-marquee-label) with fixed proptypes

# React Native MarqueeLabel
A marquee label for react-native

## Installation
Not available on npm yet. The original work from remobile can be installed using instructions on https://github.com/remobile/react-native-marquee-label . To use this fork, just replace node_modules/@remobile/react-native-marquee-label/index.js with my index.js.

## Usage

### Example
```js
'use strict';

import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import MarqueeLabel from './marqueelabel/index';

module.exports = React.createClass({
    render: function() {
        return (
            <MarqueeLabel style={styles.navTitle}
                marqueeType={0}
                scrollDuration={4}
                animationDelay={1}
                fadeLength={15}
                color="white"
                fontSize={17}
                fontFamily={FONT.FONT_BOLD}
                text={this.props.title} />
        );
    }
});

const styles = StyleSheet.create({
    marqueeLabel: {
        backgroundColor: 'blue',
        width:260,
        height:200,
    }
});

export default MarqueeSample;
```
### Screencasts

![loading](https://github.com/remobile/react-native-marquee-label/blob/master/screencasts/demo.gif)

### Props
- `text: PropTypes.string.isRequired`
- `scrollDuration: PropTypes.number` //seconds
- `marqueeType: PropTypes.number` //ios
- `fadeLength: PropTypes.number` //ios
- `leadingBuffer: PropTypes.number` //ios
- `trailingBuffer: PropTypes.number` //ios
- `animationDelay: PropTypes.number` //ios
- `isRepeat: PropTypes.bool` //android
- `startPoint: PropTypes.number` //android
- `direction: PropTypes.number` //android
- `fontSize: PropTypes.number`
- `fontWeight: PropTypes.oneOf(
    ['normal' /*default*/, 'bold',
      '100', '200', '300', '400', '500', '600', '700', '800', '900']
  )`
- `fontStyle: PropTypes.oneOf(['normal', 'italic'])`
- `fontFamily: PropTypes.string`
- `color: ColorPropType`
