import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    page: {
      flex: 1,
      padding: 10,
    },
    ShoppingCartContainer: {
      flexDirection: "row",
      // backgroundColor: "blue",
      position: "absolute",
      right: 15,
      bottom: 10,
      alignItems: "flex-start",
      margin: 10,
      opacity: 0.9,
    },
    ShoppingCartButton: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      // paddingVertical: 14,
      // marginTop: -20,
      width: 60,
      height: 60,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: "#2E5DB5", //F19536
    },
    ShoppingCartText: {
      fontSize: 19,
      lineHeight: 21,
      fontWeight: "500",
      letterSpacing: 0.25,
      color: "white",
    },
    ShoppingCartNotification: {
      paddingVertical: 2,
      width: 20,
      borderRadius: 100,
      // elevation: 3,
      // marginTop: -40,
      marginLeft: -20,
      backgroundColor: "red", //F19536
    },
    ShoppingCartNotificationText: {
      fontSize: 13,
      // lineHeight: 21,
      fontWeight: "600",
      alignSelf: "center",
      color: "white",
      // marginBottom: -25,
    },
  });
export default styles;