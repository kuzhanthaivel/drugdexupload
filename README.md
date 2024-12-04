
# **DrugDex_Upload**

A streamlined web application to upload drug data effortlessly and efficiently.

---

## 🛠️ **Overview**
**DrugDex_Upload** is a web application designed to enable administrators or authorized personnel to upload drug-related data, including name, description, uses, indications, side effects, and warnings. The application ensures a clean, user-friendly interface for seamless data entry and integration into the DrugDex ecosystem.

> **Live Application**: [DrugDex_Upload](https://drugdexupload.vercel.app/)  
> **GitHub Repository**: [GitHub - drugdexupload](https://github.com/kuzhanthaivel/drugdexupload)


## 🎥 **Demo**
### Experience DrugDex in Action!

![Slideshow](./src/Untitled%20design%20(1).gif)

---

## 🚀 **Table of Contents**
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Contact](#contact)

---

## ✨ **Features**
- **Drug Data Upload**: Add comprehensive drug information including:
  - Name
  - Description
  - Uses
  - Indications
  - Side Effects
  - Warnings
- **User-Friendly Interface**: Clean and intuitive design for ease of use.
- **Live Submission**: Real-time integration with the DrugDex database (or backend systems).

---

## 💻 **Usage**
1. Visit the [DrugDex_Upload App](https://drugdexupload.vercel.app/).
2. Fill out the following fields:
   - **Drug Name**: Enter the drug’s name.
   - **Description**: Provide a detailed description.
   - **Uses**: List the uses, separated by commas.
   - **Indications**: Specify the indications, separated by commas.
   - **Side Effects**: Mention possible side effects, separated by commas.
   - **Warnings**: Highlight warnings, separated by commas.
3. Click the **Upload** button to submit the data.

---

## 🛠️ **Technologies Used**
- **Frontend**: React.js
- **UI Framework**: TailwindCSS
- **Backend**: Node.js (or integrated APIs if applicable)
- **Deployment**: Vercel

---

## 🔧 **Installation**
Follow these steps to set up the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/drug-upload-app.git
   cd drug-upload-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
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