# Activity: URL Shortener

**Don't open the solution folder until you have completed the exercise.**

## Problem Statement

In this exercise, you will implement a simple URL shortener service. The goal is to create a web application that allows users to input an URL and receive a shortened version of it. The application should be able to redirect users from the shortened URL to the original URL.

### Requirements

#### 1. Frontend

- Create a simple HTML page with a form where users can input an URL.
- Display the shortened URL on the page after the user submits the form.
- Include a button to copy the shortened URL to the clipboard.
- Note: **you shall not use any external libraries for the frontend. Just plain JavaScript**.

#### 2. Backend

- Set up an Express server to handle HTTP requests.
- Implement an endpoint `/shorten` that accepts a URL and returns a shortened one.
- Implement an endpoint `/s/:shortUrl` that redirects to the original URL when accessed.
- Ensure that the URL shortening process is idempotent, meaning if a URL has already been shortened, the same short URL should be returned.
- Note: **you have to use TypeScript for the backend**.

#### 3. Automated Testing

- Add tests to `src/index.test.ts` to ensure the application works as expected.
- You may use any testing framework you are comfortable with. For example, you can use `vitest` or `jest`.

Note: these steps have already been written for you. However, you are encouraged to look at how the tests are written.

Your task here is to add a test for **Idempotency**; i.e., if a URL has already been shortened, the same short URL should be returned.

#### 4. Data Storage

- You can start with an in-memory storage (just JavaScript objects). However, the data will be lost on server restart.
- The data must be persistent on the server. You can either use the **File System** or a **Database** (e.g., SQLite) to store the mappings as JSON.

#### 5. Additional Features

- Handle errors gracefully, such as when a non-existent short URL is accessed.
- Display appropriate messages to the user in case of errors.


### Guiding Instructions

#### 1. Setup

- Set up a basic Express server in `src/index.ts`.

#### 2. Frontend Implementation

- Create an HTML file `static/index.html` with a form to input the long URL.
- Add a script `static/client.js` to handle form submission and display the shortened URL.
- Optionally: You may want to use Tailwind CSS for styling.

#### 3. Backend Implementation

- In `src/index.ts`, implement the `/shorten` endpoint to generate and return a short URL.
- Implement the `/s/:shortUrl` endpoint to redirect to the original URL.
- You may use the [`shortid`](https://www.npmjs.com/package/shortid) library to generate unique short URLs.

#### 4. Testing

- Manual Testing:
  - Test the application by running the server and accessing the frontend in a browser.
  - Ensure that the URL shortening and redirection functionalities work as expected.
- Automated Testing:
  - Run the tests using `npm run test`.
  - Optionally: Run the tests with coverage using `npm run test:cov`.
   
By completing this exercise, you will gain experience in building a full-stack web application, handling HTTP requests, and managing client-server interactions. Good luck!
