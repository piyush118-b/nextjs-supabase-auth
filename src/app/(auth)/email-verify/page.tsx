import { Button } from "@/components/ui/button";
import { ArrowLeft, MailCheck, RefreshCw } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Verify your email",
  description: "We've sent you a verification email. Please check your inbox.",
};

const EmailVerificationPage = () => {
  const handleResendEmail = async () => {
    // TODO: Implement resend email logic
    alert('Resend email functionality will be implemented here');
  };

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
        <Link href="/login" className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to login</span>
        </Link>
      </Button>

      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 shadow-lg shadow-green-500/20">
            <MailCheck className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Check your email
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            We've sent a verification link to your email address.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 shadow-xl">
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-center">
            Please check your inbox and click the link to verify your account.
          </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <span className="font-medium">Didn't receive the email?</span> Check your spam folder or click below to resend.
          </p>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Need help?{' '}
                <a
                  href="mailto:support@example.com"
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Contact support
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
