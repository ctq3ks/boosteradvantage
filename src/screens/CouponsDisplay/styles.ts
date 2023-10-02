import { faBlackboard, faGreaterThanEqual } from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  HeaderContainer: {
    backgroundColor: "#fff",
    // opacity: .90,
    alignItems: "flex-end",
    paddingRight: 10,
    justifyContent: "flex-end",
  },

    headerContainer: {
      backgroundColor: "#fff",
      // opacity: .90,
    },
    headerTitle: {
      color: "#2E5DB5", //marginTop: 3,
      // marginBottom: 4,
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
    scrollviewcontainer: {
      // flex: 1,
    },
    BusinessContainer: {
      backgroundColor: "#fff",
      borderRadius: 2,
      elevation: 4,
      flexDirection: "column",
      marginHorizontal: 12,
      marginVertical: 8,
      padding: 8,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    TopSectionBusinessContainer: {
      flexDirection: "row",
      // backgroundColor: "yellow",
      padding: 8,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
    TopSectionBusinessTextContainer: {
      padding: 12,
      // backgroundColor: "red",
      justifyContent: "center",
      // flexDirection: "space-between",
    },
    CouponsContainer: {
      // flexDirection: "column",
      // flex: 1,
      // flexDirection: "column",
      // backgroundColor: "blue",
    },
    CouponItemContainer: {
      // flex: 1,
      flexDirection: "row",
      borderTopColor: "black",
      borderTopWidth: 1,
      // flexDirection: 'column',
      // alignContent: 'center',
      // backgroundColor: "red",
      flex: 1,
      // flexDirection: 'row',
      // justifyContent: 'center',
      justifyContent: "space-between",
    },
    CouponItemContainerDescription: {
      flex: 4,
      margin: 15,
      // backgroundColor: "blue",
    },
    CouponItemContainerExpiration: {
      flex: 1,
      // backgroundColor: "blue",
      margin: 5,
      justifyContent: "center",
    },
    BusinessHeadingText: {
      fontSize: 23,
      fontWeight: "400",
      // alignSelf: "start",
      // margin: 3,
    },
    BusinessLocationText: {
      fontSize: 14,
      fontWeight: "400",
      // marginHorizontal: 5,
    },
    categoryText: {
      color: "#2E5DB5",
      fontWeight: "800",
      alignSelf: "center",
    },
    categoryTextPressed: {
      color: "#fff",
      fontWeight: "800",
      alignSelf: "center",
    },
    categoryContainer: {
      backgroundColor: "#fff",
      borderRadius: 50,
      opacity: 1,
      flex: 0.3,
      borderWidth: 2,
      borderColor: "#2E5DB5",
      paddingTop: 10,
      paddingBottom: 10,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    categoryContainerPressed: {
      backgroundColor: "#2E5DB5",
      borderRadius: 50,
      flex: 0.3,
      borderWidth: 2,
      borderColor: "#2E5DB5",
      paddingTop: 10,
      paddingBottom: 10,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.6,
      shadowRadius: 5,
    },
  
    categoriesContainer: {
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-evenly",
      // justifyContent: 'center',
      paddingVertical: 7,
    },
    CouponContainer: {
      backgroundColor: "#fff",
      // borderRadius: 2,
      // elevation: 4,
      flexDirection: "column",
      // marginHorizontal: 12,
      // marginVertical: 3,
      padding: 8,
      // shadowOffset: {
      //   height: 1,
      //   width: 1,
      // },
      // shadowOpacity: 0.3,
      // shadowRadius: 2,
    },
    CouponImageContainer: {
      // flex: 3,
      padding: 5,
      // backgroundColor: "red",
      // shadowOffset: {
      //   height: 1,
      //   width: 1,
      // },
      // shadowOpacity: 0.2,
      // shadowRadius: 1,
    },
    CouponHeaderImage: {
      // marginHorizontal: 6,
      // marginVertical: 6,
      
      width: "auto",
      height: 150,
      resizeMode: 'contain',
      borderRadius: 20,
    },

    BusinessLogoContainer: {
      // flex: 3,
      margin: 5,
      width: 120,
      height: 120,
      // border: 5,
      // borderColor: "black",
      // backgroundColor: "red",
      // shadowOffset: {
      //   height: 1,
      //   width: 1,
      // },
      // shadowOpacity: 0.2,
      // shadowRadius: 1,
    },
    BusinessLogo: {
      // marginHorizontal: 6,
      // marginVertical: 6,
      // borderRadius: 100,
      // width: "auto",
      // height: 100,
      width: "100%",
      height: "100%",
      resizeMode: 'contain',
      // backgroundColor: "cover",
    },

    DescriptionCouponContainer: {
      // flex: 1,
      flexDirection: "column",
      // backgroundColor: "blue",
      alignContent: "center",
      justifyContent: "center",
      padding: 8,
    },
    CouponDescriptionText: {
      fontSize: 18,
      fontWeight: "500",
      margin: 5,
      alignSelf: "center",
    },
    CouponExpirationText: {
      fontSize: 18,
      fontWeight: "400",
      margin: 5,
      alignSelf: "center",
    },
    TermsAndConditionsContainer: {
      // flex: 1,
      flexDirection: "column",
      // backgroundColor: "red",
      alignContent: "center",
      justifyContent: "center",
      padding: 8,
    },
    TermsAndConditionsText: {
      fontSize: 12,
      fontWeight: "300",
      margin: 5,
    },
    TermsContainer: {
      marginTop: 20,
      // backgroundColor: "green",
    },
    TermsHeaderText: {
      fontSize: 15,
      lineHeight: 21,
      fontWeight: "300",
      // alignSelf: "center",
      letterSpacing: 0.25,
    },
    separator: {
      borderBottomColor: "gray",
      marginVertical: 8,
      marginHorizontal: 12,
      borderBottomWidth: 1,
    },
    PurchaseContainer: {
      // flex: 2,
      // flexDirection: "column",
      height: "15%",
      alignItems: "center",
      // marginTop: 125,
      // backgroundColor: "yellow",
      padding: 0,
    },
    PurchaseButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      marginTop: 30,
      width: 190,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: "#F2A842",
    },
    PurchaseText: {
      fontSize: 19,
      textAlign: "center",
      lineHeight: 21,
      fontWeight: "500",
      letterSpacing: 0.25,
      color: "white",
    },
  });
  
  export default styles;
  