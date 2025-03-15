# WeMen Platform

WeMen is a web platform designed to support men facing false accusations. It provides resources, community support, and legal guidance to help individuals navigate through difficult situations.

## Features

- **Case Submission**: Users can anonymously submit their case details and supporting evidence.
- **Community Forum**: A forum where affected individuals can share experiences and seek guidance.
- **Legal Advisory Chatbot**: Pre-fed legal advice based on common questions and scenarios.
- **Lawyer Directory**: A list of lawyers and NGOs specializing in false accusation cases.
- **Resources Page**: Information about legal rights, case studies, and helpline numbers.
- **Admin Dashboard**: For administrators to manage cases, users, and forum content.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Hosting**: Can be deployed on Vercel, Netlify, or Firebase Hosting

## Project Structure

```
wemen-platform/
├── index.html              # Main landing page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── auth.js             # Authentication functionality
│   └── main.js             # Main JavaScript functionality
├── images/                 # Image assets
├── pages/
│   ├── forum.html          # Community forum page
│   ├── legal-advice.html   # Legal advisory chatbot
│   ├── resources.html      # Resources and information
│   ├── lawyer-directory.html # Lawyer directory
│   └── submit-case.html    # Case submission form
└── admin/
    ├── dashboard.html      # Admin dashboard
    ├── cases.html          # Case management
    ├── users.html          # User management
    ├── forum-management.html # Forum management
    └── js/
        └── admin.js        # Admin functionality
```

## Setup Instructions

1. **Firebase Setup**:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Enable Authentication (Email/Password and Google Sign-in)
   - Create a Firestore database
   - Enable Storage for file uploads
   - Update the Firebase configuration in `js/firebase-config.js`

2. **Local Development**:
   - Clone the repository
   - Open the project in a code editor
   - Use a local server to run the project (e.g., Live Server extension in VS Code)

3. **Deployment**:
   - Deploy to Firebase Hosting, Vercel, or Netlify
   - Follow the deployment instructions for your chosen platform

## Firebase Collections

The project uses the following Firestore collections:

- **users**: User information and roles
- **cases**: Submitted case details
- **forum**: Forum topics and replies
- **lawyers**: Lawyer directory information

## Admin Access

To create an admin user:
1. Register a regular user account
2. In the Firebase Console, navigate to Firestore
3. Find the user document in the "users" collection
4. Update the "role" field to "admin"

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For support or inquiries, please contact support@wemen.org or call our helpline at +91 1234567890. 