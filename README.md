##graphql-yoga + prisma + typescript

create .env

```
PRISMA_SECRET="mysecret123"
APP_SECRET="jwtsecret123"
ADMIN_SECRET="adminsecret123"
```

```
npm i
docker-compose up -d
prisma deploy
npm run start
```
