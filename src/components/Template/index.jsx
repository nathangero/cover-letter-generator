import "./style.css";
import { useState } from "react"

export default function Template() {

  const [companyName, setCompanyName] = useState("COMPANY_NAME");
  const [companyHiringManager, setCompanyHiringManager] = useState("HIRING_MANAGER");
  const [companyValues, setCompanyValues] = useState([]);
  const [useCompanyName, showCompanyName] = useState(true); // Show either company name or hiring manager

  const [userFullName, setUserFullName] = useState("YOUR_FULL_NAME");
  const [userEmail, setUserEmail] = useState("YOUR_EMAIL");
  const [userPhone, setUserPhone] = useState("YOUR_PHONE");
  const [userOccupation, setOccupation] = useState("YOUR_OCCUPATION");
  const [userOccupationLocation, setOccupationLocation] = useState("YOUR_OCCUPATION_LOCATION");
  const [userStartDate, setStartDate] = useState("START_DATE");
  const [userAboutMe, setAboutMe] = useState("YOUR_RELAVENT_WORK_EXPERIENCE_EXTRACURRICULARS_PROJECTS");

  const useAorAn = () => {
    const firstLetter = userOccupation[0];
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      return "an"
    }

    return "a"
  }

  const listCompanyValues = () => {
    if (companyValues.length === 0) {
      return "COMPANY_VALUES";
    }

    if (companyValues.length === 1) {
      return companyValues[0];
    }

    let valueStr;
    companyValues.map((value, index) => {
      if (index === companyValues.length - 1) {
        valueStr += `and ${value}`
      } else {
        // Determine if a comma should go before "and" is appended
        valueStr += (index === companyValues.length - 2) ? value : `${value}, `;
      }
    })

    return valueStr;
  }

  return (
    <>
      <div>
        <h1>Template</h1>
        <div className="fs-5 template">
          <p>Dear <span className="user-input">{useCompanyName ? companyName : companyHiringManager}</span>,</p>
          <p>I hope your day is going well! My name is <span className="user-input">{userFullName}</span>, and I&apos;m {useAorAn()} at <span className="user-input">{userOccupationLocation}</span>. I am very interested in working for <span className="user-input">{companyName}</span> and can start <span className="user-input">{userStartDate}</span>. Your commitment to <span className="user-input">{listCompanyValues()}</span> that I saw on the website inspired me! The products you build and the values you stand for make <span className="user-input">{companyName}</span> seem like an ideal workplace for me.</p>
          <p>A little about me, <span className="user-input">{userAboutMe}</span></p>
          <p>I think these experiences would make me a great candidate for you.</p>
          <p>Please let me know if there&apos;s anything else you need from me. I look forward to hearing from you! I can be reached at <span className="user-input">{userEmail}</span> and <span className="user-input">{userPhone}</span>.</p>
          <p>Best regards,<br /><span className="user-input">{userFullName}</span></p>
        </div>
      </div>

      <div>
        <h1>Your Edits</h1>

      </div>
    </>
  )
}