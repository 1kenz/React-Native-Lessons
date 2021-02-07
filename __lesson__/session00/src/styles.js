import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      margin: 20,
      borderRadius: 5,
    },
    images: {
      width: Dimensions.get('window').width * 0.3,
      height: Dimensions.get('window').height * 0.15,
      resizeMode: 'contain',
    },
    textTitle: {
      fontSize: 15,
      marginBottom: 15,
    },
    text: {
      fontSize: 20,
      flex: 2,
      fontWeight: 'bold',
      marginLeft: 18,
      alignSelf: 'center',
    },
    button: {
      flex: 1,
      fontSize: 12,
      fontWeight: 'bold',
      alignSelf: 'center',
      alignContent: 'center',
      borderColor: '#3d5a80',
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center',
      backgroundColor: '#3d5a80',
    },
  });

  export default styles;