import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export const DefaultText: React.FC<TextProps> = (props) => {
    return (
        <Text {...props} style={[
            { ...styles.text }, props.style
        ]}>
            {props.children}
        </Text >
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'systemfont',
    },
});
