const AWS = require('aws-sdk');

if (process.env.ENVIRONMENT && process.env.ENVIRONMENT === 'LOCAL') {
  AWS.config.update({
    region: 'eu-west-1',
    endpoint: process.env.DYNAMO_HOST,
  });
}
const dynamodb = new AWS.DynamoDB();

module.exports.hola = () => {
  console.log("HOOOLA")
}

module.exports.putItem = (table, item) => new Promise((resolve, reject) => {
  const params = {
    Item: AWS.DynamoDB.Converter.marshall(item),
    ReturnConsumedCapacity: 'NONE',
    TableName: table,
  };
  dynamodb.putItem(params, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});


module.exports.query = (params) => new Promise((resolve, reject) => {
  
  dynamodb.query(params, (err, data) => {
    if (err) reject(err);
    resolve(data.Items.map(i => AWS.DynamoDB.Converter.unmarshall(i)));
  });
});
