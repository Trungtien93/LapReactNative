import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Button, useColorScheme, TouchableWithoutFeedback } from 'react-native';

const buttons = [
  ['sin(', 'cos(', 'tan(', '|x|', 'x²'], // Hàng ẩn khi Dev Mode tắt
  ['^', '√', '(', ')', 'log'],          // Hàng ẩn khi Dev Mode tắt
  ['C', '⌫', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['Mode', '0', '.', '='],
];

const Calculator = () => {
  const systemTheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
  const [isDevMode, setIsDevMode] = useState(false); // Trạng thái Dev Mode
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState<string[]>([]); // Lưu lịch sử tính toán
  const [isHistoryVisible, setIsHistoryVisible] = useState(false); // Hiển thị lịch sử tính toán
  const [isModeDialogVisible, setIsModeDialogVisible] = useState(false); // Hiển thị menu Mode

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handlePress = (buttonText: string) => {
    if (buttonText === 'C') {
      setExpression('');
    } else if (buttonText === '⌫') {
      setExpression(prev => prev.slice(0, -1));
    } else if (buttonText === '=') {
      calculateResult();
    } else if (buttonText === '√') {
      setExpression(prev => prev + 'sqrt(');
    } else if (buttonText === 'x²') {
      setExpression(prev => prev + '^2');
    } else if (buttonText === 'Mode') {
      setIsModeDialogVisible(true); // Hiển thị menu Mode
    } else {
      setExpression(prev => prev + buttonText);
    }
  };

  const calculateResult = () => {
    try {
      let expr = expression
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/cot\(/g, '1/Math.tan(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/\^2/g, '**2')
        .replace(/%/g, '/100');

      const result = eval(expr);
      setHistory([...history, `${expression} = ${result}`]); // Thêm vào lịch sử
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearHistory = () => setHistory([]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#FFFFFF' }]}>
      {/* Nút lịch sử */}
      <TouchableOpacity style={styles.historyButton} onPress={() => setIsHistoryVisible(true)}>
        <Text style={{ fontSize: 18, color: isDarkMode ? '#FFFFFF' : '#000000' }}>Lịch sử</Text>
      </TouchableOpacity>

      {/* Modal lịch sử */}
      <Modal visible={isHistoryVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setIsHistoryVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                {history.map((item, index) => (
                  <Text key={index} style={{ fontSize: 16, marginBottom: 8, color: isDarkMode ? '#FFFFFF' : '#000000' }}>
                    {item}
                  </Text>
                ))}
              </ScrollView>
              <Button title="Xóa lịch sử" onPress={clearHistory} />
              <Button title="Đóng" onPress={() => setIsHistoryVisible(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal Mode */}
      <Modal visible={isModeDialogVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setIsModeDialogVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Button title={isDarkMode ? 'Tắt chế độ tối' : 'Bật chế độ tối'} onPress={toggleTheme} />
              <Button
                title={isDevMode ? 'Tắt Dev Mode' : 'Bật Dev Mode'}
                onPress={() => {
                  setIsDevMode(!isDevMode);
                  setIsModeDialogVisible(false);
                }}
              />
              <Button title="Đóng" onPress={() => setIsModeDialogVisible(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Màn hình hiển thị */}
      <View style={[styles.resultContainer, { backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5' }]}>
        <Text style={[styles.resultText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]} numberOfLines={2}>
          {expression || '0'}
        </Text>
      </View>

      {/* Bàn phím */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => {
          // Ẩn hai hàng đầu tiên nếu Dev Mode tắt
          if (!isDevMode && rowIndex < 2) return null;
          return (
            <View key={rowIndex} style={styles.row}>
              {row.map((button, colIndex) => (
                <TouchableOpacity
                  key={colIndex}
                  style={[
                    styles.button,
                    button === '=' && styles.equalsButton,
                    button === 'C' && styles.clearButton, // Màu đỏ cho nút C
                    ['+', '-', '*', '/', '=', 'Mode'].includes(button) && styles.operatorButton, // Màu vàng cho các nút phép toán và Mode
                  ]}
                  onPress={() => handlePress(button)}
                >
                  <Text style={[styles.buttonText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  historyButton: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    alignItems: 'center',
  },
  resultContainer: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
    minHeight: 150,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  resultText: {
    fontSize: 40,
    textAlign: 'right',
    color: '#000000',
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#FF4C4C', // Màu đỏ cho nút C
  },
  operatorButton: {
    backgroundColor: '#FF9933',// vàng cho các nút phép toán và Mode
  },
});

export default Calculator;
