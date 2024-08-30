![Screenshot 2024-08-30 195659](https://github.com/user-attachments/assets/9d505833-9656-4c6e-aa5e-edf49271eea1)

# 🚀 My Portfolio Website

Welcome to my personal portfolio website! This project is designed to showcase my skills, projects, and professional journey. Built using **React** and **Vite**, the website features smooth animations powered by **GSAP** and includes a contact form integrated with **EmailJS**. The website is deployed using **Netlify** for easy access and continuous deployment.

## 📁 Project Structure

Understanding the project structure is crucial for navigating and contributing to the project. Here's a breakdown:

```bash
    my-portfolio/
    │
    ├── .env                        # Environment variables for sensitive information
    ├── src/                        # Source code for the application
    │   ├── assets/                 # Static assets like images, fonts, and resume
    │   │   └── resume.pdf          # My resume stored as a PDF and images used
    │   ├── common/                 # Reusable components and context
    │   │   ├── projectCard.jsx        # Project card component for displaying projects
    │   │   ├── skillList.jsx          # Skill list component for displaying skills
    │   │   ├── themeContext.jsx    # Context API for managing theme
    │   │   └── SkillListmodule.css          # Skill List styles for components
    │   ├── sections/               # Different sections of the portfolio
    │   │   ├── hero/               # Hero section
    │   │   ├── navbar/             # Navigation bar
    │   │   ├── footer/             # Footer
    │   │   ├── projects/           # Projects section
    │   │   ├── skills/             # Skills section
    │   │   └── contact/        # Contact form section with EmailJS integration
    │   └── App.jsx                 # Main application component
    └── package.json                # Project dependencies and scripts
```

### 📂 Detailed Folder Explanation

-   **`.env`**: Stores sensitive information like EmailJS credentials that shouldn't be exposed in the codebase. This file is ignored by version control to keep your data safe.

-   **`src/assets/`**: Contains all static assets like images, fonts, and your resume. The resume is stored as a PDF file for easy access and download.

-   **`src/common/`**: This folder houses reusable components and context:

    -   **`projectCard/`**: Displays individual projects in the Projects section.
    -   **`skillList/`**: Lists out your skills in the Skills section.
    -   **`themeContext.jsx`**: Manages theming across the application using React's Context API.
    -   **`module.css`**: Contains global styles specific to components in the `common` folder.
-   **`src/sections/`**: Each section of the portfolio (e.g., Hero, Navbar, Footer) is organized here. Each section has its own folder, containing the JSX and CSS modules:

    -   **`hero/`**: The introductory section that captures visitors' attention.
    -   **`navbar/`**: The navigation bar that allows users to navigate through different sections.
    -   **`footer/`**: Contains contact information and social media links.
    -   **`projects/`**: Displays your portfolio projects.
    -   **`skills/`**: Showcases your technical skills.
    -   **`contact.jsx`**: The contact form that allows users to get in touch with you.

## 🛠️ Setup & Installation

To set up the project locally, follow these steps:

### 1\. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Slygriyrsk/my-portfolio.git
cd my-portfolio
```

### 2\. Install Dependencies

Next, install the necessary dependencies using npm:

```bash
npm install
```

### 3\. Configure Environment Variables

You'll need to set up environment variables for EmailJS integration. Create a `.env` file in the root directory:


```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

Make sure to replace `your_service_id`, `your_template_id`, and `your_user_id` with your actual EmailJS credentials.

### 4\. Run the Development Server

To see the website in action, start the development server:

```bash
npm run dev
```
Your portfolio should now be running at `http://localhost:5173`.

## ✉️ EmailJS Integration

The contact form in this portfolio is powered by **EmailJS**, allowing visitors to send messages directly to your email without exposing your email address. Here's how it's implemented in `contact.jsx`:

```jsx

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    process.env.VITE_EMAILJS_SERVICE_ID,
    process.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
    }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
    });
};

return (
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user_name" placeholder="Your Name" required />
    <input type="email" name="user_email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message" required />
    <button type="submit">Send</button>
    </form>
);
};

export default Contact;
```

### How It Works:

1.  **Form Submission**: The `sendEmail` function is triggered when the form is submitted.
2.  **EmailJS API Call**: The form data is sent to EmailJS using the `sendForm` method, with the service ID, template ID, and user ID provided from the `.env` file.
3.  **Handling Responses**: The function handles both success and error scenarios, alerting the user accordingly.

## 🎨 GSAP Animations

To create a dynamic and engaging user experience, **GSAP** animations are used in the profile section. Here's an example of how you can animate elements:

```jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Profile = () => {
const profileRef = useRef();

useEffect(() => {
    gsap.fromTo(profileRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
}, []);

return (
    <div ref={profileRef}>
    <h1>Welcome to My Profile</h1>
    <p>I'm a developer with a passion for creating beautiful and functional websites.</p>
    </div>
);
};

export default Profile;
```

### Animation Breakdown:

-   **`useRef` Hook**: Used to reference the DOM element you want to animate.
-   **`useEffect` Hook**: Triggers the animation when the component mounts.
-   **`gsap.fromTo` Method**: Animates the element from an initial state (opacity: 0, y: 50) to the final state (opacity: 1, y: 0) over 1 second.

## 📄 Importing Your Resume

Your resume is stored in the `assets` folder and can be easily linked or displayed in your portfolio. Here's how you can import and link it:

```jsx
import React from 'react';
import myResume from '../assets/resume.pdf';

const Resume = () => {
return (
    <a href={myResume} download="My_Resume.pdf">
    Download My Resume
    </a>
);
};

export default Resume;
```

This allows visitors to download your resume directly from your portfolio website.

## 🚀 Deployment on Netlify

Your portfolio is deployed using **Netlify**, which provides seamless deployment and continuous integration. Here's how you can deploy your site:

### 1\. Build the Project

Before deploying, make sure to create a production build of your project:

```bash
npm run build
```

This command generates an optimized and minified version of your site in the `dist/` folder.

### 2\. Deploy on Netlify

1.  **Login to Netlify**: Go to [Netlify](https://www.netlify.com/) and log in with your account.
2.  **Create a New Site**: Click on "New site from Git" and connect your GitHub repository.
3.  **Configure Build Settings**: Set the build command to `npm run build` and the publish directory to `dist/`.
4.  **Deploy**: Click on "Deploy site" and Netlify will handle the rest.

Your site will be live in a few minutes, and you'll be provided with a URL that you can share.

### Continuous Deployment

Netlify automatically redeploys your site whenever you push changes to the connected GitHub repository. This ensures that your portfolio is always up to date.

## 🚀 Running the Project Locally


To run the project in a development environment, execute:

```bash
npm run dev
```

This will start the development server, and your application will be available at `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run serve
```

This will build the project for production and you can directly open your dist folder in file explorer and import it from there in netifly it will automatically create a domain for your webpage.

## 🔧 Customization and Contribution


### Customization

Feel free to customize the portfolio to match your personal branding and preferences. You can:

-   **Change the Color Scheme**: Modify the CSS in the `module.css` files within each section or the common components.
-   **Update Content**: Simply edit the content in the JSX files under the `sections/` folder to reflect your own experiences, projects, and skills.
-   **Add New Sections**: You can easily add new sections by creating new folders under `src/sections/` and integrating them into the `App.jsx` file.

## Contribution

If you'd like to contribute to this project, follow these steps:

1.  **Fork the Repository**: Click the "Fork" button on the repository's GitHub page.
2.  **Clone the Fork**: Clone your forked repository to your local machine.
3.  **Create a New Branch**: Create a new branch for your feature or bug fix.
4.  **Make Your Changes**: Implement your changes and commit them with a descriptive message.
5.  **Push to GitHub**: Push your changes to your fork on GitHub.
6.  **Submit a Pull Request**: Open a pull request on the original repository.

I welcome all contributions, from fixing typos to adding new features!

## 📝 License

This project is licensed under the MIT License, meaning you can freely use, modify, and distribute the code as long as you include the original license and attribution.

## 🎉 Acknowledgements


-   **React** and **Vite**: For providing a solid foundation to build upon.
-   **EmailJS**: For making email integration straightforward and accessible.
-   **GSAP**: For the powerful animations that make the site feel alive.
-   **Netlify**: For simplifying the deployment process and enabling continuous integration.

Thank you for visiting my portfolio! I hope it serves as a comprehensive showcase of my skills and projects. Feel free to explore and reach out to me via the contact form!
