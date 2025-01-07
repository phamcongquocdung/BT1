import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IntroductionPage = ({ navigation }) => {
  const [countdown, setCountdown] = useState(10); // Bộ đếm bắt đầu từ 10

  useEffect(() => {
    // Thiết lập bộ đếm lùi
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Giảm 1 sau mỗi giây

    // Khi bộ đếm đạt 0, chuyển sang HomePage
    if (countdown === 0) {
      navigation.replace('HomePage');
    }

    // Dọn dẹp interval khi component unmount hoặc countdown kết thúc
    return () => clearInterval(interval);
  }, [countdown, navigation]);

  return (
    <View style={styles.container}>
      {/* Thêm hình ảnh */}
      <Image 
        source={require('./logo-spk.png')} // Thay bằng URL ảnh hoặc local image
        style={styles.image}
      />
      <Text style={styles.text}>Tôi là Phạm Công Quốc Dũng</Text>
      <Text style={styles.text}>MSSV: 22110123</Text>
      <Text style={styles.text}>NS: 18/10/2004</Text>
      <Text style={styles.countdown}>Chuyển sang HomePage sau: {countdown}s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  image: {
    width: 150, // Chiều rộng ảnh
    height: 150, // Chiều cao ảnh
    borderRadius: 75, // Bo tròn (hình tròn)
    marginBottom: 20, // Khoảng cách dưới ảnh
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333',
  },
  countdown: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff6347',
    marginTop: 20,
  },
});

export default IntroductionPage;
