import Saurabh_Resume from "./SAURABH RESUME.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume2 = () => {
  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Wrf2l_aJT1y1mUqtK0LNB6e9FR3SOzTN/view?usp=sharing"
      
    );
  };

  return (
    <div>
      <a
        href={Saurabh_Resume}
        download="Saurabh_Wakde_Resume"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-button-1 resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};
