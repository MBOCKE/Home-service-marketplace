import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <LinearGradient
      colors={['#FFD560', '#FFFDF5']}
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>HS</Text>
        <Text style={styles.subBrand}>Market Place</Text>
      </View>

      <View style={styles.arcContainer}>
        {/* Semi-transparent yellow arc for visual effect */}
        <View style={styles.arc} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>sign up</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(16, 48, 70, 0.7)"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(16, 48, 70, 0.7)"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(16, 48, 70, 0.7)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(16, 48, 70, 0.7)"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    fontWeight: '900',
    color: '#103046',
    fontFamily: 'Montserrat-Black', // Assuming Montserrat is available
  },
  subBrand: {
    fontSize: 24,
    fontWeight: '500',
    color: '#103046',
    fontFamily: 'Montserrat-Medium',
  },
  arcContainer: {
    position: 'absolute',
    top: height * 0.35,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arc: {
    width: width * 1.2,
    height: 100,
    backgroundColor: 'rgba(255, 213, 96, 0.3)', // Semi-transparent yellow
    borderRadius: 50,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#103046',
    marginBottom: 16,
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#103046',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Glassmorphism effect
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#103046',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Montserrat-Bold',
  },
  signupButton: {
    width: width * 0.6,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#103046',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#103046',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  signupButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
});
