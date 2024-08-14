# Opinify.in

**Opinify.in** is a feedback collection platform that provides embeddable feedback forms for websites. Users can collect feedback directly from their websites and manage it through a centralized dashboard. This SaaS project is developed using React and TypeScript.

## Features

- **Embeddable Feedback Forms**: Easily embed feedback forms on your website.
- **Centralized Dashboard**: View and manage all feedback from a single, intuitive dashboard.
- **Customizable Modal**: Customize the modal design to enhance the user experience. ( _🚨 Not implemented yet_)
- **Real-time Updates**: Receive real-time updates and notifications for feedback forms and the dashboard.
- **Analytics & Reporting**: Access detailed feedback reports and analytics insights. ( _🚨 Not implemented yet_)

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn

### Clone the Repository

```bash
git clone https://github.com/avayyyyyyy/opinify.git
cd opinify
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
bun install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Configuration

- **Environment Variables**: Create a `.env` file in the root directory and set the required environment variables.

  ```env
  NEXTAUTH_SECRET=
  DATABASE_URL=
  GOOGLE_CLIENT_ID=
  GOOGLE_CLIENT_SECRET=
  AUTH_TRUST_HOST=http://localhost:3000
  ```

- **Feedback Form Integration**: Embed the feedback form into your website using the provided embed code.

## Usage

1. **Embedding Feedback Form**:

   - Go to your dashboard and create a new feedback form.
   - Copy the provided embed code and paste it into your website's HTML where you want the feedback form to appear.

2. **Viewing Feedback**:

   - Log in to the Opinify.in dashboard.
   - Navigate to the 'Feedback' section to view and manage collected feedback.

## Contributing

Contributions are welcome! Please follow these guidelines to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Shubhankit Jain - [jabhi465@gmail.com](mailto:jabhi465@gmail.com)

Project Link: [https://opinify.in/](https://opinify.in/)
