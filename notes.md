npx prisma migrate dev --name Initialize the schema
npx prisma generate

https://console.cloud.google.com/apis/credentials
create creditionals -> OAuth 2.0 Client IDs -> Web application -> Name -> Authorized redirect URIs -> Create

Authorised redirect URIs: http://localhost:3000/api/auth/callback/google
Authorised JavaScript origins -> http://localhost:3000

