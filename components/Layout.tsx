import MaterialHeader from './MaterialHeader';
import MaterialFooter from './MaterialFooter';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MaterialHeader />
      
      <main 
        className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        role="main"
        aria-label={title || 'Main content'}
      >
        {children}
      </main>
      
      <MaterialFooter />
    </div>
  );
}
