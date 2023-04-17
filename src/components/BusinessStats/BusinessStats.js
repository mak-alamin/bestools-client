import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const BusinessStats = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [experiencedYears, setExperiencedYears] = useState(0);

  useEffect(() => {
    setCompletedProjects(10500);
    setHappyClients(1500);
    setReviews(1200)
    setExperiencedYears(14);
  }, []);

  return (
    <div className='business-stat md:p-10 lg:p-32 p-5 md:pt-0 pt-10' style={{backgroundImage:`url('/images/top-view-different-types-tools-1.jpg')`}}>

      <div className="container text-center text-white md:flex items-center justify-between">
      <div className='mb-10'>
        <CountUp className='md:text-4xl text-2xl' end={completedProjects} duration={3} suffix='+' />
        <p className='md:text-lg text-md'> Sold Tools</p>
      </div>
      <div className='mb-10'>
        <CountUp className='md:text-4xl text-2xl' end={happyClients} duration={3} suffix='+' />
        <p className='md:text-lg text-md'> Happy Clients</p>
      </div>
      
      <div className='mb-10'>
        <CountUp className='md:text-4xl text-2xl' end={reviews} duration={3} suffix='+' />
        <p className='md:text-lg text-md'> Reviews</p>
      </div>

      <div className='mb-10'>
        <CountUp className='md:text-4xl text-2xl' end={experiencedYears} duration={3} />
        <p className='md:text-lg text-md'> Years of Experience </p>
      </div>
      </div>
    </div>
  );
};

export default BusinessStats;
