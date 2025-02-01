# Express API Project

This is a simple Express.js API that returns an object containing a Slack email, current date and time, and a GitHub URL when accessed via a GET request.

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the Repository:**
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Run the Server:**
   ```sh
   node index.js
   ```
   The server will start on port `3300`.

## API Documentation

### Endpoint
- **URL:** `http://localhost:3300/`
- **Method:** `GET`

### Request Format
No request body or parameters are required.

### Response Format
The API returns a JSON object with the following structure:

```json
{
    "slackEmail": "someemail@gmail.com",
    "current_datetime": "2025-02-01T12:00:00.000Z",
    "github_url": "https://github.com/someprofile/somerepo.git"
}
```

### Example Usage
Using `curl`:
```sh
curl -X GET http://localhost:3300/
```

Using JavaScript (Fetch API):
```js
fetch("http://localhost:3300/")
  .then(response => response.json())
  .then(data => console.log(data));
```

This API provides a basic example of an Express server returning JSON data.
### Hire a node-js developer
- **URL:** [text](https://hng.tech/hire/nodejs-developers)
