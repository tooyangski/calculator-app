import * as React from 'react';
import Button from './Button';
import { View, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { myColors } from '../styles/Colors';
import { romanize } from '../helpers/numberHelper';

interface KeyBoardProps {
  isRomanized: boolean;
}

export default function MyKeyboard(props: KeyBoardProps) {
  const { isRomanized } = props;
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {isRomanized ? romanize(result?.toString()) : result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: 'purple', fontSize: 50, fontWeight: '500' }}>
            {operation}
          </Text>
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={Styles.row}>
        <Button title='C' isGray onPress={clear} />
        <Button
          title='+/-'
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title='％' isGray onPress={() => handleOperationPress('％')} />
        <Button title='÷' isBlue onPress={() => handleOperationPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button
          title={isRomanized ? romanize('7') : '7'}
          onPress={() => handleNumberPress('7')}
        />
        <Button
          title={isRomanized ? romanize('8') : '8'}
          onPress={() => handleNumberPress('8')}
        />
        <Button
          title={isRomanized ? romanize('9') : '9'}
          onPress={() => handleNumberPress('9')}
        />
        <Button title='×' isBlue onPress={() => handleOperationPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button
          title={isRomanized ? romanize('4') : '4'}
          onPress={() => handleNumberPress('4')}
        />
        <Button
          title={isRomanized ? romanize('5') : '5'}
          onPress={() => handleNumberPress('5')}
        />
        <Button
          title={isRomanized ? romanize('6') : '6'}
          onPress={() => handleNumberPress('6')}
        />
        <Button title='-' isBlue onPress={() => handleOperationPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button
          title={isRomanized ? romanize('1') : '1'}
          onPress={() => handleNumberPress('1')}
        />
        <Button
          title={isRomanized ? romanize('2') : '2'}
          onPress={() => handleNumberPress('2')}
        />
        <Button
          title={isRomanized ? romanize('3') : '3'}
          onPress={() => handleNumberPress('3')}
        />
        <Button title='+' isBlue onPress={() => handleOperationPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title='.' onPress={() => handleNumberPress('.')} />
        <Button title='0' onPress={() => handleNumberPress('0')} />
        <Button
          title='⌫'
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title='=' isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
