import React from 'react';
import { useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/hooks/use-auth';
import { ProtectedRoute } from '@/components/protected-route';
import { GetStartedPage } from '@/components/get-started-page';
import AdminPage from '../app/admin/page';
import ChatPage from '../app/chat/page';
import LandingPage from '../components/landing-page';

function Router() {
  const path = window.location.pathname;
  
  // Update body class based on current route
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    
    if (path === '/') {
      // Landing page
      body.className = 'landing-page';
      html.style.overflow = 'auto';
      html.style.overflowX = 'hidden';
    } else if (path === '/chat' || path.startsWith('/chat/')) {
      // Chat pages should be scrollable
      body.className = 'chat-page';
      html.style.overflow = 'auto';
      html.style.overflowX = 'hidden';
    } else if (path === '/get-started') {
      // Get started page should be scrollable like auth
      body.className = 'auth-page';
      html.style.overflow = 'auto';
      html.style.overflowX = 'hidden';
    } else {
      // Dashboard pages
      body.className = 'dashboard';
      html.style.overflow = 'hidden';
    }
    
    // Cleanup function to reset body class
    return () => {
      body.className = '';
      html.style.overflow = 'auto';
      html.style.overflowX = 'auto';
    };
  }, [path]);
  
  // Handle root path - show landing page
  if (path === '/') {
    return <LandingPage />;
  }
  
  // Handle get-started page
  if (path === '/get-started') {
    return <GetStartedPage />;
  }
  
  // Handle individual chat routes
  if (path.startsWith('/chat/') && path !== '/chat') {
    const slug = path.replace('/chat/', '');
    const ChatSlugPage = React.lazy(() => import('../app/chat/[slug]/page'));
    return (
      <React.Suspense fallback={
        <div className="min-h-screen bg-sidebar flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-sidebar-foreground border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <ChatSlugPage params={{ slug }} />
      </React.Suspense>
    );
  }
  
  // Handle main chat discovery page (no auth required)
  if (path === '/chat') {
    return <ChatPage />;
  }
  
  // Handle admin routes (auth required)
  return (
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-sidebar">
      <ThemeProvider defaultTheme="dark" attribute="class">
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;