import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {login} from '../../Redux/Actions/Auth';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import {showMessage} from 'react-native-flash-message';
import {Input} from 'react-native-elements';
import Button from '../../components/Button';
import axios from 'axios';
import {height, width} from 'react-native-dimension';
import {googleSignin, facebookSignin} from '../../services/firebase';
import FaceBookButton from '../../components/FaceBookButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalWithTextInput from '../../components/ModalWithTextInput';
import {SuccessModal} from '../../components/ModalWithTextInput';
import {BlurView} from '@react-native-community/blur';
import Ionicons from 'react-native-vector-icons/Ionicons';
const modalData = [
  {id: 1, payload: 'Admin'},
  {id: 2, payload: 'Employee'},
];
let check = true;
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentLoading, setCurrentLoading] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [forgetEmail, setForgetEmail] = useState('');
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [eye, setEye] = useState(false);
  const emailRef = useRef(null);
  useEffect(() => {
    return (check = true);
  }, []);
  const loginMethod = async () => {
    try {
      const res = await axios.get(
        'https://seucreditodigital.com.br/api/auth/generate_auth_cookie/',
        {
          params: {
            username: email,
            password: password,
          },
        },
      );
      if (res.status == 200 && res.data.status == 'ok') {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        dispatch(login({user: {...res.data}}));
        setCurrentLoading('');
      } else {
        if (res.data.error == 'Invalid username and/or password.') {
          Alert.alert('Error', 'Invalid username and/or password.');
          setCurrentLoading('');
        } else {
          Alert.alert('Error', res.data.error);
          setCurrentLoading('');
        }
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Error', 'Este e-mail já está tomado');
      setCurrentLoading('');
    }
  };
  const signUpMethod = (data, user) => {
    console.log('Sign Up Method');
    console.log(data);
    axios
      .post('https://seucreditodigital.com.br/wp-json/wp/v2/users', data, {
        auth: {
          username: 'Hardeep',
          password: 'ff@sh1qrCzevfFt(ldb2Kf29',
        },
      })
      .then((res) => {
        if (res.status == 201) {
          dispatch(login({user: {...res.data}}));
        } else {
          Alert.alert('Error', 'Something went wrong');
          setCurrentLoading('');
        }
      })
      .catch((e) => {
        Alert.alert('Error', e.message);
        setCurrentLoading('');
      });
  };
  console.log(check);
  const scoiaLoginMethod = (user) => {
    console.log('SocialLogin Method');
    const email = user.email ? user.email : `${user.uid}@gmail.com`;
    axios
      .get(
        `https://seucreditodigital.com.br/api/auth/generate_auth_cookie/?username=${email}&password=ff@sh1qrCzevfFt(ldb2Kf29`,
      )
      .then(async (res) => {
        if (res.status == 200) {
          if (res.data.status == 'ok') {
            await AsyncStorage.setItem(
              'email',
              user.email ?? `${user.uid}@gmail.com`,
            );
            await AsyncStorage.setItem('password', user.uid);
            check = true;
            dispatch(login({user: {...res.data}}));
            setCurrentLoading('');
          } else if (
            res.data?.error == 'Invalid username and/or password.' &&
            check
          ) {
            check = false;
            signUpMethod(
              {
                username: `${user.displayName}${parseInt(
                  Math.random() * 1000,
                )}`,
                password: 'ff@sh1qrCzevfFt(ldb2Kf29',
                name: user.displayName,
                first_name: user.displayName.split(' ')[0],
                last_name: user.displayName.split(' ')[1],
                email: user.email ?? `${user.uid}@gmail.com`,
              },
              user,
            );
          }
        } else {
          Alert.alert('Error', res.data.error);
          setCurrentLoading('');
        }
      })
      .catch((e) => {
        console.log(e);
        Alert.alert('Error', e.message);
        setCurrentLoading('');
      });
  };
  const validate = (text) => {
    if (!email || !password) {
      showMessage({
        message: 'Email or Password should not be empty',
        description: 'Please fill both fields to continue',
        type: 'danger',
      });
      return;
    }
    if (password.length <= 5) {
      showMessage({
        message: 'Password must be 6 characters long',
        description: 'Try Again',
        type: 'danger',
      });
      return;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      message = 'Enter valid email';
      showMessage({
        message: message,
        description: 'Try Again',
        type: 'danger',
      });
    } else {
      setCurrentLoading('EMAIL');
      loginMethod({});
    }
  };
  const resetPassword = async () => {
    try {
      const res = await axios.get(
        'https://seucreditodigital.com.br/api/user/retrieve_password',
        {
          params: {
            user_login: forgetEmail,
          },
        },
      );
      if (res.status == 200) {
        setIsLoading(false);
        setIsVisible(false);
        setSuccessVisible(true);
        setForgetEmail('');
      } else {
        setIsLoading(false);
        setIsVisible(false);
        setForgetEmail('');
        showMessage({
          message: 'Error',
          description: res.data,
          type: 'danger',
        });
      }
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.white} scrollEnabled>
      <View style={styles.mainViewContainer}>
        <Input
          value={email}
          ref={emailRef}
          placeholder={'Nome do usuário'}
          containerStyle={styles.input}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          value={password}
          ref={passwordRef}
          containerStyle={styles.input}
          placeholder={'Senha'}
          secureTextEntry={eye}
          onChangeText={(text) => setPassword(text)}
          returnKeyType="done"
          rightIcon={() => ( 
            <TouchableOpacity onPress={()=>setEye(!eye)}>
              {
                eye?
                <Ionicons name="ios-eye-outline" color={AppColors.black} size={width(6)}/>
                :
                <Ionicons name="ios-eye-off-outline" color={AppColors.black} size={width(6)}/>
              }
            </TouchableOpacity>
          )}
        />
        <Button
          isLoading={currentLoading == 'EMAIL' ? true : false}
          title={'Conecte-se'}
          containerStyle={styles.button}
          onPress={() => {
            validate();
          }}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.forgetPasswordContainer}
          onPress={() => setIsVisible(true)}>
          <Text style={styles.loginText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.text}>Não tem uma conta?{'  '}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.signupText}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.loginText}>Inscrever-se</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: height(4)}} />
        <FaceBookButton
          isLoading={currentLoading == 'GOOGLE' ? true : false}
          google
          title={'Faça login no Google'}
          containerStyles={styles.googleButtton}
          textStyles={styles.googleButtonText}
          onPress={async () => {
            try {
              setCurrentLoading('GOOGLE');
              const user = await googleSignin();
              scoiaLoginMethod(user.user);
            } catch (e) {
              Alert.alert(e.message);
              setCurrentLoading('');
            }
          }}
        />
        <View style={{marginTop: height(2)}} />
        <FaceBookButton
          isLoading={currentLoading == 'FACEBOOK' ? true : false}
          title="Faça login no Facebook"
          onPress={async () => {
            try {
              setCurrentLoading('FACEBOOK');
              const user = await facebookSignin();
              scoiaLoginMethod(user.user);
            } catch (e) {
              setCurrentLoading('');
              console.log(e.message);
              Alert.alert('Este e-mail já está tomado');
            }
          }}
        />
      </View>
      <SuccessModal
        isVisible={successVisible}
        btnTitle={'Ok'}
        message={'Please Check your email'}
        onBtnPress={() => setSuccessVisible(false)}
      />
      <ModalWithTextInput
        isVisible={isVisible}
        isLoading={isLoading}
        title={'Digite seu e-mail'}
        btnTitle={'Recuperar'}
        onClose={() => setIsVisible(false)}
        inputContainerStyle={styles.input}
        onChangeText={(text) => setForgetEmail(text)}
        onBtnPress={() => {
          if (forgetEmail.trim() != '') {
            setIsLoading(true);
            resetPassword();
          } else {
            showMessage({
              message: 'Erro',
              description: 'Digite o e-mail para redefinir a senha',
              type: 'danger',
            });
          }
        }}
        btncontainerStyle={styles.button}
      />
      {isVisible && (
        <BlurView
          style={{height: height(100), width: width(100)}}
          blurType="ultraThinMaterialLight"
          blurAmount={100}
          reducedTransparencyFallbackColor="black"
        />
      )}
    </ScreenWrapper>
  );
};
export default Login;
