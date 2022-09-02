import React from 'react';
import emailjs from '@emailjs/browser';

// Notion Style Profile SVG
import ProfileCartoonImage from '../images/ProfileCartoonImage.svg';

// Project SVGs
import BobaRealmThumbnail from '../images/BobaRealmThumbnail.svg';
import PathfinderIcon from '../images/PathfinderIcon.svg';

// Links SVGs
import ResumeIcon from '../images/ResumeIcon.svg';
import LinkedInIcon from '../images/LinkedInIcon.svg';
import GithubIcon from '../images/GithubIcon.svg';
import LinkIcon from '../images/LinkIcon.svg';

// Other Technologies SVGs
import DockerIcon from '../images/DockerIcon.svg';
import GitIcon from '../images/GitIcon.svg';
import MySQLIcon from '../images/MySQLIcon.svg';
import WebflowIcon from '../images/WebflowIcon.svg';
import AWSIcon from '../images/AWSIcon.svg';

// Framework SVGs
import ReactIcon from '../images/ReactIcon.svg';
import DjangoIcon from '../images/DjangoIcon.svg';
import NodeJSIcon from '../images/NodeJSIcon.svg';

// Language SVGs
import PythonIcon from '../images/PythonIcon.svg';
import JavascriptIcon from '../images/JavascriptIcon.svg';
import CIcon from '../images/CIcon.svg';
import JavaIcon from '../images/JavaIcon.svg';
import SQLIcon from '../images/SQLIcon.svg';
import HTMLIcon from '../images/HTMLIcon.svg';
import CSSIcon from '../images/CSSIcon.svg';

// External Libraries
import {useRef} from 'react';

