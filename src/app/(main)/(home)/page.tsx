import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-500/10">
          <Sparkles className="h-5 w-5 text-amber-400" />
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400">
            Welcome to Intellix
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-white mb-6">
          Elevate Your Digital Experience
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          "The future belongs to those who believe in the beauty of their dreams."
          <span className="block mt-3 text-sm text-slate-500">— Eleanor Roosevelt</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Button asChild className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 transform hover:scale-105">
            <Link href="/profile">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="outline" className="px-8 py-6 text-lg font-medium rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors">
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 text-slate-500 text-sm">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white">100%</div>
            <div>Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div>Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white">Secure</div>
            <div>By Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
