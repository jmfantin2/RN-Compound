import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './src/components/Wizard';
import Input from './src/components/Input';

const forms = [
  {
    placeholder: 'Username here...',
    name: 'username',
  },
  {
    placeholder: 'Email here...',
    name: 'email',
  },
  {
    placeholder: 'Avatar here...',
    name: 'avatar',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <Wizard
          initialValues={{
            username: '',
            email: '',
            avatar: '',
          }}
        >
          {forms.map(el => (
            <Wizard.Step key={el.name}>
              {({ onChangeValue, values }) => (
                <View style={styles.container}>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder={el.placeholder}
                    value={values[el.name]}
                    name={el.name}
                  />
                </View>
              )}
            </Wizard.Step>
          ))}
        </Wizard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});