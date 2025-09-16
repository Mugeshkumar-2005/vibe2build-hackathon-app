"use client";

import { Sparkles, Target, Rocket, Calendar, Clock, Globe, Users, Lightbulb, Wrench, Mic, AlertTriangle, Gift, Book, Bot, Laptop, Trophy, UserCheck, Star, Award, Heart, Phone, Zap, FileText } from "lucide-react";
import Aurora from "@/components/Aurora";
import MagicBento from "@/components/MagicBento";
import CircularText from "@/components/CircularText";
import CountTimer from "@/components/CountTimer";
import RegisterButton from "@/components/RegisterButton";

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-gray-100 font-sans overflow-x-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="relative z-10 flex flex-col items-center py-16 px-4">
        {/* Header Section */}
        <header className="text-center max-w-4xl mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg flex justify-center items-center gap-4 flex-wrap">
            <Sparkles className="w-12 h-12 md:w-14 md:h-14 text-purple-500" />
            <span className="text-center">Vibe2Build: Startup MVP Hackathon</span>
          </h1>

          <div className="mt-6 text-lg md:text-xl text-purple-300 max-w-3xl mx-auto flex items-center justify-center flex-wrap gap-2">
            <span>Presented by</span>
            <span className="font-semibold text-purple-400 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Automate Everything Club
            </span>
            <span>&</span>
            <a
              href="https://pinesphere.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-400 underline hover:text-purple-300 transition-colors flex items-center gap-2"
              aria-label="Visit Pinesphere Solution website"
            >
              <img 
                src="/images/Pinesphere.png" 
                alt="Pinesphere Logo" 
                className="w-6 h-6"
              />
              Pinesphere Solution
            </a>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <p className="text-purple-200 text-lg md:text-xl font-medium flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Transform your startup idea into a working MVP in just 2 evenings!
            </p>
            <p className="text-purple-300 text-base mt-2 flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 20th & 21st</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6:00 PM - 9:30 PM</span>
              <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Online Presentations</span>
            </p>
          </div>
        </header>

        {/* MagicBento Component - Core Content */}
        <section className="w-full flex justify-center" aria-label="Hackathon Details">
          <div className="w-full max-w-6xl">
            <MagicBento
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              clickEffect={true}
              enableMagnetism={true}
              particleCount={8}
              spotlightRadius={400}
              glowColor="132, 0, 255"
            />
          </div>
        </section>

        {/* What Will You Do? Section */}
        <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
          <h2 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
            <Target className="w-8 h-8" />
            What Will You Do?
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">1</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Form Your Team
                </h3>
                <p className="text-blue-200">Individual or team participation (no limit on team size)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">2</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5" />
                  Ideate Your Startup Idea
                </h3>
                <p className="text-blue-200">Think of problems in education, healthcare, environment, entertainment, or social issues you want to solve.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">3</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5" />
                  Build An MVP
                </h3>
                <p className="text-blue-200 mb-3">Create a simple working version using free tools like ChatGPT, Hugging Face, Google Colab, Replit, Firebase, GitHub, etc...(Any tools).</p>
                <p className="text-blue-300 font-medium flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  Example MVPs: Web/mobile app, AI chatbot, data dashboard, or automation tool
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">4</span>
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2 flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Prepare Your Pitch
                </h3>
                <p className="text-blue-200">Present your idea, problem, and MVP to judges (5-minute demo + 3-minute Q&A)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice Section */}
        <section className="max-w-4xl mx-auto mt-16 p-6 bg-gradient-to-r from-red-900/40 to-pink-900/40 rounded-2xl border border-red-500/40 backdrop-blur-sm hover:border-red-400/60 transition-all duration-300 animate-pulse">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-300 mb-4 flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Important Notice
            </h2>
            <p className="text-xl text-red-200 mb-2 flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Only idea presentation will be conducted online
            </p>
            <p className="text-lg text-red-300 font-semibold flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" />
              Start building your MVP from now onwards!
            </p>
          </div>
        </section>

        {/* Special Benefits Section */}
        <section className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300">
          <h2 className="text-3xl font-bold text-green-400 mb-8 flex items-center gap-3">
            <Gift className="w-8 h-8" />
            Special Benefits for All Registered Participants
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-green-300 group">
                <span className="text-green-400 group-hover:scale-125 transition-transform duration-300"><Award className="w-5 h-5" /></span>
                <span className="font-semibold flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  FREE Books Worth ₹10,000
                </span>
              </div>
              <ul className="ml-8 space-y-2 text-green-200">
                <li className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span>Best AI Agent Development Reference Book</span>
                </li>
                <li className="flex items-center gap-2">
                  <Laptop className="w-4 h-4" />
                  <span>Unvibe Coding Starter Book</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-green-300 group">
                <span className="text-green-400 group-hover:scale-125 transition-transform duration-300"><Award className="w-5 h-5" /></span>
                <span className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certificate of Participation
                </span>
              </div>
              <div className="flex items-center gap-3 text-green-300 group">
                <span className="text-green-400 group-hover:scale-125 transition-transform duration-300"><Award className="w-5 h-5" /></span>
                <span className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Mentorship from Industry Experts
                </span>
              </div>
              <div className="flex items-center gap-3 text-green-300 group">
                <span className="text-green-400 group-hover:scale-125 transition-transform duration-300"><Award className="w-5 h-5" /></span>
                <span className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Chance to Win Exciting Prizes
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-800/20 rounded-xl hover:bg-green-800/30 transition-all duration-300">
            <p className="text-green-200 font-medium flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Top teams get cash prizes and opportunity to develop their idea further into a real startup with guidance
            </p>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8" />
            Our Sponsors
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-orange-300 mb-3 flex items-center justify-center gap-2">
                <Star className="w-6 h-6" />
                Title Sponsor
              </h3>
              <a
                href="https://pinesphere.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-orange-200 hover:text-orange-100 transition-colors underline inline-flex items-center gap-3 justify-center"
              >
                <img 
                  src="/images/Pinesphere.png" 
                  alt="Pinesphere Logo" 
                  className="w-8 h-8"
                />
                Pinesphere Solution
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-800/20 rounded-xl backdrop-blur-sm hover:bg-orange-800/30 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-lg font-semibold text-orange-300 mb-2 flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Supporting Sponsors
                </h4>
                <p className="text-orange-200">TechVenture Labs</p>
              </div>
              <div className="p-4 bg-orange-800/20 rounded-xl backdrop-blur-sm hover:bg-orange-800/30 transition-all duration-300 hover:transform hover:scale-105">
                <h4 className="text-lg font-semibold text-orange-300 mb-2 flex items-center justify-center gap-2">
                  <Globe className="w-5 h-5" />
                  Community Partners
                </h4>
                <p className="text-orange-200">StartupHub India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="max-w-4xl mx-auto mt-16 text-center p-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl border border-purple-500/40 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            Don't Overthink — Just Bring Your Vibe & Build Your Future!
          </h2>
          <p className="text-xl text-purple-200 mb-6 flex items-center justify-center gap-2">
            <Rocket className="w-6 h-6" />
            Take The First Step Towards Becoming A Startup Founder
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-lg font-semibold text-yellow-400 animate-bounce flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Limited Spots Available!
            </span>
            <span className="text-purple-200 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Register before slots fill up
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 text-center text-gray-500 text-sm select-none tracking-wide border-t border-gray-800 pt-8">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">
            &copy; 2025 Vibe2Build Hackathon | Presented by{" "}
            <span className="text-purple-400">Automate Everything Club</span>
          </p>
          <div className="flex justify-center items-center gap-8 text-xs flex-wrap">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact: +91 9361802547
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://pinesphere.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2"
              aria-label="Visit sponsor website - Pinesphere Solution"
            >
              <img 
                src="/images/Pinesphere.png" 
                alt="Pinesphere Logo" 
                className="w-4 h-4"
              />
              Sponsored by Pinesphere Solution
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-50">
        <CircularText
          text="AUTOMATION*FOR*EVERTHING*"
          onHover="speedUp"
          spinDuration={20}
          className="w-32 h-32 md:w-40 md:h-40"
        />
      </div>

      <div className="fixed bottom-4 left-4 z-50">
        <RegisterButton />
        <CountTimer
          targetDate="2025-09-20T18:00:00"
          className="scale-50 md:scale-75 origin-bottom-left"
        />
      </div>

    </div>
  );
};

export default HomePage;