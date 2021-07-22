import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { BigNavItem } from "./BigNavItem";

interface BigNavMenuProps {
  // [index: number] : <typeof BigNavItem>,
  menuItems: [];
  // TODO later make to type of BigNavItem array
}

export const BigNavMenu = ({ menuItems, ...props }: BigNavMenuProps) => {
  // iterating over array of menuitems with map

  const bigNavMenuArr = menuItems.map((menuItem) => {
    return <BigNavItem icon={menuItem.icon} label={menuItem.label} />;
  });
  // return bigNavMenuArr;
  return <View style={styles.navMenu}>{bigNavMenuArr}</View>;

  // using flatlist

  // return (
  //   <View style={styles.navMenu}>
  //     <FlatList
  //       data={menuItems}
  //       renderItem={({ item }) => (
  //         <BigNavItem icon={item.icon} label={item.label} />
  //       )}
  //       horizontal={true}
  //     />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  flatlist: {
    color: "black",
  },
  navMenu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // height: 400,
  },
});

export default BigNavMenu;
