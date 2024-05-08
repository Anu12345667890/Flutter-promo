The frontend of FlutterPromo is a user-friendly interface developed using the Flutter framework. It ensures smooth navigation and intuitive controls, allowing users to interact seamlessly with the application. Through the frontend, users can effortlessly register for accounts and redeem promo codes during registration. The interface provides real-time feedback on code validation, ensuring a seamless user experience.

pubspec.yaml:
In the pubspec.yaml file, dependencies for FlutterPromo are listed, including velocity_x for UI design, http for making API requests, shared_preferences for storing user data, jwt_decoder for decoding JWT tokens, and flutter_slidable for implementing sliding actions.

applogo.dart:
The applogo.dart file contains a common page for displaying the app logo wherever required in the application.

config.dart:
Config.dart lists URLs pointing to the NodeJS backend API, ensuring seamless communication between the frontend and backend.

main.dart:
In main.dart, users are navigated to respective pages based on the app's state. If the user is new or not logged in, they are directed to the login page. If the user is logged in, their login details are stored in a token variable, decoded using JWT decoder to check its expiration status. If the token is expired, the user is redirected to the login page; otherwise, they are directed to the dashboard page.

registration.dart:
In registration.dart, users can create their accounts in the FlutterPromo app by providing their email and password.

loginPage.dart:
In loginPage.dart, users can log in to the FlutterPromo app using their email and password. Upon successful login, they are directed to the dashboard page.

dashboard.dart:
In dashboard.dart, logged-in users can perform various tasks, including generating promo codes, viewing promo code details, and managing promo codes' expiration and usage limits.

Overall, the frontend of FlutterPromo ensures a smooth user experience, allowing users to seamlessly navigate, register, log in, and interact with promo code-related functionalities within the app.
