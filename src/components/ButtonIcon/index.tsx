import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  textButton: string;
}

export function ButtonIcon({ textButton, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.textButton}>
        {textButton}
      </Text>
    </TouchableOpacity>
  );
}
