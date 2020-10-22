/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/*TODO HTML attribute style=""
/*TODO RN attribute style={}
/* TODO attribute = {}
/* camelCase kullanılıyor
*/
/**
 * HTML
 * style=""
 * 
 *! RN
 *! attribute={{}}
 * camelCase kullanılıyor
 * 
 *   <View style={{
  backgroundColor:"purple",
  padding:10,
  margin:20,
}
}>
<Text style={{
  color:"white",
}
}>CLARUSWAY!</Text>
</View>
* 
* 
*/

import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent';
const App = () => {
  // return null;
  const my_name = 'xkendx';

  // function myFunction(){
  //   return <Text>Hello Clarusway!</Text>;
  // }

  const isAdmin = true;
  function myFunction() {
    const isAdmin = true;
    
      // if(isAdmin){
      //     return <Text>Admin kullanıcısı</Text>;
      //   }
      //   else {
      //       return <Text>Normal kullanıcısı</Text>;
      //     }
      //   }
        
        // if (isAdmin) return <Text>Admin kullanıcısı</Text>;
        
        // return <Text>Normal kullanıcı</Text>;

        // if (isAdmin) {
        //   return <Text>Admin kullanıcısı</Text>;
        // }
        // else return null;
        
        // ternary
        return isAdmin ?  <Text>Admin kullanıcısı</Text> : null
      }

  function myFunction1(userName){
    return <Text>{userName}</Text>;
  }

  function myFunction2(){
    const myArray = ["İzmir", "İstanbul", "Ankara", "Adana"];

    return myArray.map((city) => {
      
      return <Text>{city}</Text>;
    });
  }

  return (
    //s <SafeAreaView>  // IOS ta kullanılıyor. çentikli yapı için verileri aşağıya alır
    <>
      <View style={styles.container}>
        <Text style={styles.text}>CLARUSWAY!</Text>
      </View>

      {/* değişken/ işlem tanımlama {değişken_adı} {2+5} */}
      <MyComponent />
      <Text style={styles.hello}>Merhaba {my_name}</Text>
      <Text style={styles.hello}>Sonuç:  {4 + 5}</Text>
      
      {/* func çalıştırma "return" edilen değer gelir "return" yoksa yada component yapısına uymuyorsa hata alırız yada ekranda birşey görülmez
      */}
      {/* birden fazla Text vs. yapı kullanılacaksa View ile sarmalanmalı ve bir component yapısı oluşturulmalıdır (sadece bir adet ana component değer döndürülür) style vs. yapılmayacak ise fragment yapısı da kullanılabilir <></> */}
      {/* regular yada arrow func kullanılabilir */}
      {/* Component isimlerinin ilk harfi büyük olmalı */}
      {myFunction()}
      {myFunction1("Kenan")}
      {myFunction2()}
      
      {/* if yazılmaz ama ternary yazılabilir  */}
      {isAdmin ?  <Text>Admin kullanıcısı</Text> : null}  
      
      {/* and operator */}
      {isAdmin && <Text>Admin kullanıcısı</Text>}  
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hello: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default App;
