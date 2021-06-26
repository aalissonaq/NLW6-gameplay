import React from 'react'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from 'react-native'

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "./../Category";
import { theme } from '../../global/styles/theme';

type Props = {
  categorySelect: string,
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}
export function CategorySelect({
  categorySelect,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelect}
          onPress={() => setCategory(category.id)}
          hasCheckBox={hasCheckBox}
        />
      ))
      }

    </ScrollView>
  );
}
