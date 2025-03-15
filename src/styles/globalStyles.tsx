import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  allcontainer:{
    position:'absolute',
    width:'100%',
    height:'100%',
  },
  buttonContainer: {
    alignItems:'center',
    marginTop:'3%',
    marginBottom:'3%'
  },
  title: {
    fontSize: 16,
    marginBottom:'1%',
    fontFamily: 'AlbertSans-Black'
  },
  centeredContent:{
    alignItems:'center',
    marginBottom:5,
    marginTop:5,
    padding:5
  },
  text: {
    fontSize: 14,
    marginTop:'1%',
    marginBottom:'1%',
    fontFamily:'AlbertSans-Regular'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color:'rgb(0, 0, 0)'
  },


  
  testImg:{
    width:'100%',
    height:200,
    resizeMode:'stretch',
    borderRadius: 20,

  }

});