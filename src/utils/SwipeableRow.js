import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
          inputRange: [5, 150],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        });
        return (
          <View style={styles.leftAction}>
              <Animated.View style={ { transform: [{ scale }] }}>
                  <Icon name='trash' size={40} />
              </Animated.View>
          </View>
        );
};

const styles = StyleSheet.create({
    leftAction: {
      flex: 1,
      justifyContent: 'center',
      marginLeft:30
    }
});
  