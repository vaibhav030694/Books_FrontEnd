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
