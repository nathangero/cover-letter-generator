import "./style.css";
import { useEffect, useState } from "react"

export default function Template() {

  const [isEditing, setIsEditing] = useState(false);
  const [templateEdit, setTemplateEdit] = useState("");
  const [editTextareaRows, setEditTextareaRows] = useState(1); // Initial row count


  const [companyName, setCompanyName] = useState("GREET_COMPANY");
  const [companyHiringManager, setCompanyHiringManager] = useState("GREET_HIRING_MANAGER");
  const [companyValues, setCompanyValues] = useState([]);
  const [value, setValue] = useState("");
  const [useHiringManager, showHiringManager] = useState(false); // Show/Hide using hiring manager

  const [userFullName, setUserFullName] = useState("YOUR_FULL_NAME");
  const [userEmail, setUserEmail] = useState("YOUR_EMAIL");
  const [userPhone, setUserPhone] = useState("YOUR_PHONE");
  const [userOccupation, setOccupation] = useState("YOUR_OCCUPATION");
  const [userOccupationWorkplace, setOccupationWorkplace] = useState("YOUR_WORKPLACE");
  const [userStartDate, setStartDate] = useState("START_DATE");
  const [userAboutMe, setAboutMe] = useState("YOUR_EXPERIENCE_PROJECTS");

  useEffect(() => {
    if (isEditing) {
      // Scroll to the bottom of the screen after the textarea is rendered
      const element = document.getElementById("button-copy");
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [isEditing])

  const getAorAn = () => {
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

    let valueStr = "";
    companyValues.map((value, index) => {
      if (!value) return; // Assertion check to prevent empty values

      // Add the last value in the array to the string
      if (index === companyValues.length - 1 && companyValues.length > 1) {
        valueStr += ` and ${value}`
      } else if (companyValues.length > 2) {
        // Determine if a comma should go before "and" is appended
        valueStr += (index === companyValues.length - 2) ? value : `${value}, `;
      } else { // Add value to string
        valueStr += value;
      }
    })

    return valueStr;
  }

  const setValueId = (val) => {
    return val.split(" ").join("-");
  }

  const onChangeTemplateEdit = ({ target }) => {
    setTemplateEdit(target.value);
  }

  const onChangeCompanyName = ({ target }) => {
    setCompanyName(target.value);
  }

  const onChangeHiringManager = ({ target }) => {
    setCompanyHiringManager(target.value);
  }

  const onChangeCompanyValue = ({ target }) => {
    setValue(target.value);
  }

  const onChangeFullName = ({ target }) => {
    setUserFullName(target.value);
  }

  const onChangeOccupation = ({ target }) => {
    setOccupation(target.value);
  }

  const onChangeOccupationWorkplace = ({ target }) => {
    setOccupationWorkplace(target.value);
  }

  const onChangeEmail = ({ target }) => {
    setUserEmail(target.value);
  }

  const onChangePhone = ({ target }) => {
    setUserPhone(target.value);
  }

  const onChangeStartDate = ({ target }) => {
    setStartDate(target.value);
  }

  const onChangeAboutMe = ({ target }) => {
    setAboutMe(target.value);
  }

  const toggleHiringManager = () => {
    console.log("@toggleHiringManager")
    if (useHiringManager) setCompanyHiringManager("GREET_HIRING_MANAGER")
    showHiringManager(!useHiringManager);
  }

  const onSubmitValue = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!value) { alert("Can't add a blank value"); return; }

    setCompanyValues([...companyValues, value]);
    setValue("");
  }

  const onClickRemoveValue = (value) => {
    const valueToRemove = document.getElementById(setValueId(value)).textContent;
    setCompanyValues(companyValues.filter(value => value != valueToRemove))
  }

  const onClickCopy = () => {
    var copyText = "";
    if (isEditing) {
      copyText = document.getElementById("template-manual-edit").textContent; // .textContent properly copies from <textarea>
    } else {
      copyText = document.getElementById("template-input").innerText; // .innerText properly copies newlines from <p>
    }

    // Copy the text to the clipboard
    navigator.clipboard.writeText(copyText);
  }

  const onClickEdit = () => {
    if (!isEditing) { // Do the following before we switch to the <textarea>
      var copyText = document.getElementById("template-input").innerText; // .innerText properly copies newlines
      setTemplateEdit(copyText);

      const newRows = copyText.split('\n').length + 5; // Create the amount of rows needed
      setEditTextareaRows(newRows);
    }
    setIsEditing(!isEditing);
  }


  const renderTemplate = () => {
    return (
      <>
        <h1>Template</h1>
        {isEditing ?
          <div>
            <textarea id="template-manual-edit" className="fs-5 p-3 mb-4" rows={editTextareaRows} value={templateEdit} onChange={onChangeTemplateEdit} />
          </div> :
          <div>
            <div className="fs-5 template">
              <p id="template-input">Dear <span className="user-input">{useHiringManager ? companyHiringManager : companyName}</span>,
                <br /><br />
                I hope your day is going well! My name is <span className="user-input">{userFullName}</span>, and I&apos;m {getAorAn()} <span className="user-input">{userOccupation}</span> at <span className="user-input">{userOccupationWorkplace}</span>. I am very interested in working for <span className="user-input">{companyName}</span> and can start <span className="user-input">{userStartDate}</span>. Your commitment to <span className="user-input">{listCompanyValues()}</span> that I saw on the website inspired me! The products you build and the values you stand for make <span className="user-input">{companyName}</span> seem like an ideal workplace for me.
                <br /><br />
                A little about me, <span className="user-input">{userAboutMe}</span>
                <br /><br />
                I think these experiences would make me a great candidate for you.
                <br /><br />
                Please let me know if there&apos;s anything else you need from me. I look forward to hearing from you! I can be reached at <span className="user-input">{userEmail}</span> and <span className="user-input">{userPhone}</span>.
                <br /><br />
                Best regards,<br /><span className="user-input">{userFullName}</span>
              </p>
            </div>
          </div>
        }

        <div className="d-flex justify-content-center mb-5">
          <button id="button-copy" className="btn btn-primary mx-2" onClick={() => onClickCopy()}>Copy Template</button>
          <button className="btn btn-primary mx-2" onClick={() => onClickEdit()}>{isEditing ? "Stop Editing" : "Manual Edit"}</button>
        </div>
      </>
    )
  }

  const renderEdits = () => {
    return (
      <>
        <div>
          <h1>Your Edits</h1>
          <div className="container-fluid row">
            <div className="col">
              <div className="input-row">
                <label className="mx-3">Company Name:</label>
                <div className="d-flex">
                  <input className="form-control me-3" onChange={onChangeCompanyName} placeholder="Cool Place Inc." />
                  <button className="btn btn-primary" onClick={() => toggleHiringManager()}>{useHiringManager ? "Greet Company" : "Greet Manager"}</button>
                </div>
              </div>

              {!useHiringManager ? null :
                <div className="input-row">
                  <label className="mx-3">Hiring Manager:</label>
                  <div className="d-flex">
                    <input className="form-control me-3" onChange={onChangeHiringManager} placeholder="Their Name" />
                  </div>
                </div>
              }
              <div className="input-row">
                <label className="mx-3">Your Name:</label>
                <input className="form-control" onChange={onChangeFullName} placeholder="First Last" />
              </div>
              <div className="input-row">
                <label className="mx-3">Your Occupation:</label>
                <input className="form-control" onChange={onChangeOccupation} placeholder="Cool Job Title" />
              </div>
              <div className="input-row">
                <label className="mx-3">Your Workplace:</label>
                <input className="form-control" onChange={onChangeOccupationWorkplace} placeholder="e.g. Cool Job Inc." />
              </div>
              <div className="input-row">
                <label className="mx-3">Your Email:</label>
                <input className="form-control" type="email" onChange={onChangeEmail} placeholder="test@example.com" />
              </div>
              <div className="input-row">
                <label className="mx-3">Your Phone #:</label>
                <input className="form-control" type="tel" onChange={onChangePhone} placeholder="e.g 555-555-5555" />
              </div>
              <div className="input-row">
                <label className="mx-3">Start Date:</label>
                <input className="form-control" onChange={onChangeStartDate} placeholder="e.g. 01/23/24" />
              </div>
            </div>
            <div className="col">
              <div className="input-row">
                <form className="m-0" onSubmit={onSubmitValue}>
                  <label className="mx-3">Company Values:</label>
                  <div>
                    <div className="d-flex">
                      <input className="form-control me-3" value={value} onChange={onChangeCompanyValue} placeholder="One value at a time" />
                      <button type="submit" className="btn btn-primary">Add Value</button>
                    </div>
                    {companyValues?.map((value, index) => (
                      <div key={index} className="company-value mt-3">
                        <p id={setValueId(value)} className="my-2 ps-2">{value}</p>
                        <button className="btn" type="button" onClick={() => onClickRemoveValue(setValueId(value))}><i className="bi bi-x-lg"></i></button>
                      </div>
                    ))}
                  </div>
                </form>
              </div>

              <div className="input-row">
                <label className="mx-3">About Me:</label>
                <textarea className="form-control" onChange={onChangeAboutMe} rows={5} placeholder="List your relevant work experience, extracurriculars, and projects" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {renderEdits()}
      {renderTemplate()}
    </>
  )
}