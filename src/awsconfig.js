// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const config = {
  "aws_project_region": "eu-west-2",
  "aws_dynamodb_all_tables_region": "eu-west-2",
  "aws_dynamodb_table_schemas": [
      {
          "tableName": "users-yearthree",
          "region": "eu-west-2"
      }
  ],
  Auth: {
  
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      identityPoolId: 'eu-west-2:5dd2e361-c7d3-4f9f-870b-af525fd5f2da',
      
      // REQUIRED - Amazon Cognito Region
      region: 'eu-west-2',
  
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'eu-west-2_ykRxNNZ0h',
  
      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '198irnce62kcu0vgnl1h0tbtg7',
  
      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,
  
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_SRP_AUTH',
  
      // OPTIONAL - Hosted UI configuration
      // oauth: {
      //     domain: 'your_cognito_domain',
      //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
      //     redirectSignIn: 'http://localhost:3000/',
      //     redirectSignOut: 'http://localhost:3000/',
      //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      // }
  }
    
};


export default config;