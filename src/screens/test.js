const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

// const createTodo = gql`
//   mutation createTodo($input: CreateTodoInput!) {
//     createTodo(input: $input) {
//       id
//       name
//       description
//     }
//   }
//  `

const createUser = gql`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput) {
    createUser(input: $input, condition: $condition) {
      id
      email
      phonenumber
      username
      Coupons {
        items {
          id
          business {
            id
            name
            location
            category
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          userID
          couponType
          currentPrice
          discountPrice
          itemDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          businessCouponsId
        }
        nextToken
        startedAt
      }
      BoosterPass {
        id
        isUsed
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userBoosterPassId
    }
  }
`

exports.handler = async (event) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_boosteradvantage-dev_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_boosteradvantage-dev_GRAPHQLAPIKEYOUTPUT
      },
      data: {
        query: print(createUser),
        variables: {
          input: {
            id: event.request.userID,
            username: event.request.username,
            email: event.request.email,
            phonenumber: event.request.phonenumber,
            createdAt: event.request.createdAt
          }
        }
      }
    });
    const body = {
      message: "successfully created todo!"
    }
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
          "Access-Control-Allow-Origin": "*",
      }
    }
  } 
  
  catch (err) {
    console.log('error creating todo: ', err);
  } 


     else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DDB or SQS");
        context.done(null, event);
    }
};
