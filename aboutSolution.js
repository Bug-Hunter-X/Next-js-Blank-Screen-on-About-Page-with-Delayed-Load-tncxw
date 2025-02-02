```javascript
// pages/about.js
import { useState, useEffect } from 'react';

export default function About() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAboutPage = async () => {
      // Simulate a delay to demonstrate the issue
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log('About page loaded');
      setIsLoading(false);
    };
    loadAboutPage();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```