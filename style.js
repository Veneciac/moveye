import { StyleSheet, Dimensions } from 'react-native'
const win = Dimensions.get('window');

const styles = StyleSheet.create({
   home: {
       backgroundColor: 'black',
       minHeight: win.height,
       flex: 1,
       flexDirection: 'column'
   },
   textWhite: {
       color: 'white'
   },
   thumbn: {
       width: (win.width /2),
       margin: 3,
       height: win.height / 2.8
   },
   card: {
       maxWidth: (win.width / 2 )
   },
   detail: {
       backgroundColor: 'black',
       minHeight: win.height
   },
   detailImg: {
       width: win.width,
       height: win.height - 150
   },
   sliding: {
    width: win.width,
    height: 230,
   }
})

export default styles
