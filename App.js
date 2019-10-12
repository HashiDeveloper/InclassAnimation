import React from 'react';
import { StyleSheet, Text,  View, Image, ScrollView, SafeAreaView, Animated, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Swiper from "react-native-web-swiper";

export default class App extends React.Component {

//********Animation starts Here */
animationSpring = new Animated.Value(0);
animationImage = new Animated.Value(0);
animationView = new Animated.Value(0);
animationText = new Animated.Value(0);
animation1 = new Animated.Value(0);

componentDidMount() {
  Animated.spring(this.animationSpring, {
    toValue: 30,
    speed: 0,
    bounciness: 60,
  }).start()
  Animated.timing(this.animationImage, {
    duration: 5000,
    toValue: 1,
  }).start()
  Animated.timing(this.animation1, {
    duration: 1000,
    toValue: 1,
  }).start()
}
//STAR RATING 
constructor(props) {
  super(props);
  this.state = {
    starCount: 3.5
  };
}
onStarRatingPress(rating) {
  this.setState({
    starCount: rating
  });
}

render() {
  return <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
  {/* IMAGE Slider */}
  <View style={{flex:1}}>
  <View style={{flex:1}}>
  <Swiper
  loop
  timeout={-2.5}
  from={1}
  minDistanceForAction={0.1}
  controlsProps={{
    dotsTouchable: true,
    prevPos: 'left',
    nextPos: 'right',
    nextTitle: '>',
    nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '600' },
    PrevComponent: ({ onPress }) => (
      <TouchableOpacity onPress={onPress}>
      <Text style={{ color: 'red', fontSize: 24, fontWeight: '600' }}>
      {'<'}
      </Text>
      </TouchableOpacity>
      ),
  }}
  >
  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  
  <Image style={{flex:1, width: 300, height: 1000, justifyContent: "center"}}  source={require("./assets/Watch6.png")} />
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  
  <Image style={{flex:1, width: 300, height: 100, justifyContent: "center"}} source={require("./assets/Watch11.png")} />
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Image style={{flex:1, width: 300, height: 100, justifyContent: "center"}} source={require("./assets/Watch12.png")} />
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Image style={{flex:1, width: 300, height: 100, justifyContent: "center"}} source={require("./assets/Watch13.png")} />
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
  <Image style={{flex:1, width: 300, height: 100, justifyContent: "center"}} source={require("./assets/watch49.png")} />
  </View>

  </Swiper>
  </View>
  </View>
{/* ScrollView for the contyent in the page */}
  <ScrollView style={styles.container}>
  <View style={styles.detailsContainer}>
    {/* header image with fade in animation */}
  <Animated.Image style={{...styles.heroImage, opacity: this.animationImage}} source={require("./assets/hero7.png")}>
  </Animated.Image>
  {/* header title bouncing animation */}
  <Animated.Text style={{...styles.titles, top: this.animationSpring}}>LUXURY WATCHES</Animated.Text>
  </View>
  
{/* the container for the list Content */}
  <View style={styles.watchContainer}>
  <Image style={styles.image}
  source={require("./assets/rolex.jpg")} />
  <View>
{/*  360 ROTATION ANIMATION TO THE TEXT */}
<View style={styles.container}>
<Animated.Text style={{
  ...styles.text, 
  transform: [{
    rotate: this.animation1.interpolate ({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
  }],
  opacity: this.animation1
}}>Rolex Platinum</Animated.Text>
</View>
<Text style={styles.subtitle}>Strainless Steal Watch</Text>
<Text style={styles.price}>$CAD 279.99</Text>
<View style={styles.starRating}>
<StarRating
disabled={false}
maxStars={5}
starSize={10}
rating={this.state.starCount}
selectedStar={(rating) => this.onStarRatingPress(rating)}/>
</View>
</View>
</View>
{/* static items */}
<View style={styles.watchContainer}>
<Image style={styles.image}
source={require("./assets/rolex2.jpg")} />
<View>
<Text style={styles.title}>Rolex Black</Text>
<Text style={styles.subtitle}>Strainless Steal Watch</Text>
<Text style={styles.price}>$CAD 221.99</Text>
<View style={styles.starRating}>
<StarRating
disabled={false}
maxStars={5}
starSize={10}
rating={this.state.starCount}
selectedStar={(rating) => this.onStarRatingPress(rating)}/>
</View>
</View>
</View>

<View style={styles.watchContainer}>
<Image style={styles.image}
source={require("./assets/rolex3.jpg")} />
<View>
<Text style={styles.title}>Rolex Green</Text>
<Text style={styles.subtitle}>Strainless Steal Watch</Text>
<Text style={styles.price}>$CAD 269.99</Text>
<View style={styles.starRating}>
<StarRating
disabled={false}
maxStars={5}
starSize={10}
rating={this.state.starCount}
selectedStar={(rating) => this.onStarRatingPress(rating)}/>
</View>
</View>
</View>

<View style={styles.watchContainer}>
<Image style={styles.image}
source={require("./assets/humbolt.jpg")} />
<View>
<Text style={styles.title}>Hublot Gold </Text>
<Text style={styles.subtitle}>Leather band Watch</Text>
<Text style={styles.price}>$CAD 319.99</Text>
<View style={styles.starRating}>
<StarRating
disabled={false}
maxStars={5}
starSize={10}
rating={this.state.starCount}
selectedStar={(rating) => this.onStarRatingPress(rating)}/>
</View>
</View>
</View>
</ScrollView>
</SafeAreaView>
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  detailsContainer: {
    paddingVertical: 50,
    paddingHorizontal: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    backgroundColor: 'transparent',
    position: 'relative',
  },
  titles: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    color: 'red',
    fontWeight: "800",
    marginBottom: 2,
    paddingHorizontal: 80,
    paddingVertical: 5,
    position: 'absolute',
    top: 10,
    shadowOpacity: 0.3,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 4,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  
  watchContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: 'black',
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    shadowOpacity: 1,
  },
  watchContainer1: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 3,
    borderColor: 'black',
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    shadowOpacity: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 3
  },
  price: {
    color: 'green',
    fontSize: 25,
    paddingHorizontal: 20,
  },
  heroImage: {
    backgroundColor: 'transparent',
    height: 230,
    width: null,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',  
  },
  starRating: {
    width: 160,
    height: 15,
    paddingLeft: 22,
    top: 20,
  },
  text: {
    color: 'red',
    fontSize: 25,
  },
});
