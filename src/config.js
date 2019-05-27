const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1asww4mhgq2ls"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://u2wjz789ia.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_dq98nYua3",
    APP_CLIENT_ID: "3a4hcq45crjfhf80kcr5qi8ibd",
    IDENTITY_POOL_ID: "us-east-2:d53f2b77-6114-4e4b-b9ec-b7b03a62819d"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-11apcxr5auue2"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://efn1q1dm52.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Pry4YM2hq",
    APP_CLIENT_ID: "gn0k722etp6avpp37adttb3vu",
    IDENTITY_POOL_ID: "us-east-2:8748ed13-9355-4798-a291-d1bea7d1085c"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
