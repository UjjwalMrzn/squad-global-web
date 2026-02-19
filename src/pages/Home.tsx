import React from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ProblemSolution from '../components/home/ProblemSolution';
import ValueProps from '../components/home/ValueProps';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustedBy />
      <ProblemSolution />
      <ValueProps />
    </div>
  );
};

export default Home;