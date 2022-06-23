import React, {useState, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import {showMessage} from 'react-native-flash-message';
import {setLoaderVisible} from '../../Redux/Actions/Config';
import {Input} from 'react-native-elements';
import {login} from '../../Redux/Actions/Auth';
import Button from '../../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function SignUp({navigation}) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentLoading,setCurrentLoading] = useState('');
  const lastNameRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const loginMethod = async () => { 	
    try{
			const res = await axios.get("https://seucreditodigital.com.br/api/auth/generate_auth_cookie/",
      {
        params: { 
          username:email,
          password:password
        }
      }) 
			if(res.status==200 && res.data.status=="ok"){
        await AsyncStorage.setItem('email', email)
        await AsyncStorage.setItem('password', password)
        dispatch(login({user:{...res.data}}))
        setCurrentLoading("")
      }
			else{
				Alert.alert("Error", res.data.error)
        userEmail ="";
        userPassword="";
        setCurrentLoading("")
      }}
		catch(e){
			console.log(e.message);
			Alert.alert("Error", "Something went wrong")
      setCurrentLoading("")
    }
  }
  
  const signupMethod = async (data) => {
    try {
      const res = await axios.post(
        'https://portaldogremista.com.br/wp-json/wp/v2/users',
        data,
        {
          auth: {
            username: 'Hardeep',
            password: 'ff@sh1qrCzevfFt(ldb2Kf29',
          },
        },
      );
      if (res.status == 201) {
        loginMethod()
      } else {
        Alert.alert('Error', res.data.message);
        setCurrentLoading("")
      }
    } catch (e) {
      console.log(e);
      Alert.alert('Error', "Desculpe, mas este e-mail já está em uso!");
      setCurrentLoading("")
    }
  };
  const validate = () => {
    check = true;
    message = '';
    if (!firstName) {
      message = 'First should not empty';
      check = false;
    } else if (!lastName) {
      message = 'last name should not empty';
      check = false;
    } else if (!userName) {
      message = 'UserName should not empty';
      check = false;
    } else if (!email) {
      message = 'Email should not empty';
      check = false;
    } else if (!password) {
      message = 'Password should not empty';
      check = false;
    } else if (!confirmPassword) {
      message = 'Confrim Password should not empty';
      check = false;
    } else if (password != confirmPassword) {
      message = "Password doesn't macth'";
      check = false;
    }
    if (!check) {
      showMessage({
        message: message,
        description: 'Try Again',
        type: 'danger',
      });
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (check) {
      if (reg.test(email) === false) {
        message = 'Enter valid email';
        showMessage({
          message: message,
          description: 'Try Again',
          type: 'danger',
        });
      } else {
        setCurrentLoading("EMAIL")
        signupMethod({
          username: `${userName}${Math.random()*1000}`,
          password: password,
          name: `${firstName} ${lastName}`,
          first_name: firstName,
          last_name: lastName,
          email: email,
        });
      }
    }
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.white} scrollEnabled>
      <View style={styles.mainViewContainer}>
        <View style={styles.namesContainer}>
          <Input
            value={firstName}
            placeholder={'Primeiro nome'}
            containerStyle={styles.nameInput}
            onChangeText={(text) => setFirstName(text)}
            returnKeyType={'next'}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <Input
            value={lastName}
            ref={lastNameRef}
            placeholder={'Último nome'}
            containerStyle={styles.nameInput}
            onChangeText={(text) => setLastName(text)}
            returnKeyType={'next'}
            onSubmitEditing={() => userNameRef.current.focus()}
          />
        </View>
        <Input
          value={userName}
          ref={userNameRef}
          placeholder={'Nome do usuário'}
          containerStyle={styles.input}
          onChangeText={(text) => setUserName(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          value={email}
          ref={emailRef}
          placeholder={'Email'}
          containerStyle={styles.input}
          onChangeText={(text) => setEmail(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        {/* <Input
          ref={phoneRef}
          value={phone}
          placeholder={'Número de telefone'}
          containerStyle={styles.input}
          onChangeText={(text) => setPhone(text)}
          keyboardType="numeric"
          returnKeyType={'next'}
          onSubmitEditing={() => passwordRef.current.focus()}
        /> */}
        <Input
          value={password}
          ref={passwordRef}
          placeholder={'Senha'}
          secureTextEntry
          containerStyle={styles.input}
          onChangeText={(text) => setPassword(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
        />
        <Input
          value={confirmPassword}
          ref={confirmPasswordRef}
          placeholder={'Confirme a Senha'}
          secureTextEntry
          containerStyle={styles.input}
          onChangeText={(text) => setConfirmPassword(text)}
          returnKeyType={'done'}
        />
        <Button
          isLoading={currentLoading=="EMAIL"?true:false}
          title={'Inscrever-se'}
          containerStyle={styles.button}
          onPress={()=>{
            validate()
          }}
        />
        <View style={styles.signupContainer}>
          <Text style={styles.text}>Já tem uma conta ?{'  '}</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.signupText}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Conecte-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
