const tags = ['login'];
const getOneSchema = {
  tags,
  params: paramsJsonSchema,
  querystring: queryStringJsonSchema,
  response: {
    200: {
      type: 'object',
      properties: personProperties
    }
  }
};

module.exports = {
  getOneSchema,
};
