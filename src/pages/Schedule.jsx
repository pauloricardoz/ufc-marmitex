import React, { useState } from 'react';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import { useHistory } from 'react-router';

const { REACT_APP_BASE_URL } = process.env;

function Schedule() {
  const [disableNext, setDisableNext] = useState(true);
  const history = useHistory();

  return (
    <div className="register-page">
      <div>
        <ReactEmbeddedGoogleCalendar publicUrl={ REACT_APP_BASE_URL } />
      </div>
      <div className="back-next-buttons">
        <button type="button" onClick={ () => history.push('/home') }>Back</button>
        <button
          type="button"
          onClick={ () => history.push('/register-finish') }
          disabled={ disableNext }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Schedule;
