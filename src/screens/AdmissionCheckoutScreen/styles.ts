import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    HeaderContainer: {
      backgroundColor: "#fff",
      // opacity: .90,
      alignItems: "flex-end",
      paddingRight: 10,
      justifyContent: "flex-end",
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
    AdmissionContainer: {
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
    AdmissionImageContainer: {
      // flex: 3,
      padding: 5,
      // backgroundColor: "red",
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1,
    },
    DescriptionAdmissionContainer: {
      // flex: 1,
      flexDirection: "column",
      // backgroundColor: "blue",
      alignContent: "center",
      justifyContent: "center",
      padding: 8,
    },
    AdmissionDescriptionText: {
      fontSize: 16,
      fontWeight: "300",
      margin: 5,
      // alignSelf: "center",
    },
    DonateContainer: {
      flexDirection: "column",
      // backgroundColor: "blue",
      alignItems: "center",
      margin: 10,
    },
    DonateButton: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 14,
      width: 190,
      borderRadius: 50,
      elevation: 3,
      backgroundColor: "#F2A842",
    },
    DonateText: {
      fontSize: 19,
      lineHeight: 21,
      fontWeight: "500",
      letterSpacing: 0.25,
      color: "white",
    },
    SponsorContainer: {
      // flexDirection: "row",
      // alignContent: "space-between",
    },
    SponsorHeaderText: {
      fontSize: 19,
      lineHeight: 21,
      fontWeight: "500",
      // alignSelf: "center",
      letterSpacing: 0.25,
    },
    SponsorAdmissionContainer: {
      flexDirection: "row",
      alignContent: "space-between",
    },
    SponsorAdmissionImageContainer: {
      flex: 2,
      alignSelf: "center",
      // backgroundColor: "blue",
    },
    SponsorImage: {
      // borderRadius:
      // borderRadius: 10,
      width: 55,
      height: 55,
      alignSelf: "center",
    },
    SponsorAdmissionTextContainer: {
      flex: 10,
      // backgroundColor: "red",
      margin: 4,
    },
    SponsorAdmissionText: {
      alignSelf: "center",
      fontSize: 15,
      fontWeight: "400",
      margin: 4,
    },
    SponsorAboutContainer: {
      flexDirection: "row",
      // backgroundColor: "blue",
      alignContent: "space-between",
      marginHorizontal: 10,
    },
    SponsorAboutText: {
      alignSelf: "center",
      fontSize: 15,
      fontWeight: "300",
      margin: 4,
    },
    AdmissionFundedText: {
      fontSize: 18,
      fontWeight: "300",
      alignSelf: "center",
    },
    AdmissionHeaderImage: {
      // marginHorizontal: 6,
      // marginVertical: 6,
      borderRadius: 10,
      width: "auto",
      height: 150,
    },
    DonationsContainer: {
      flexDirection: "column",
      // backgroundColor: "blue",
      // alignContent: "space-between",
      marginHorizontal: 10,
    },
    DonorContainer: {
      flexDirection: "row",
      // backgroundColor: "blue",
      // alignContent: "space-between",
      marginHorizontal: 10,
      marginVertical: 5,
    },
    DonorIconContainer: {
      justifyContent: "center",
      alignItems: "center",
      // marginHorizontal: 10,
      backgroundColor: "#CDFFDD",
      width: 40,
      borderRadius: 110,
    },
    DonorTextContainer: {
      flexDirection: "column",
      marginHorizontal: 10,
      // backgroundColor: "red",
    },
    DonorNameText: {
      fontSize: 16,
      fontWeight: "200",
      alignSelf: "flex-start",
    },
    DonorAmountText: {
      fontSize: 16,
      fontWeight: "300",
      alignSelf: "flex-start",
    },
  
    separator: {
      borderBottomColor: "gray",
      marginVertical: 8,
      borderBottomWidth: 1,
    },
    root: {
      padding: 10,
    },
    row: {
      marginVertical: 5,
    },
    label: {
      fontWeight: "bold",
    },
    input: {
      backgroundColor: "white",
      padding: 5,
      marginVertical: 5,
      height: 40,
      borderWidth: 1,
      borderColor: "lightgrey",
      borderRadius: 2,
    },
    errorLabel: {
      color: "red",
    },
  });

  export default styles;