import React from "react";
import "../components/ElectionInstructions.css";
import { useNavigate } from "react-router-dom";

const ElectionInstructions = () => {
  const navigate = useNavigate();

  const handleClickCancel = () => {
    navigate("/personal-info");
  };

  const handleClickProceed = () => {
    navigate("/voting");
  };

  return (
    <div className="instructions-container">
      <div className="instructions-box">
        <h3>
          This election is being conducted by the election commission of India.
        </h3>
        <p>
          You, as being a member of the constituency under the constituencies of
          Uttar Pradesh State Election, are allowed to vote. Please take the
          following steps in order to cast a valid vote. You are requested to
          cast vote on your own decision and not by being pressurized or
          terrorized by someone. If someone threatens you for making a voting
          decision please contact the given helpline numbers.
        </p>
        <h4>Steps -</h4>
        <ul>
          <li>
            Stay in the frame of your camera alone and with sufficient lighting
            for the entire duration.
          </li>
          <li>
            Have Security Keys with you as you would require it to proceed.
          </li>
          <li>You are allowed to make only one vote per election.</li>
          <li>You are allowed to choose only one candidate per election.</li>
          <li>Candidates information are available on the page.</li>
          <li>
            Make sure that you are selecting your wanted candidate by confirming
            the name and symbol on the screen.
          </li>
          <li>After selecting the candidates make sure to submit the vote.</li>
          <li>
            Result will be announced after 5 days of election being completed.
          </li>
          <li>
            You can verify your vote after the election results are announced.
          </li>
        </ul>

        <div className="checkbox-section">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            I understand and will follow above steps.
          </label>
        </div>

        <div className="button-group">
          <button className="cancel-btn" onClick={handleClickCancel}>
            Cancel
          </button>
          <button className="proceed-btn" onClick={handleClickProceed}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectionInstructions;
