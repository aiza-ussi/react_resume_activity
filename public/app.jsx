var Image = React.createClass({
  render: function () {
    return (
      <div className="text-center mt-5">
        <img src="images/me.jpg" className="img-fluid"/>
      </div>
    );
  }
});

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center mt-5">About</h3>
        <p>To provide quality work, be of service to others and apply the knowledge and skills acquired over experience and quality education.</p>
      </div>
    );
  }
});

var Skills = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center mt-5">Skills</h3>
        <ul>
          <li>Web Development</li>
          <li>Programming</li>
          <li>On-page SEO</li>
          <li>Keyword Research</li>
          <li>Social media management</li>
          <li>SEO Website Audit Transcription</li>
          <li>Email management</li>
          <li>Project management</li>
          <li>Lead Generation</li>
        </ul>
      </div>
    );
  }
});

var Work = React.createClass({
  render: function () {
    return (
      <div>
        <h3 className="text-center my-5">Work Experience</h3>
        <p><span className="bold">{date}</span>April 2017 – Present</p>
        <p><span className="bold">{jobTitle}</span>Shopify SEO Specialist / Helpdesk Support Specialist Job</p>
        <p><span className="bold">{description}</span>Analyzes, reviews and implements changes to websites so they are optimized for search engines. Answer SEO- related questions.</p>
        <hr/>
        <p><span className="bold">{date}</span>September 2016 – December 2017</p>
        <p><span className="bold">{jobTitle}</span>SEO Website Auditor / Part-time Executive Assistant Job</p>
        <p><span className="bold">{description}</span>
          <ul>
            <li>Researching information and facts to keep the website’s information up-to-date.</li>
            <li>Respond to website inquiries.</li>
            <li>Research on product information for articles.</li>
            <li>Basic SEO using skyscraper method and link prospecting using search operators.</li>
            <li>Lead generation.</li>
            <li>Perform SEO website audit on client’s website.</li>
          </ul>
        </p>
        <hr/>
        <p><span className="bold">{date}</span>September 2017 – February 2018</p>
        <p><span className="bold">{jobTitle}</span>Social Media Manager</p>
        <p><span className="bold">{description}</span>Development of brand awareness and online reputation through social media platform.</p>
        <hr/>
        <p><span className="bold">{date}</span>May 2015 – December 2016</p>
        <p><span className="bold">{jobTitle}</span>Full-time Virtual Assistant</p>
        <p><span className="bold">{description}</span>
          <ul>
            <li>Qualification: confirms the fit of a list of link prospects for targeted outreach or thematic data collection.</li>
            <li>Lead Generation: looks for contacts from a given list of websites and ensuring the contacts are as topically-appropriate to the project as possible.</li>
            <li>Manual Outreacher (Link Building): contacts different sites via email and pitching resources, with the goal of earning client links.</li>
          </ul>
        </p>
        <hr/>
        <p><span className="bold">{date}</span>August 2010 – May 2015</p>
        <p><span className="bold">{jobTitle}</span>Part-time Online English Tutor, Rarejob Inc.</p>
        <p><span className="bold">{description}</span>Conducts online classes for Japanese students via Skype to help them improve and practice their English communication skills.</p>
      </div>
    );
  }
});

var Greeter = React.createClass({
  render: function () {

    var date = this.props.date;
    var jobTitle = this.props.jobTitle;
    var description = this.props.description;

    return (
      <div className="col-lg-6 mx-auto">
        <Image/>
        <h1 className="text-center mt-5">Aiza Casero Leano</h1>
        <h5 className="text-center">Software Engineer | Web Developer | On-Page SEO Specialist</h5>
        <About/>
        <Skills/>
        <Work/>
      </div>
    );
  }
});

var date = 'Date: ';
var jobTitle = 'Job Title: ';
var description ='Job Description: ';

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
