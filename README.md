# HNG Stage 1B - Profile Card

## 📌 Overview

This project is a responsive and accessible **Profile Card** built as part of the HNG Frontend Wizards Stage 1B task.

The card displays user information including name, bio, avatar, social links, hobbies, dislikes, and a live-updating timestamp in milliseconds.

---

## 🚀 Features

### 👤 Profile Information

* Displays user name
* Short biography
* Avatar image with accessible alt text

### ⏱ Live Time Display

* Shows current time in milliseconds using `Date.now()`
* Updates every second dynamically

### 🔗 Social Links

* Contains external links (e.g., Twitter, GitHub)
* Opens in a new tab with proper security attributes

### 📋 Lists

* Hobbies list
* Dislikes list

---

## ♿ Accessibility

* Semantic HTML elements (`article`, `section`, `nav`, `figure`)
* Meaningful `alt` text for images
* Keyboard navigable links
* Visible focus states
* `aria-live="polite"` for dynamic time updates

---

## 📱 Responsiveness

* Mobile-first design
* Stacked layout on small screens
* Side-by-side layout on larger screens
* No overflow issues with long content

---

## 🧪 Test IDs (HNG Requirement)

All required `data-testid` attributes are implemented:

* `test-profile-card`
* `test-user-name`
* `test-user-bio`
* `test-user-time`
* `test-user-avatar`
* `test-user-social-links`
* `test-user-hobbies`
* `test-user-dislikes`

Optional:

* `test-user-social-twitter`
* `test-user-social-github`

---

## 🛠 Tech Stack

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript (ES6)

---

## 📂 How to Run

1. Clone the repository:

```bash
git clone https://github.com/AlbertAdekanye/stage-1b.git
```

2. Open the project folder

3. Run `index.html` in your browser

---

## 🌐 Deployment

This project can be deployed using:

* GitHub Pages
* Netlify
* Vercel

---

## 👨‍💻 Author

Built as part of the HNG Internship Frontend Track (Stage 1B)
