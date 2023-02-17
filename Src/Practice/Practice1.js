import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import AppPicker from '../Components/AppPicker';
import AppTextInput from '../Components/AppTextInput';

function Practice1(props) {
  const [pr, setPr] = useState(false);
  const [category, setCategory] = useState();
  const item = [
    {
      label: 'lable 1',
      value: 1,
    },
    {
      label: 'lable 2',
      value: 2,
    },
    {
      label: 'lable 3',
      value: 3,
    },
  ];
  return (
    <View>
      {/* <TextInput
          placeholder="This Is A text Input"
          style={{borderBottomColor: '#ccc', borderBottomWidth: 1}}
        /> */}
      <AppTextInput icon={'email'} placeholder={'Username'} />
      <Switch value={pr} onValueChange={pr => setPr(pr)} />
      <AppPicker
        icon={'apps'}
        placeholder={'Category'}
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        itemtoRender={item}
      />
    </View>
  );
}

export default Practice1;
