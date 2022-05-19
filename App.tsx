import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isRomanized, setRomanize] = useState(false);

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, { backgroundColor: 'black' }]
        }
      >
        <Switch
          value={theme === 'dark'}
          onValueChange={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
            setRomanize(isRomanized === false ? true : false);
          }}
        />
        <MyKeyboard isRomanized={isRomanized} />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
