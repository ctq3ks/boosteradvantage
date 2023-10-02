// useEffect(() => {
//   fetchPaymentIntent();
// }, []);

// useEffect(() => {
//   if (clientSecret) {
//     initializePaymentSheet();
//   }
// }, [clientSecret]);

// const fetchPaymentIntent = async () => {
//   const response = await API.graphql(
//     graphqlOperation(createPaymentIntent, { amount })
//   );
//   console.log(response.data.createPaymentIntent.clientSecret);
//   setClientSecret(response.data.createPaymentIntent.clientSecret);
// };

// const initializePaymentSheet = async () => {
//   if (!clientSecret) {
//     return;
//   }
//   const { error } = await initPaymentSheet({
//     paymentIntentClientSecret: clientSecret,
//   });
//   console.log("success");
//   if (error) {
//     Alert.alert(error);
//   }
// };

// const openPaymentSheet = async () => {
//   if (!clientSecret) {
//     return;
//   }
//   const { error } = await presentPaymentSheet({ clientSecret });
//   if (error) {
//     Alert.alert(`Error code: ${error.code}`, error.message);
//   } else {
//     Alert.alert("Success", "Your order is confirmed!");
//   }
// };
