import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedTime = localTime.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    
  });

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    alignItems: 'center',
    marginBottom: 100,
  
  },
  
  footerText: {
    color: 'black',
    textAlign: 'right',
  },
});

export default Footer;