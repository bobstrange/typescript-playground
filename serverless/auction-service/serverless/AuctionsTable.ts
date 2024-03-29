export const AuctionsTable = {
  Type: 'AWS::DynamoDB::Table',
  Properties: {
    TableName: 'AuctionsTable',
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
  },
}
