import { View, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { removeToken } from "../../services/AsyncStorageService";
import { useSelector } from "react-redux";
import { unSetUserInfo } from "../../features/userSlice";
import { unsetUserToken } from "../../features/authSlice";
const SideBar = ({ ...props }) => {
  const handleLogout = async () => {
    unSetUserInfo({ email: "", name: "" });
    unsetUserToken({ token: null });
    await removeToken("token");
    navigation.navigate("Нэвтрэх");
  };

  const navigation = useNavigation();
  const myData = useSelector((state) => state.user);
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: "bold" }}>
          {myData.name}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>{myData.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Гарах" onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};

export default SideBar;
