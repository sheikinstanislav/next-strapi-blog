# Next Strapi Blog Demo

## Prerequisites
Be sure to have the correct env variables for each part:
	
Strapi (example in `.env.example`):
- HOST=0.0.0.0
- PORT=1337
- APP_KEYS="toBeModified1,toBeModified2"
- API_TOKEN_SALT=tobemodified
- ADMIN_JWT_SECRET=tobemodified
- JWT_SECRET=tobemodified

## 1. Clone next-strapi-blog
- Clone the repository by running the following command:
```
git clone https://github.com/sheikinstanislav/next-strapi-blog.git
```

## 2. Start Strapi
	
- Run the following command in your `./next-strapi-blog/blog-strapi` folder:
```
yarn && yarn seed && yarn develop
```

#### Credentials

- Super Admin:
  - email: testadmin@gmail.com
  - password: userTest123


## 3. Start Next.js
- Run the following command in your `./next-strapi-blog/blog-next` folder:

```
npm i
npm run dev
```
