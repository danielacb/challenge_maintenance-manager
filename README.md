# Maintenance Manager

Maintenance Manager using React, Typescript and Ant Design

## Running the development server:

```
# install dependencies
npm install

# start the project
npm run dev
```

## Signing in

[Clerk](https://clerk.dev/) was used as a way to mock an authentication process. All the information from the [API](https://my-json-server.typicode.com/tractian/fake-api/users/) was copied to keep the data consistent.

To sign in, use one of these emails:

```
# Emails:
testerOne@tractian.com
testerTwo@tractian.com
testerThree@tractian.com
testerFour@tractian.com
testerFive@tractian.com

# Password
XXN2hDFcbc3ly5UnN
```

To run the project locally, follow these steps:

- Create a new [Clerk](https://clerk.dev/) account;
- Create a new application;
- Create a new user with this public metadata values:

```
{
	"id": 1,
	"name": "John Doe",
	"email": "testerOne@tractian.com",
	"unitId": 1,
	"companyId": 1
}
```

- On the `.env` file, paste your publishable [API key](https://dashboard.clerk.dev/last-active?path=api-keys) as the value of `VITE_CLERK_PUBLISHABLE_KEY`;
- Finally, you should be able to log in with the email `testerOne@tractian.com` and the password you defined when creating the user.
