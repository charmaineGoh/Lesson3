import React ,{useState} from 'react';
import {TextInput, Text, View, Button, Alert, TouchableOpacity, ToastAndroid, } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox=({label,onChangeText})=>{
    return (
        <View>
           <Text>{label}</Text>
            <TextInput style={{borderWidth:1}} onChangetext={onChangeText}/>

        </View>
    );
};



const MyApp = () => {
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    return (
        <View style={{padding: 20, paddingTop: 50}}>

            {/*Exercise 1B*/}
            <Text>User Type:</Text>
            <RNPickerSelect onValueChange={(value) => setPw(value)}
                            items={[
                                {label: 'Admin', value: 'Admin'},
                                {label: 'Guest', value: 'Guest'},
                                {label: 'User', value: 'User'},
                            ]}
            />

            {/*Exercise 1G*/}
            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
            <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>
            <TouchableOpacity onPress={() =>
                ToastAndroid.show('Welcome' + type + '' + name, ToastAndroid.SHORT)}>
                <Text>Log in</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );


    {/* Exercise 1A */}
    <Text>Password:</Text>
    <TextInput
        style={{ borderWidth: 1 }}
    />



          {/*Exercise 1C & D*/}
          <Button
              title="Submit Answers"
              onPress={()=>Alert.alert("meow")}
              />

          {/*Exercise 1E*/}
          <TouchableOpacity
              onPress={()=>Alert.alert("Welcome")}>
              <Text>Submit Answers</Text>
          </TouchableOpacity>

          {/*Exercise 1F*/}
          <TouchableOpacity
              onPress={()=>ToastAndroid.show(ToastAndroid.SHORT)}>
              <Text>lOG IN</Text>
              </TouchableOpacity>

      </View>
  );
}

export default MyApp;





