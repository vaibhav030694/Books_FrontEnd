# ReadingList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


---

# Reading List App

The Reading List app is a web application designed to help users manage their reading lists effectively.

## Chart Feature

The Reading List app includes a chart feature that visualizes the status of books added by the user. The chart displays the distribution of books across different statuses, namely unread, in progress, and finished.

### Implementation Details
- **Chart Library**: We use the ngx-charts library, which provides a variety of chart types and customization options for Angular applications.

- **Data Source**: The chart fetches data from the backend server via an API endpoint.

- **Chart Type**: The chart displayed is a pie chart, which provides a clear visualization of the proportion of books in each status category.

### Usage

To access the chart feature:

1. **Navigate to the Chart Page**: Users can access the chart page from the main navigation menu of the Reading List app.

2. **View the Chart**: Upon accessing the chart page, users will see the pie chart representing the distribution of books across different statuses.


## Login/Logout Feature

The login/logout feature of this app ensures a secure and personalized experience for users. Here's how it works:

### Logging In

1. **Secure Access**: Users can securely log in to the app using their registered email and password.
2. **Authentication**: Once logged in, users gain access to all the features and functionalities of the app, including adding books to their reading list and updating their reading progress.
3. **Personalization**: Logging in allows the app to personalize the user experience by displaying their reading list and progress.

### Logging Out

1. **Secure Logout**: Users can log out of the app at any time to securely end their session.
2. **Protection of User Data**: Logging out ensures the protection of user data by terminating the current session and preventing unauthorized access to the app.
3. **Enhanced Security**: By logging out after each session, users can maintain the security of their account and prevent unauthorized access on shared devices.

### Authentication Requirement

Access to app features is restricted to authenticated users only. If a user is not authenticated (i.e., not logged in), they will be prompted to log in before accessing any features.

## Getting Started

To use the login/logout feature and access the app's functionalities, follow these steps:

1. **Sign Up**: If you're a new user, sign up for an account using your email and password.
2. **Log In**: Once registered, log in to your account using your email and password to access the app's features securely.
3. **Explore**: After logging in, explore the app's features, including adding books to your reading list, updating reading progress, and more.
4. **Log Out**: When you're done using the app, log out to securely end your session and protect your account.

## Security

Your security and privacy are our top priorities. Here's how we ensure the security of your account:

- **Encryption**: User passwords are encrypted to prevent unauthorized access to sensitive information.
- **Session Management**: Sessions are securely managed to prevent session hijacking and unauthorized access.
- **Secure Communication**: All communication between the app and the server is encrypted using HTTPS to protect your data from interception.
- **Authentication Controls**: Access to app features is restricted to authenticated users only, ensuring that only authorized individuals can access sensitive information.