export default function HomePage() {
    const contactRef = useRef();
    const projectsRef = useRef();
    const formRef = useRef();
    const scrollToProject = () => projectsRef.current.scrollIntoView({behavior: 'smooth', block:'center', inline: 'center'});
    const scrollToContact = () => contactRef.current.scrollIntoView({behavior: 'smooth', block:'center', inline: 'center'});
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xra3d6s', 'template_o8djot8', formRef.current, 'e4I9UZgflH40B6mMg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="portfolio-body">
        <div className="portfolio-container wf-section">
  <div className="portfolio-nav">
    <div className="portfolio-nav-section">
      <div className="portfolio-nav-title">Robin Nguyen</div>
    </div>
    <div className="portfolio-nav-links-section">
      <div className="portfolio-nav-links">About</div>
      <div className="portfolio-nav-links" onClick={scrollToProject}>Projects</div>
      <div className="portfolio-nav-hire-me-button" onClick={scrollToContact}>Let's Talk</div>
    </div>
  </div>
  <div className="portfolio-hero-section">
    <div className="portfolio-hero-center-container">
      <div className="portfolio-hero-left">
        <h1 className="portfolio-hero-header">
          Hi, my
          <br />
          name is Robin
        </h1>
        <div className="portfolio-hero-descriptor">
          Aspiring Software Engineer from
          <br />
          Sacramento, California
        </div>
      </div>
      <img
        src={ProfileCartoonImage}
        loading="lazy"
        alt=""
        className="portfolio-hero-notion-style-image"
      />
    </div>
    <div className="portfolio-hero-center-links">
      <div className="portfolio-hero-center-link-div">
        <img
          src={ResumeIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">Resume</div>
      </div>
      <a href={`https://www.linkedin.com/in/robinnguyenk/`} className="portfolio-hero-center-link-div">
        <img
          src={LinkedInIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">LinkedIn</div>
      </a>
      <a href={`https://github.com/RobKNguyen`} className="portfolio-hero-center-link-div">
        <img
          src={GithubIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">GitHub</div>
      </a>
    </div>
  </div>
  <div className="portfolio-project-section">
    <h1 className="portfolio-project-header">Projects</h1>
    <div className="portfolio-project-block">
      <h3 className="portfolio-project-heading">Pathfinding Visualizer</h3>
      <div className="portfolio-project-container">
        <div className="portfolio-project-image-div">
          <img
            src={BobaRealmThumbnail}
            loading="lazy"
            alt=""
            className="portfolio-project-image"
          />
        </div>
        <div ref={projectsRef} className="portfolio-project-info-div">
          <h3 className="portfolio-project-info-title">Boba Realm</h3>
          <div className="portoflio-project-info-question">Motivation:</div>
          <div className="portfolio-project-info-summary">
            Parsing through yelp reviews or relying on your friend's opinion
            just isn't reliable enough. So I created this app with the mission
            of empowering users to express their opinions on boba beverages
            around the world and strengthen the boba community overall.
            <br />
          </div>
          <div className="portoflio-project-info-question">Summary:</div>
          <div className="portfolio-project-info-summary">
            Crowd sourced review application which allows user to leave reviews
            and photos on boba drinks they've tried. Grants full CRUD
            functionality for reviews, photos, and user profile.
            <br />
          </div>
          <div className="portoflio-project-info-question">
            Languages/Technologies
          </div>
          <div className="portfolio-project-info-summary">
            React.js, Django, Google Maps API, Nginx, Gunicorn, Amazon Web
            Services (AWS), Webflow
            <br />
          </div>
          <div className="portfolio-project-info-links">
            <div className="portfolio-project-button">
              <img
                src={LinkIcon}
                loading="lazy"
                alt=""
                className="portfolio-project-github-link"
              />
              <a href={`http://bobarealm.com/`} className="portfolio-project-link">Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-project-block">
      <h3 className="portfolio-project-heading">Pathfinding Visualizer</h3>
      <div className="portfolio-project-container">
        <div className="portfolio-project-image-div">
          <img
            src={PathfinderIcon}
            loading="lazy"
            alt=""
            className="portfolio-project-image"
          />
        </div>
        <div className="portfolio-project-info-div">
          <h3 className="portfolio-project-info-title">
            Pathfinding Visualizer
          </h3>
          <div className="portoflio-project-info-question">Motivation:</div>
          <div className="portfolio-project-info-summary">
            I decided to make this project because I&nbsp;really enjoyed graph
            theory in undergrad and I wanted to apply what I&nbsp;learned to a
            fun project.
            <br />
          </div>
          <div className="portoflio-project-info-question">Summary:</div>
          <div className="portfolio-project-info-summary">
            A simple pathfinding and maze generating visualizer via a two
            dimensional graph. Algorithms demonstrated include DFS, BFS,
            Dijkstra's, A*, and Kruskal's.
            <br />
          </div>
          <div className="portoflio-project-info-question">
            Programming Languages
          </div>
          <div className="portfolio-project-info-summary">
            React.js, Google Cloud Platform
            <br />
          </div>
          <div className="portfolio-project-info-links">
            <div className="portfolio-project-button">
              <img
                src={GithubIcon}
                loading="lazy"
                alt=""
                className="portfolio-project-github-link"
              />
              <a href={`https://github.com/RobKNguyen/Pathfinder`} className="portfolio-project-link">GitHub</a>
            </div>
            <div className="portfolio-project-button">
              <img
                src={LinkIcon}
                loading="lazy"
                alt=""
                className="portfolio-project-github-link"
              />
              <a href={`https://pathfinder-349020.uw.r.appspot.com/`} className="portfolio-project-link">Website</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="portfolio-project-block">
      <h3 className="portfolio-project-heading">Pathfinding Visualizer</h3>
      <div className="portfolio-project-container">
        <div className="portfolio-project-image-div" />
        <div className="portfolio-project-info-div">
          <h3 className="portfolio-project-info-title">
            Heartbaker (School Project)
          </h3>
          <div className="portoflio-project-info-question">Assignment:</div>
          <div className="portfolio-project-info-summary">
            My team and I were given 10 weeks to plan, develop, and deploy a
            recipe creation app. We were responsible for having daily standup
            meetings, utilizing agile development principles, and
            CI/CD&nbsp;pipeline to facilitate development process.
            <br />
          </div>
          <div className="portoflio-project-info-question">Summary:</div>
          <div className="portfolio-project-info-summary">
            Implemented a fully functional recipe application with full CRUD and
            searching functionality. Enables user to add recipes to their own
            recipe list and add ingredients from said recipes to their grocery
            shopping list.
            <br />
          </div>
          <div className="portoflio-project-info-question">
            Programming Languages
          </div>
          <div className="portfolio-project-info-summary">
            Javascript, HTML, CSS, Spoonacular API
            <br />
          </div>
          <div className="portfolio-project-info-links">
            <div className="portfolio-project-button">
              <img
                src={GithubIcon}
                loading="lazy"
                alt=""
                className="portfolio-project-github-link"
              />
              <div className="portfolio-project-link">GitHub</div>
            </div>
            <div className="portfolio-project-button">
              <img
                src={LinkIcon}
                loading="lazy"
                alt=""
                className="portfolio-project-github-link"
              />
              <div className="portfolio-project-link">Website</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="portfolio-tech-stack-section">
    <h1 className="heading-2">Technologies</h1>
    <h1 className="portfolio-page-tech-header">Languages</h1>
    <div className="portfolio-page-tech-stack-div">
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={PythonIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Python</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={JavascriptIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-im"
          />
        </div>
        <div className="portfolio-page-tech-title">Javascript</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={CIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">C++</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={JavaIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Java</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={SQLIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">SQL</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={HTMLIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">HTML</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={CSSIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">CSS</div>
      </div>
    </div>
    <h1 className="portfolio-page-tech-header">Frameworks</h1>
    <div className="portfolio-page-tech-stack-div">
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={DjangoIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Django</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={ReactIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">React</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={NodeJSIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Node.js</div>
      </div>
    </div>
    <h1 className="portfolio-page-tech-header">Other Technologies</h1>
    <div className="portfolio-page-tech-stack-div">
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={DockerIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">MySQL</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={AWSIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Amazon Web Services</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={GitIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Git</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={MySQLIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Docker</div>
      </div>
      <div className="portfolio-page-tech-info-div">
        <div className="portfolio-page-tech-image-div">
          <img
            src={WebflowIcon}
            loading="lazy"
            alt=""
            className="portfolio-page-tech-image"
          />
        </div>
        <div className="portfolio-page-tech-title">Webflow</div>
      </div>
    </div>
  </div>
  <div className="portfolio-prompt-section">
    <h1 className="portfolio-prompt-header">Get in touch!</h1>
    <form ref={formRef} onSubmit={sendEmail} className="portfolio-contact-form-block w-form">
      <div
        id="email-form"
        name="email-form"
        data-name="Email Form"
        method="get"
        className="portfolio-contact-form"
      >
        <label htmlFor="name" className="portfolio-contact-field-label">
          Email
        </label>
        <input
          type="text"
          className="portfolio-contact-text-field w-input"
          maxLength={256}
          name="email"
          data-name="Email"
          placeholder="Please enter your email."
          id="email"
        />
        <label htmlFor="field" className="portfolio-contact-field-label">
          Message
        </label>
        <textarea
          ref={contactRef}
          placeholder="Let me know if you would like to work with me!"
          maxLength={5000}
          name="message"
          data-name="message"
          className="portfolio-contact-textarea w-input"
          defaultValue={""}
        />
        <input
          type="submit"
          defaultValue=""
          data-wait="Please wait..."
          className="portfolio-contact-submit-btn w-button"
        />
      </div>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </form>
  </div>
  <div className="portfolio-appreciation-section">
    <h1 className="portfolio-appreciation-header">A Sincere Thank You!</h1>
    <div className="portfolio-appreciation-text">
      You made it to the end of my portfolio. Thank you so much for taking the
      time out of your day to consider me! I am always trying to improve so
      please leave feedback if you'd like. I hope that you like what you see,
      and that we can potentially work together in the future!
      <br />
      <br />
      <br />
      Feel free to reach out to me at any of the links below!
    </div>
    <div className="portfolio-footer-links">
      <div className="portfolio-hero-center-link-div">
        <img
          src={ResumeIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">Resume</div>
      </div>
      <a href={`https://www.linkedin.com/in/robinnguyenk/`} className="portfolio-hero-center-link-div">
        <img
          src={LinkedInIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">LinkedIn</div>
      </a>
      <a href={`https://github.com/RobKNguyen`} className="portfolio-hero-center-link-div">
        <img
          src={GithubIcon}
          loading="lazy"
          alt=""
          className="portfolio-hero-image-link"
        />
        <div className="portfolio-hero-center-link">GitHub</div>
      </a>
    </div>
  </div>
</div>
</div>
    )
}