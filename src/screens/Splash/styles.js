import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Initial Image Size height(20.5) for both H & W
  // Step 2 Image Size height(72.5) for both H & W
  // Final Image Size height(117.5) for both H & W
  logoImage: {
    height: height(20.5),
    width: height(20.5),
  },
  wheeldLogo: {
    position: 'absolute',
    resizeMode: 'contain',
  },
});
export default styles;
