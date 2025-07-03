import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - PlompiPro',
  description: 'Dashboard administrateur pour PlompiPro',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}