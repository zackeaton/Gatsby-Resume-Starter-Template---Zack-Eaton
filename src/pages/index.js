import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          <p>Hey there!</p>

          <p>My name is Zack, and I am an Information Systems & Technology graduate from the University of Missouri Saint Louis. 
            One thing I particularly enjoyed about majoring in Information Systems is that this field really allows me to use both my technical skills like computer programming and my front facing business skills. 
            I am very passionate about data and analytics and I enjoy helping companies make better use of current data, as well as collecting new data.</p>
          
          <p>I've participated in a variety of school events. 
            Everything from hackathons, networking events, and even intermural pickleball. 
            I am an active member of The National Society of Leadership and Success, Information Systems Programming Club, CompTIA AITP, and Marketing Club. 
            I volunteered my film and editing skills to produce the original promotional video for the first UMSL Hack, which was a huge success. 
            UMSL Hack just put on its fourth hackathon in February 2020.</p>
         
          <p>You can keep up with me on my social media accounts linked below. 
            I am always looking to try new food, beverages, and experiences. 
            You can also drop me an email through the button on your left.</p>
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer and Digital Marketing Specialist</h3>
              <div className="subheading mb-3">Sikich</div>
              <p>
              <p>Bring to the table win-win survival strategies to ensure
              proactive domination. </p>

              <p>At the end of the day, going forward, a
              new normal that has evolved from generation X is on the runway
              heading towards a streamlined cloud solution. </p>

              <p>User generated
              content in real-time will have multiple touchpoints for
              offshoring.</p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2021 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Business Development Manager</h3>
              <div className="subheading mb-3">DC Dev Shop</div>
              <p>
              <p>Generated inbound and outbound client leads for web development
              agency with clients across small businesses, non-profits, media, and
              government entities.</p>

              <p>Advised clients on service opportunities including web design,
              marketing solutions, and website maintenance, regardless of budget.</p>

              <p>Established relationships with prospective clients in order to evaluate
              business needs and identify room for growth.</p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 – October 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Product Manager, Esports </h3>
              <div className="subheading mb-3">EyePromise</div>
              <p>
              <p>Launched a new brand within vision supplement company focused on
              a line of vitamins for video gamers with a high screen time.</p>

              <p>Educated a new Gen Z and millennial customer base on eye health via
              email marketing, paid ads, social media, and influencer partnerships.</p>

              <p>Designed a single-page website with ecommerce functionality to
              showcase and sell products.</p>

              <p>Revitalized defunct social media presence, increasing following by
              36% and amassing over 1M impressions and 32K engagements.</p>

              <p>Initiated partnerships with brands and influencers in the esports
              space, including United's Call of Duty championship team, collegiate
              esports teams, professional players, and content creators.</p>

              <p>Reported and analyzed website and social media metrics, such as
              traffic, engagement, views, reach, and ecommerce purchases, which
              were then presented to executives.</p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 – April 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Information Systems Intern</h3>
              <div className="subheading mb-3">EyePromise</div>
              <p>
              <p>Managed data and insights for company aimed at developing
              products to preserve, support, and improve vision for people
              concerned with age-related eye health.</p>

              <p>Created NPS surveys distributed to various audiences who interacted
              with the company, then recorded within CRM database.</p>

              <p>Tested and implemented text messaging integration into CRM,
              allowing a new avenue for the marketing team to communicate with
              customers who opt in.</p>

              <p>Streamlined data collection with automation techniques, such as a
              machine learning application programmed to better categorize survey
              responses and allow for a more detailed use of analytics.</p>

              <p>Edited archival pages on the company's website to improve SEO,
              utilizing Google SERP tools to strength page titles and descriptions.</p>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 – May 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">University of Missouri - St. Louis</h3>
              <div className="subheading mb-3">Bachelors of Science - Information Systems & Technology</div>
              {/* <p>GPA: 3.23</p> */}
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2010 - May 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">St. Charles Community College</h3>
              <div className="subheading mb-3">Associates of Arts</div>
              {/* <p>GPA: 3.23</p> */}
              {/* <p>GPA: 3.23</p> */}
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2014 - December 2016</span>
            </div>
          </div>

{/*           <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Francis Howell North High school</h3>
              <div className="subheading mb-3"></div>
              <p>GPA: 3.23</p>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2010 - May 2014</span>
            </div>
          </div> */}

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Analytics Certified Developer
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Hubspot Sales Software Certificate
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Hubspot Inbound Certificate
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Beginner Javascript - Wes Bos
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Command Line Heros - Wes Bos
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
