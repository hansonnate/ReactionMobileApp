/**
 * Organization Details Screen
 *
 * @author Nate Hanson
 */

//External imports
import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
// import assets from '../../assets';
import LottieView from 'lottie-react-native';
//Internal imports


export const OrgDetailsScreen = () => {

// const [lottieProgress] = useState()

// useEffect(() => {
//     Animated.loop(
//       Animated.timing(new Animated(0), {
//         toValue: 1,
//         duration: 5000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();
//   }, []);

    return (
        <View style={styles.sectionContainer}>
            <LottieView
                // progress={lottieProgress}
                autoplay
                loop
                source={require('../../assets/construction.json')}
                // style={{height: 100, width: 100}}
                // colorFilters={[{ keypath: 'construction', color: '#E9E9E9' }]}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});