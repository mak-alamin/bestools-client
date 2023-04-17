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
    <div className='business-stat p-32' style={{backgroundImage:`url('/images/top-view-different-types-tools-1.jpg')`}}>
      <div className="container text-center text-white flex items-center justify-between">
      <div>
        <CountUp className='text-4xl' end={completedProjects} duration={3} suffix='+' />
        <p className='text-lg'> Sold Tools</p>
      </div>
      <div>
        <CountUp className='text-4xl' end={happyClients} duration={3} suffix='+' />
        <p className='text-lg'> Happy Clients</p>
      </div>
      
      <div>
        <CountUp className='text-4xl' end={reviews} duration={3} suffix='+' />
        <p className='text-lg'> Reviews</p>
      </div>

      <div>
        <CountUp className='text-4xl' end={experiencedYears} duration={3} />
        <p className='text-lg'> Years of Experience </p>
      </div>
      </div>
    </div>
  );
};

export default BusinessStats;
