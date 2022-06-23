import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  AppState,
} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import {Blogs} from '../../utills/DummyData';
import {width, height} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Author from '../../components/Author';
import axios from 'axios';
import Share from 'react-native-share';
import Loading from '../../components/Loading';
import {BannerAd, BannerAdSize} from '@react-native-admob/admob';
import RenderHtml from 'react-native-render-html';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputModal from '../../components/InputModal';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
const BlogDetail = ({navigation, route}) => {
  const id = route?.params?.id;
  const users = useSelector((state) => state.Auth.users);
  const [blog, setBlog] = useState({});
  const [post, setPost] = useState({});
  const [detail, setDetail] = useState('');
  const [loaded, setIsLoaded] = useState(false);
  const [author, setAuthor] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [comments, setComments] = useState([]);
  console.log(id);
  const getDataFromApi = async () => {
    try {
      const res = await axios.get(
        `https://seucreditodigital.com.br/wp-json/wp/v2/posts/${id}`,
      );
      setPost(res.data);
      let str = res?.data?.content?.rendered;
      str = str.replace(/<[^>]+>/g, '');
      setTimeout(() => {
        setDetail(str);
        axios
          .get(
            `https://seucreditodigital.com.br/wp-json/wp/v2/users/${res.data.author}`,
          )
          .then((authorRes) => {
            setAuthor(authorRes.data);
          });
        setIsLoaded(true);
      }, 200);
    } catch (e) {
      console.log(e);
    }
  };
  const getAllComments = async () => {
    try {
      const res = await axios.get(
        `https://seucreditodigital.com.br/wp-json/wp/v2/comments?post=${id}`,
      );
      if (res.status == 200) {
        setComments(res.data);
        console.log(res.data);
      } else throw new Error(res.data.error);
    } catch (e) {
      return e.message;
    }
  };
  // ?author_name=${users.user.user?users.user.user.displayname:users.user.name}&author_email=${users.user.user?users.user.user.email:users.user.email}&content=${comment}&post=${id}
  const addComment = async (users,comment) => {
    console.log('-------User from Add Comment---------');
    console.log(users);
      try {
        const res = await axios.post(
          `https://seucreditodigital.com.br/wp-json/wp/v2/comments`,
          {
            author_name:users.user.user!=null? users.user.user.displayname :users.user.name,
            author_email: users.user.user!=null? users.user.user.email : users.user.email,
            content: comment,
            post: id,
          },
          {
            auth: {
              username: 'Hardeep',
              password: 'BTt2(wNx&i0GT9XHiEWb5k&V',
            },
          },
        );
        if (res.status == 200) {
          getAllComments();
        }
      } catch (e) {
        console.log(e.message);
      }
  };
  const mountData = () => {
    getDataFromApi();
    const fliterBlog = Blogs.filter((item) => {
      if (item.id == 2) {
        return item;
      }
    });
    setBlog(fliterBlog[0]);
  };
  useEffect(() => {
    mountData();
    getAllComments();
  }, []);
  const checkBackGroundMessages = async () => {
    const postId = await AsyncStorage.getItem('postId');
    if (postId) {
      navigation.navigate('BlogDetail', {id: postId});
    }
    await AsyncStorage.removeItem('postId');
  };
  //UseEffect for News Posts
  useEffect(() => {
    AppState.addEventListener('focus', () => {
      checkBackGroundMessages();
    });
  }, []);
  const renderBlogs = ({item}) => (
    <Image source={item.image} style={styles.image} />
  );
  const shareBlog = async () => {
    const ShareOptions = {
      message: post.link,
    };
    try {
      const response = await Share.open(ShareOptions);
    } catch (e) {
      console.log('Error==> ', e);
    }
  };
  const source = {
    html: `${post?.content?.rendered}`,
  };
  return (
    <>
      <ScreenWrapper
        statusBarColor={AppColors.transparent}
        footerUnScrollable={() => (
          <BannerAd
            style={{alignSelf: 'center', width: width(100)}}
            size={BannerAdSize.BANNER}
            unitId={'ca-app-pub-9769021838213495/6470328012'}
          />
        )}
        scrollEnabled
        transclucent={true}>
        {loaded ? (
          <>
            <ImageBackground
              source={{
                uri: post?.yoast_head_json?.og_image
                  ? post?.yoast_head_json?.og_image[0]?.url
                  : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
              }}
              style={styles.imageBackGround}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButtonContainer}>
                <Entypo
                  name={'chevron-small-left'}
                  size={width(8)}
                  color={AppColors.black}
                />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.mainBottomContainer}>
              <View style={styles.detailContainer}>
                <Text style={styles.headingText}>{post?.title?.rendered}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={shareBlog}
                  style={styles.shareComment}>
                  <AntDesign
                    name={'sharealt'}
                    size={width(6)}
                    color={AppColors.black}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.subTitleText}>
                  {post?.yoast_head_json?.description}
                </Text>
              </View>
              <Text style={styles.dateText}>
                {moment(post?.date.split('T')[0]).format('MMM DD YYYY')}
              </Text>
              <View style={{marginVertical: height(2)}}>
                <BannerAd
                  style={{alignSelf: 'center', width: width(100)}}
                  size={BannerAdSize.BANNER}
                  unitId={'ca-app-pub-9769021838213495/6470328012'}
                />
              </View>
              <View style={styles.htmlContainer}>
                <RenderHtml
                  source={source}
                  enableExperimentalMarginCollapsing={true}
                  contentWidth={width(90)}
                  enableExperimentalMarginCollapsing={true}
                  tagsStyles={{
                    p: {alignSelf: 'center', width: width(90)},
                    h2: {alignSelf: 'center'},
                    h2:{textAlign:'center'},
                    h3:{textAlign:'center'},
                  
                  }}
                />
              </View>
              <Author
                date={post?.date.split('T')[0]}
                image={author?.yoast_head_json?.og_image[0]?.url}
                name={author.name}
              />
            </View>
          </>
        ) : (
          <Loading containerStyles={{height: height(100)}} />
        )}
        {isVisible && (
          <InputModal
            closeModal={() => setIsVisible(false)}
            isVisible={isVisible}
            getAllComments={getAllComments}
            addComment={(users,comment)=>addComment(users,comment)}
            allComments={comments}
            users={users}
            name={
              users.user.user ? users.user.user.displayname : users.user.name
            }
          />
        )}
      </ScreenWrapper>
      {/* {loaded && (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.commentContainer}
          onPress={() => setIsVisible(true)}>
          <EvilIcons name={'comment'} size={width(8)} color={AppColors.white} />
        </TouchableOpacity>
      )} */}
    </>
  );
};
export default BlogDetail;
//ca-app-pub-5416001992516754~4508269844  android
// ca-app-pub-5416001992516754/9276670355
