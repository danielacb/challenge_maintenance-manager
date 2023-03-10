# Maintenance Manager

![GitHub deployments](https://img.shields.io/github/deployments/danielacb/challenge_maintenance-manager/production?label=vercel&logo=vercel&logoColor=white)

Preview project [here!](https://dcb-maintenance-manager.vercel.app/)

<a href="https://dcb-maintenance-manager.vercel.app/"><img src="https://user-images.githubusercontent.com/18037904/223151770-53b8fddc-ea79-4acb-adbb-0e20d55978a8.png" alt="Maintenance Manager" width="800" /></a>
Maintenance Manager using React, Typescript and Ant Design!

## Running the development server:

```
# install dependencies
npm install

# start the project
npm run dev
```

### CORS proxy configuration

[Cors.sh](https://cors.sh/) was used as a proxy to avoid CORS issues. Generate an API key and update the `.env` file, taking `.env-example` as a reference, to work on the project locally.

### Signing in

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

-   Create a new [Clerk](https://clerk.dev/) account;
-   Create a new application;
-   Create a new user with this public metadata values:

```
{
	"id": 1,
	"name": "John Doe",
	"email": "testerOne@tractian.com",
	"unitId": 1,
	"companyId": 1
}
```

-   On the `.env` file, paste your publishable [API key](https://dashboard.clerk.dev/last-active?path=api-keys) as the value of `VITE_CLERK_PUBLISHABLE_KEY`;
-   Finally, you should be able to log in with the email `testerOne@tractian.com` and the password you defined when creating the user.
