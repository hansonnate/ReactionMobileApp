/**
 * Organization Details Screen
 *
 * @author Nate Hanson
 */

//External imports
import React from 'react';
import { View, StyleSheet} from 'react-native';
// import assets from '../../assets';
import AnimatedLottieView from 'lottie-react-native';
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
            <AnimatedLottieView
                autoPlay
                loop
                source={require('../../assets/construction.json')}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    sectionContainer: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});