# Next.js Project with Shadcn UI, Tailwind CSS, and Firebase

This is a modern web application built with:

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Re-usable UI components
- [Firebase](https://firebase.google.com/) - Backend and authentication services
  - Firestore Database
  - Realtime Database
  - Authentication

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your Firebase configuration:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
   - Enable Firestore Database and Realtime Database
   - Copy the Firebase configuration values to `.env.local`
   - Ensure you include the Realtime Database URL
   
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # App Router pages
│   ├── components/      # UI components
│   │   └── ui/          # Shadcn UI components
│   └── lib/
│       └── firebase.ts  # Firebase configuration
├── .env.local           # Environment variables (create this file)
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file
```

## Firebase Configuration

This project uses both Firestore and Realtime Database:

- `db` - Firestore Database instance
- `realtimeDb` - Realtime Database instance

Example of using Realtime Database:

```typescript
import { ref, set, onValue } from 'firebase/database';
import { realtimeDb } from '@/lib/firebase';

// Write data
function writeUserData(userId, name, email) {
  set(ref(realtimeDb, 'users/' + userId), {
    username: name,
    email: email
  });
}

// Read data
const userRef = ref(realtimeDb, 'users/' + userId);
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});
```

## Adding Shadcn UI Components

To add more Shadcn UI components, use the CLI:

```bash
npx shadcn-ui@latest add button
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Realtime Database Documentation](https://firebase.google.com/docs/database)