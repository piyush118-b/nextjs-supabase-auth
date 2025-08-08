import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, User, LogOut } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Your Profile",
  description: "View and manage your account information.",
};

const ProfilePage = async () => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const handleSignOut = async () => {
    'use server';
    const supabase = createClient();
    await supabase.auth.signOut();
    return { redirect: { destination: '/login', permanent: false } };
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Not authenticated</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Please sign in to view your profile</p>
          <Button asChild className="mt-4">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-6">
        <Button asChild variant="ghost" className="group">
          <Link href="/" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to home</span>
          </Link>
        </Button>
      </div>

      <div className="glass rounded-2xl p-8 shadow-xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
            <User className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Welcome, {user.email?.split('@')[0]}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">{user.email}</p>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <h2 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
              Account Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-slate-400 mr-3" />
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-slate-900 dark:text-white">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 flex items-center justify-center text-slate-400 mr-3">
                  <span className="text-xs font-medium">ID</span>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">User ID</p>
                  <p className="text-sm font-mono text-slate-600 dark:text-slate-300 truncate">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <form action={handleSignOut}>
              <Button
                type="submit"
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
