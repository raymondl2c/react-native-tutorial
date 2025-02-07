import { StatusBar } from "expo-status-bar";
import { View, Platform, FlatList, Text } from "react-native";
import { useCart } from "@providers/CartProvider";
import CartListItem from "@components/CartListItem";
import Button from "@components/Button";

const CartScreen = () => {
  const { items, total } = useCart();

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap: 10 }}
      />

      <Text style={{ margin: 10, fontSize: 15, fontWeight: 500 }}>
        Total: ${total}
      </Text>

      <Button text="Checkout" />

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
