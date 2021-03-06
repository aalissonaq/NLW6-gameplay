import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Profile } from '../../components/Profile';
import { CategorySelect } from '../../components/CategorySelect';
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "./../../components/ListHeader";
import { Appointment } from "./../../components/Appointment";
import { ListDivider } from "./../../components/ListDivider";

import { Background } from './../../components/Background';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

const appointments = [
  {
    id: '1',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/03 as 20:40h ',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  },
  {
    id: '2',
    guild: {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    },
    category: '1',
    date: '22/03 as 20:40h ',
    description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  }
]
export function Home() {
  const [category, setCategory] = useState('')

  const navigation = useNavigation();

  function handlerCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handlerAppointmentDetails() {
    navigation.navigate('AppointmentDetails');

  }

  function handlerAppointmentCreate() {
    navigation.navigate('AppointmentCreate');

  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handlerAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelect={category}
        setCategory={handlerCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 6"
        />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={handlerAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>

  );
}
