import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';

import { styles } from './styles';



export function AppointmentCreate() {
  const [category, setCategory] = useState('')

  return (
    <Background>
      <Header title="Agende uma partida"
      />
      <Text style={styles.label}>
        Categoria
      </Text>
      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelect={category}
      />

    </Background>
  );
}
