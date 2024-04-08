import { StyleSheet, Dimensions } from 'react-native';

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
  header: {
    height: height * 0.11,
    backgroundColor: '#131314',
    borderBottomWidth: 1,
    borderBottomColor: '#323235',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerTxt: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 30,
    color: 'white'
  }
})



export default styles;