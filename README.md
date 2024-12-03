
# Drug Upload Form Application

This is a React-based frontend application to test an API that allows uploading drug information. The app provides a user-friendly form interface to submit drug details like name, description, uses, indications, side effects, and warnings.

## Features

- **Dynamic Input Form**: Add all necessary drug details through a simple, interactive form.
- **Error and Success Feedback**: Displays success or error messages based on the API response.
- **Loading Indicator**: Shows a loader when the form is being submitted.
- **Responsive Design**: Works seamlessly across devices with a polished UI.

## Prerequisites

- Node.js (v14+ recommended)
- An API endpoint running on `https://drug-dex-server.vercel.app/upload` 
## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/drug-upload-app.git
   cd drug-upload-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `https://drugdexupload.vercel.app/`.

4. Ensure the backend API is running and accessible at `https://drug-dex-server.vercel.app/`.

## API Integration

The application sends a `POST` request to the `/upload` API endpoint with the following fields:

| Field          | Type   | Description                                           |
|-----------------|--------|-------------------------------------------------------|
| `drugName`     | String | Name of the drug (required, unique).                  |
| `description`  | String | Detailed description of the drug (required).          |
| `uses`         | Array  | List of uses for the drug (comma-separated).          |
| `indications`  | Array  | List of indications for the drug (comma-separated).   |
| `sideEffects`  | Array  | List of side effects for the drug (comma-separated).  |
| `warnings`     | Array  | List of warnings for the drug (comma-separated).      |

Example payload:
```json
{
  "drugName": "Paracetamol",
  "description": "A pain reliever and a fever reducer.",
  "uses": ["Relieves headache", "Reduces fever"],
  "indications": ["Headache", "Fever"],
  "sideEffects": ["Nausea", "Dizziness"],
  "warnings": ["Do not use with alcohol"]
}
```

## Application Structure

- **`src/App.js`**: Contains the main logic and form implementation.
- **Inline Styling**: Styles are applied directly in the React components for simplicity.

## How to Use

1. Fill in the form fields for the drug details.
2. Click the "Upload" button to send the data to the API.
3. View the success or error message after submission.

## Customization

- **API Endpoint**: Update the API URL in `App.js`:
  ```javascript
  const response = await axios.post("https://drug-dex-server.vercel.app/upload", payload);
  ```
- **Styling**: Modify inline styles in the `App.js` file to change the look and feel.

## Dependencies

- **React**: For building the UI.
- **Axios**: For making HTTP requests.

Install dependencies with:
```bash
npm install
```