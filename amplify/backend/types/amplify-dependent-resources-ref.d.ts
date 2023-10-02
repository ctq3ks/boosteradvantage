export type AmplifyDependentResourcesAttributes = {
  "api": {
    "boosteradvantage": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "boosteradvantage": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "businessAdminGroupRole": "string",
      "schoolAdminGroupRole": "string"
    }
  },
  "function": {
    "CreatePaymentIntent": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "s3boosteradvantagestorage6c47cc6d": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}