import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: "#fff",
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
    FundraiserContainer: {
      backgroundColor: "#fff",
      borderRadius: 2,
      elevation: 4,
      flexDirection: "column",
      // marginHorizontal: 12,
      marginVertical: 3,
      padding: 8,
      shadowOffset: {
        height: 1,
        width: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    FundraiserImageContainer: {
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
    DescriptionFundraiserContainer: {
      // flex: 1,
      flexDirection: "column",
      // backgroundColor: "blue",
      alignContent: "center",
      justifyContent: "center",
      padding: 8,
    },
    TopSectionFundraiserContainerText: {
      padding: 5,
      alignSelf: "center",
    },
  
    FundraiserDescriptionText: {
      fontSize: 16,
      fontWeight: "300",
      margin: 5,
      // alignSelf: "center",
    },
    SponsorFundraiserContainer: {
      flexDirection: "row",
      alignContent: "space-between",
    },
    SponsorFundraiserImageContainer: {
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
    SponsorFundraiserTextContainer: {
      flex: 10,
      // backgroundColor: "red",
      margin: 4,
    },
    SponsorFundraiserText: {
      alignSelf: "center",
      fontSize: 15,
      fontWeight: "300",
      margin: 4,
    },
    ProgressBar: {
      margin: 10,
    },
    FundraiserFundedText: {
      fontSize: 16,
      fontWeight: "300",
      alignSelf: "center",
    },
    FundraiserHeaderImage: {
      // marginHorizontal: 6,
      // marginVertical: 6,
      borderRadius: 10,
      width: "auto",
      height: 150,
    },
  });
  
  export default styles;