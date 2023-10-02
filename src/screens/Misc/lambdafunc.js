const aws = require('aws-sdk');
const ddb = new aws.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
    console.log(event);

    const tableName = "User-ri5d7xfcxfb25fxckhz5o5pfmu-dev";
    const region = "us-east-1"; //process.env.REGION;
    
    console.log("table=" + tableName + " -- region=" + region);

    aws.config.update({region: region});

    // If the required parameters are present, proceed
    if (event.request.userAttributes.sub) {

        // -- Write data to DDB
        let ddbParams = {
            Item: {
                'id': event.request.userAttributes.sub,
                // '__typename': {S: 'User'},
                'username': event.userName,
                'email': event.request.userAttributes.email,
                'phonenumber': event.request.userAttributes.phonenumber,
                // 'createdAt': {S: date.toISOString()},
            },
            TableName: tableName
        };

        // Call DynamoDB
        try {
            await ddb.put(ddbParams).promise();
            console.log("Success");