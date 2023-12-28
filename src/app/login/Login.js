import {Button, Text, TextInput, View} from 'react-native';
import {login, logout} from './LoginSlice';
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  // const store = {
  //   myLogin: {
  //     loginStatus: false,
  //   },
  // };

  const loginStatus = useSelector(store => store.myLogin.loginStatus);

  console.log('myLogin Status', loginStatus);
  return (
    <View>
      <TextInput placeholder="Enter your email address" />
      <TextInput placeholder="Enter your password" />
      <Text>
        Login status:{' '}
        {loginStatus ? <Text>Login Success</Text> : <Text>Please Login</Text>}
      </Text>
      <Button
        title="Login"
        onPress={() => dispatch(login({email: 'wyma@gmail.com'}))}
      />
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Login;
