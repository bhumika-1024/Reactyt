import Card from './components/Card';


const App = () => {
  
  const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full-Time",
    tag2: "Flexible",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "UI Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    company: "Meta",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Part-Time",
    tag2: "Flexible",
    pay: "$42/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    company: "Adobe",
    datePosted: "4 days ago",
    post: "React JS Developer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    company: "Spotify",
    datePosted: "1 day ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    company: "Airbnb",
    datePosted: "2 weeks ago",
    post: "JavaScript Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Gurugram, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    company: "Apple",
    datePosted: "3 days ago",
    post: "Frontend Intern",
    tag1: "Part-Time",
    tag2: "Internship",
    pay: "$30/hr",
    location: "Ahmedabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    company: "Tesla",
    datePosted: "1 week ago",
    post: "React UI Engineer",
    tag1: "Full-Time",
    tag2: "Flexible",
    pay: "$58/hr",
    location: "Remote",
  },
];

  return (
    <div className='parent'>
        {jobs.map(function(elem, idx){
          return <div key={idx}>
            <Card 
          logo={elem.brandLogo}
          company={elem.company} 
          datePosted={elem.datePosted} 
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          loc={elem.location}
          />
            </div>
        })}
    </div>
  )
}

export default App
