import React from 'react';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image } from 'react-native';

import { styles } from "./styles";


export function GuildIcon() {
  const uri = 'http://pm1.narvii.com/6427/1aa160baa0c1d44c5b3350999ef2b66abba6be41_00.jpg';

  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode='cover'
    />
  );
}
