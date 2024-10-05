## How to create a Google OAuth 2.0 Client ID
1. Go to [Google cloud console](https://console.cloud.google.com/apis/credentials)
2. Create a new project
3. Go to the project and click on the `Credentials` 
4. Click on `Create credentials` -> `OAuth client ID`
5. Select `Web application`
6. Give a name to the client ID
7. Add `Authorized redirect URIs` -> `http://localhost:3000/api/auth/callback/google`
8. Click on `Create`
9. Copy the `Client ID` and `Client Secret` and paste it in the `.env` file