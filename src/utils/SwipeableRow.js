import React from 'react';
import {Animated, StyleSheet, Text, View, I18nManager} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

export const RightActions = ({progress, dragX, onPress}) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.rightAction}>
                    <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                    Delete
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
};

export const LeftActions = (progress, dragX) => {
        const scale = dragX.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 1],
        extrapolate: 'clamp',
        });
        return (
        <View style={styles.leftAction}>
            <Animated.View style={ { transform: [{ scale }] }}>
                <Icon name='trash' size={20} />
            </Animated.View>
        </View>
        );
};

const styles = StyleSheet.create({
    leftAction: {
      flex: 1,
      justifyContent: 'center',
      //backgroundColor: '#388e3c',
      //flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse'
    },
    actionIcon: {
      width: 30,
      marginHorizontal: 10
    },
    rightAction: {
      alignItems: 'center',
      flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      backgroundColor: '#dd2c00',
      flex: 1,
      justifyContent: 'flex-end'
    }
  });
  