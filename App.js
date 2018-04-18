import React from 'react';
import { 
  Animated, Text, View, Image, TouchableOpacity, ImageBackground, TextInput, StyleSheet,
} from 'react-native';

class FadeInView extends React.Component {
  constructor(props){
    
    super(props)

    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      timePassed: false,
    };
  }


  _handleLoginPress = () => {
    Alert.alert("ورود شما انجام نشد :)");
  };

  render() {
    setTimeout(function(){this.setState({timePassed: true});}.bind(this), 2500);
    if (!this.state.timePassed){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView>
          <Image
            source={require("./assets/startbackground.png")}
            style={{ height: 200, width: 200 }}
          />
        </FadeInView>
      </View>
      );
    }else{
      return (
        <ImageBackground style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}  source={require("./assets/background.png")}>
          <TextInput
            value={this.state.nameValue}
            onChangeText={this._handleNameChange}
            style={{ width: 200, height: 44, padding: 8, textAlign :'center', marginBottom:10, }}
            placeholder= 'ایمیل'
            placeholderTextColo='#bababa'
          />

          <TextInput
            value={this.state.secretValue}
            onChangeText={this._handleSecretChange}
            style={{ width: 200, height: 44, padding: 8, textAlign :'center', marginTop:10, marginBottom:20 }}
            secureTextEntry={true}
            placeholder='رمز ورود'
            placeholderTextColo='#bababa'
          />
                      
            <TouchableOpacity style={styles.button}
						  onPress={() => this._handleLoginPress()}
						  activeOpacity={1} >
                <ImageBackground style={styles.button} source={require("./assets/login.png")}>
								  <Text>ورود</Text>
                </ImageBackground>
					</TouchableOpacity>
          </ImageBackground>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
		justifyContent: 'center',
    zIndex: 100,
    height: 37.5,
    width: 75,
  },
});

/*
render() {
    setTimeout(function(){this.setState({timePassed: true})}, 1000);
    if (!this.state.timePassed){
      return <LoadingPage/>;
    }else{
      return (
        <NavigatorIOS
          style = {styles.container}
          initialRoute = {{
            component: LoginPage,
            title: 'Sign In',
          }}/>
      );
    }
*/

/*
render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <FadeInView>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png' }}
            style={{ height: 200, width: 200 }}
          />
        </FadeInView>
      </View>
    )
  }
*/
 