import { useState } from 'react';

import '../App.css';
import Herosection from '../components/Herosection';
import Aboutus from '../components/Aboutus';
import CoursesOverview from '../components/CoursesOverview';
import Testimonials from '../components/Testimonials';
import TaiLinks from '../components/TailLinks';

function Home() {
  return (
    <div className="App">
      <Herosection />
      <Aboutus />
      {/* <CoursesOverview /> */}
      <Testimonials />
      <TaiLinks />
    </div>
  );
}

export default Home;
