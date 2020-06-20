
const dy = require('./@dynamo');

module.exports.handler = async (event) => {
  dy.hola();

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
};
