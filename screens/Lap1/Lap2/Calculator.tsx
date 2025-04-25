import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isDark, setIsDark] = useState(false);

  const handlePress = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '⌫') {
      setExpression(expression.slice(0, -1));
    } else if (value === '+/-') {
      if (expression) {
        if (expression[0] === '-') {
          setExpression(expression.slice(1));
        } else {
          setExpression('-' + expression);
        }
      }
    } else if (value === '%') {
      try {
        const val = eval(expression);
        setResult((val / 100).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setExpression(expression + value);
    }
  };

  const buttons = [
    ['C', '⌫', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '='],
  ];

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <View style={styles.switchContainer}>
        <Entypo name="light-up" size={24} color={isDark ? '#bbb' : '#333'} />
        <Switch value={isDark} onValueChange={() => setIsDark(!isDark)} />
        <Entypo name="moon" size={24} color={isDark ? '#bbb' : '#333'} />
      </View>

      <Text style={[styles.expression, isDark && styles.darkText]}>{expression || '0'}</Text>
      <Text style={[styles.result, isDark && styles.darkText]}>{result}</Text>

      <View style={styles.buttonGrid}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((btn, btnIndex) => (
              <TouchableOpacity
                key={btnIndex}
                style={[styles.button, isDark && styles.darkButton]}
                onPress={() => handlePress(btn)}
              >
                <Text style={[styles.buttonText, isDark && styles.darkText]}>
                  {btn === '⌫' ? <Feather name="delete" size={20} /> : btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#111',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  expression: {
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 5,
    color: '#000',
  },
  result: {
    fontSize: 36,
    textAlign: 'right',
    marginBottom: 20,
    color: '#000',
  },
  darkText: {
    color: '#ddd',
  },
  buttonGrid: {
    flexDirection: 'column',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkButton: {
    backgroundColor: '#444',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
