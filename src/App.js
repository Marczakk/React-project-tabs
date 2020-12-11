  
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs)
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  },[]);


  if(loading){
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }



  const {company, dates, duties, title} = jobs[value];
  return(
    <section className='section'>
      <div class="title">
        <h2>experience</h2>
        <div class="underline"></div>
      </div>
      <div class="jobs-center">
        {}
        <div class="btn-container">
          {
            jobs.map((item,index) => {
              return(
                <button key={item.id} onClick={() => setValue(index)}
                className={`job-btn ${index === value && 
                'active-btn'}`}>
                  {item.company}
                </button>
              )
            })
          }
        </div>
        {}
        <article class="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p class="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} class="job-desc">
                <FaAngleDoubleRight className="job-icon"/>
                <p>{duty}</p>

              </div>
            )
          })}

        </article>
      </div>
    </section>
  )


  return <h2>tabs project setup</h2>
}

export default App