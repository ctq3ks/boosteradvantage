
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: "#fff",
    },
    headerTitle: {
      color: "#2E5DB5",
      fontSize: 22,
      fontWeight: "500",
      paddingVertical: 6,
      textAlign: "center",
      shadowOffset: {
        height: 0.5,
        width: 0.5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
    ScheduleContainer: {
      flex: 1,
      flexDirection: "column",
      // flexWrap: "wrap",
      // marginTop: 8,
      // marginHorizontal: 20,
      backgroundColor: "white",
    },
    ScheduleDates: {
      backgroundColor: "#2E5DB5",
      flexDirection: "row",
      opacity: 0.95,
      // marginHorizontal: 12,
      // marginVertical: 8,
      // borderBottomColor: "gray",
      // borderTopWidth: 1,
      padding: 8,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    ScheduleDatesText: {
      fontSize: 18,
      fontWeight: "400",
      color: "white",
      alignSelf: "center",
      justifyContent: "center",
    },
  
    GameContainer: {
      backgroundColor: "#fff",
      // borderRadius: 2,
      // elevation: 4,
      flexDirection: "row",
      alignContent: "space-between",
      // marginHorizontal: 12,
      // marginVertical: 8,
      // borderBottomColor: "gray",
      // borderBottomWidth: 1,
      padding: 8,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    GameContainerInfo: {
      fontSize: 16,
      flex: 6,
      alignSelf: "center",
      justifyContent: "center",
    },
    GameContainerGameText: {
      fontSize: 20,
      fontWeight: "300",
      alignSelf: "center",
      justifyContent: "center",
      marginTop: 3,
      marginBottom: 2,
    },
    GameContainerLocationText: {
      fontSize: 16,
      fontWeight: "300",
      alignSelf: "center",
      justifyContent: "center",
    },
    GameContainerTimeText: {
      fontSize: 18,
      fontWeight: "300",
      alignSelf: "center",
      justifyContent: "center",
    },
    GameHomeContainer: {
      justifyContent: "center",
      flexDirection: "column",
      alignContent: "space-between",
      flex: 1,
    },
    GameAwayContainer: {
      justifyContent: "center",
      flex: 1,
    },
    HomeLogo: {
      width: 50,
      height: 45,
    },
    AwayLogo: {
      width: 50,
      height: 45,
    },
    HomeAwayText: {
      fontSize: 10,
      fontWeight: "300",
      alignSelf: "center",
      justifyContent: "center",
    },
  });
  
  export default styles;
  