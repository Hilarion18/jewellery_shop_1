// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Imagesrc={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './i18n';
// import Navbar from './components/navbar/navbar-ovolo/NavbarOvolo';
// import './index.css';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import AboutUs from './pages/AboutUs';
// import ProfilePage from './pages/Profile';

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-600 dark:bg-gray-900">
//       {/* <Navbar /> */}
//       {/* <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
//           </div>
//         </div>
//       </main> */}
//         <main className="flex-grow bg-gray-600 dark:bg-gray-900">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/profile" element={<ProfilePage />} />
//           </Routes>
//         </main>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default App;

// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '../i18n'; // If you're using i18next setup
// import Navbar from '@/components/navbar/navbar-ovolo/NavbarOvolo';
// import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-600 dark:bg-gray-900 flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
