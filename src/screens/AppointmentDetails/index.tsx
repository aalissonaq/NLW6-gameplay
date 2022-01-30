import React from 'react';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';


import { styles } from './styles';

import BannerImg from './../../assets/banner.png'
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';


export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Alisson',
      avatar_url: 'https://github.com/aalissonaq.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Alisson',
      avatar_url: 'https://github.com/aalissonaq.png',
      status: 'Offline',
    },
  ]

  return (
    <Background>
      <Header title="Detalhes"
      />
      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          <Text style={styles.description}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <FlatList
        data={members}
        keyExtractor={member => member.id}
        renderItem={({ item }) => (
          <Member
            data={item}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.member}
      >
      </FlatList>

      <View style={styles.footer}>
        <ButtonIcon textButton={"Entrar na Partida"} />
      </View>
    </Background>
  );
}
