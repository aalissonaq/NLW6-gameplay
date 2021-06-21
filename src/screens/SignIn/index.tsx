import React, { useState } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';

import { styles } from "./styles";
import { ButtonIcon } from '../../components/ButtonIcon';
import Illustration from "../../assets/illustration.png";

export function SignIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={Illustration}
        style={styles.illustration}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{`\n`}
          e organize suas{`\n`}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon
          textButton="Entrar com Discord"
          activeOpacity={0.7}
        />

      </View>

    </View>
  );
}
