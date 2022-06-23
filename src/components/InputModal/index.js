import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Keyboard,
  Image,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import Button from '../../components/Button';
import {height, width} from 'react-native-dimension';
import Entypo from 'react-native-vector-icons/Entypo';
import AppColors from '../../utills/AppColors';
import Input from '../../components/CommentInput';
import axios from 'axios';
const Profile = require('../../assets/images/Profile.jpeg');
const index = ({isVisible, closeModal, allComments, addComment,name,users}) => {
  const [message, setMessage] = useState('');
  const [tips, setTips] = useState([...allComments]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [keyboardShow, setKeyboardShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState('');
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null)
  const mountData = async()=>{
    try{
      // const res = await getAllComments()
      // console.log(res);
    }
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    let mount = true
    if(mount){
      mountData()
    }
    return ()=> mount=false
  },[tips])
  const renderItem = ({item, index}) => {
    return (
      item && (
        <View style={styles.tipContainer}>
          <View style={styles.textContainer}>
            <Image
              source={{uri: item?.author_avatar_urls['24']}}
              style={styles.profileImage}
            />
            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.nameText}>{item.author_name}</Text>
                <Text style={styles.tipText}>
                  {(item?.content?.rendered).split('<p>')[1].split('</p>')[0]}
                </Text>
              </View>
              {/* <TouchableOpacity
                onPress={() => {
                  setMessage(item);
                  inputRef.current.focus();
                  setTimeout(() => setEdit(true), 100);
                  setTimeout(() => setEditIndex(index), 100);
                }}
                activeOpacity={0.6}
                style={styles.editContainer}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      )
    );
  };
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isVisible}
      onBackButtonPress={closeModal}
      avoidKeyboard={true}
      style={[
        styles.modal,
        {padding: 0, margin: 0, justifyContent: 'flex-end'},
      ]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => closeModal()} style={styles.crossIcon}>
          <Entypo
            color={AppColors.primary}
            name={'circle-with-cross'}
            size={width(8)}
          />
        </TouchableOpacity>
        <FlatList
          ref = {listRef}
          data={tips}
          keyExtractor={(item)=>item.id+(Math.random()*100)}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          scrollEnabled
        />
        <View style={styles.footerContainer}>
          <Input
            ref={inputRef}
            textAlignVertical={'top'}
            placeholder={'Escreva um comentário aqui'}
            multiline={true}
            value={message}
            setText={(text) => {
              setMessage(text);
            }}
            inputStyle={{height: height(12), fontSize: width(3.3)}}
            inputContainerStyles={{height: height(16)}}
          />
          <Button
            isLoading={isLoading}
            title="Publicar"
            textStyle={styles.loginText}
            containerStyle={styles.button}
            onPress={async () => {
              setIsLoading(true);
              Keyboard.dismiss();
              if (message.trim().length > 0 && !edit) {
                await addComment(users,message);
                let newComment = {
                  "id": 7186,
                  "author_name": name,
                  "content": {
                  "rendered": `<p>${message}</p>\n`
                  },
                  "author_avatar_urls": {
                  "24": "https://secure.gravatar.com/avatar/84676e8ff71b1de16230909fb5e50803?s=24&d=mm&r=g",
                  "48": "https://secure.gravatar.com/avatar/84676e8ff71b1de16230909fb5e50803?s=48&d=mm&r=g",
                  "96": "https://secure.gravatar.com/avatar/84676e8ff71b1de16230909fb5e50803?s=96&d=mm&r=g"
                  },
                };
                setTips([...tips, newComment]);
                listRef.current.scrollToEnd()
                setIsLoading(false);
                setMessage('');
                }
              // else if(message.trim().length >0){
              //   const copyTipsArray = tips.slice()
              //   copyTipsArray[editIndex] = message
              //   setTips(copyTipsArray)
              //   setTimeout(()=>setMessage(""),100)
              //   setTimeout(()=>setEdit(false),100)
              //   Keyboard.dismiss()
              // }
            }}>
            </Button>
        </View>
      </View>
    </Modal>
  );
};

export default index;
