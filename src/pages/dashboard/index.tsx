'use client';
import React, { Component } from 'react';
import Head from 'next/head';
import { FaTachometerAlt, FaTrophy, FaBook, FaSignOutAlt, FaBars } from 'react-icons/fa';

interface DashboardState {
  timeLeft: string;
  score: number;
  questionsSolved: number;
  repositories: { id: number; name: string; tech: string; stars: number }[];
  isNavbarOpen: boolean;
}

class Dashboard extends Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      timeLeft: '05:05:05',
      score: 5763,
      questionsSolved: 7,
      repositories: [
        { id: 1, name: 'FFCS Planner', tech: 'Next.js Express MySQL', stars: 5 },
        { id: 2, name: 'Project Alpha', tech: 'React Node.js MongoDB', stars: 4 },
        { id: 3, name: 'Project Beta', tech: 'Angular Spring Boot', stars: 3 },
        { id: 4, name: 'Project Gamma', tech: 'Vue.js Flask', stars: 2 },
        { id: 5, name: 'Project Delta', tech: 'Django PostgreSQL', stars: 4 },
        { id: 6, name: 'Project Epsilon', tech: 'Ruby on Rails', stars: 5 },
        { id: 7, name: 'Project Zeta', tech: 'Ruby on Rails', stars: 5 },
        { id: 8, name: 'Project Theta', tech: 'Ruby on Rails', stars: 5 },
        { id: 9, name: 'Project Iota', tech: 'Ruby on Rails', stars: 5 },
        { id: 10, name: 'Project Kappa', tech: 'Ruby on Rails', stars: 5 },
      ],
      isNavbarOpen: false,
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({
      isNavbarOpen: !prevState.isNavbarOpen,
    }));
  };

  render() {
    const { timeLeft, score, questionsSolved, repositories, isNavbarOpen } = this.state;

    return (
      <>
        <div className="flex flex-col lg:flex-row bg-black text-white h-screen">
          <Head>
            <title>Dashboard</title>
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
              rel="stylesheet"
            />
          </Head>

          <aside className={`lg:w-80 p-6 bg-[rgba(10,12,14,1)] flex flex-col lg:static absolute font-press ${isNavbarOpen ? 'top-0 left-0 w-full' : 'hidden'} lg:block`}>
            <div className="mb-10 text-center lg:flex lg:flex-col lg:items-center">
              <div className="mb-28 flex items-center justify-center space-x-0">
                <img src="/flower.png" alt="Avatar" width={150} height={150} className="rounded-full -mr-4" />
                <div>
                  <p className="text-lg">Player 1</p>
                  <p className="text-sm text-gray-400 mr-1">pimla@gmail.com</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 mb-1">
              <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-3">
                <FaTachometerAlt className="mr-3 text-[#C8BCF6]" /> Dashboard
              </a>
              <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-3">
                <FaTrophy className="mr-3 text-[#C8BCF6]" /> Leaderboard
              </a>
              <a href="#" className="py-3 p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200 mb-44">
                <FaBook className="mr-3 text-[#C8BCF6]" /> Resources
              </a>
            </nav>

            <div className="pt-10">
              <a href="#" className="p-6 text-white text-lg flex items-center hover:text-purple-500 transition-colors duration-200">
                <FaSignOutAlt className="mr-3 text-[#C8BCF6]" />
                Logout
              </a>
            </div>
          </aside>

          <div className="lg:hidden p-4 bg-black flex justify-between items-center">
            <h1 className="text-2xl">Dashboard</h1>
            <button onClick={this.toggleNavbar} className="text-white text-2xl">
              <FaBars />
            </button>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-8 overflow-hidden"> {/* Removed overflow-y-auto from here */}
            <section className="flex justify-center items-center mb-10">
              <div className="text-center">
                <h1 className="text-5xl mb-2 font-press -mt-5">Time Left</h1>
                <p className="text-4xl font-bold leading-[30.5px] tracking-[0.5%] font-press" style={{ marginTop: '1rem' }}>{timeLeft}</p>
              </div>
              <div className="ml-4 -mt-4">
                <img src="/mario.png" alt="Mario" width={70} height={100} />
              </div>
            </section>

            {/* Repositories Section */}
            <section className="w-full mx-auto max-w-4xl mb-5 -mt-5">
              <div className="border-2 border-gray-600 rounded-lg bg-black p-6">
                <h2 className="text-3xl mb-3 text-center font-press">Repositories</h2>
                <div className="space-y-4 max-h-[430px] overflow-y-auto repo-scrollbar"> {/* Restricted the height and added overflow-y-auto */}
                  {repositories.map((repo) => (
                    <div
                      key={repo.id}
                      className="bg-[rgba(25,25,25,1)] p-4 border border-gray-600 rounded-lg flex flex-col lg:flex-row justify-between items-center"
                    >
                      <div className="text-white flex-1 text-left">{repo.id}</div>
                      <div className="text-white flex-1 text-left">{repo.name}</div>
                      <div className="text-white flex-1 text-left">{repo.tech}</div>
                      <div className="text-white flex-1 text-left">{repo.stars}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-[20%] p-8 bg-[rgba(10,12,14,1)] border-l-2 border-gray-900 flex-col overflow-y-auto">
            <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
              <h2 className="text-xl mb-4 font-press">Your Score</h2>
              <div className="flex justify-center items-center space-x-4">
                <p className="text-lg font-bold">{score}</p>
                <img src="/coins.png" alt="Coins" width={64} height={64} />
              </div>
            </div>

            <div className="mb-8 p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
              <h2 className="text-xl mb-4 font-press">Challenge Progress</h2>
              <p className="text-lg">Questions Solved: {questionsSolved}/15</p>
              <p className="text-sm text-gray-400">Fastest Solve: 5 Min 30 Sec</p>
              <p className="text-sm text-gray-400">Longest Solve: 25 Min 30 Sec</p>
              <div className="flex justify-center mt-4">
                <img src="/clock.png" alt="Clock" width={48} height={48} />
              </div>
            </div>

            <div className="p-6 bg-[rgba(25,25,25,1)] border border-gray-700 rounded-lg text-center">
              <h2 className="text-xl mb-4 font-press">Report an Issue</h2>
              <p className="mb-4 text-sm">If you are facing any issue on this page, please let us know.</p>
              <button className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-200">
                Report
              </button>
            </div>
          </aside>
        </div>
      </>
    );
  }
}

export default Dashboard;
