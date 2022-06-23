import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import moment from 'moment';
import {width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FastImage from 'react-native-fast-image';
const SearchBlog = ({
  image,
  title,
  detail,
  onPress,
  index,
  date,
  Author,
  containerStyles = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, containerStyles]}>
      <FastImage source={{uri: image}} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text numberOfLines={2} style={styles.detailText}>
          {title}
        </Text>
        <View style={styles.reponseContainer}>
          <Fontisto
            style={styles.personIcon}
            name={'person'}
            size={width(3)}
            color={AppColors.sementic}
          />
          <Text style={[styles.dateText, styles.authorText]}>{Author}</Text>
          <Fontisto
            style={styles.eyeIcon}
            name={'date'}
            size={width(3)}
            color={AppColors.sementic}
          />
          <Text style={styles.dateText}>
            {moment(date).format('MMM DD YYYY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchBlog;
