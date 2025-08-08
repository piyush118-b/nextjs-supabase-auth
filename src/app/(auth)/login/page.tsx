import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import Link from "next/link";
import LoginForm from "./_components/login-form";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-fuchsia-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Back button */}
      <Button 
        asChild 
        variant="ghost" 
        className="absolute left-6 top-6 md:left-10 md:top-10 group"
      >
        <Link href="/" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back home</span>
        </Link>
      </Button>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20">
            <Lock className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Sign in to your account to continue
          </p>
        </div>

        <div className="glass rounded-2xl p-8 shadow-xl">
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
                <span>Sign in with email</span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
              </div>
            </div>

            <LoginForm />

            <div className="relative mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-slate-900 px-2 text-slate-500 dark:text-slate-400">
                  New to our platform?
                </span>
              </div>
            </div>

            <div>
              <Link
                href="/register"
                className="flex w-full justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent py-2.5 px-4 text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
