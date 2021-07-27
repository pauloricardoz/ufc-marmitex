import { faPenAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const fakeData = { '2021-07-24': [{ name: 'Paulo' }, { name: 'Carla' }] };
const fakeApiGetSchedule = (dateToStart) => {
  console.log(dateToStart);
  return Promise.resolve(
    { json: () => fakeData,
    },
  );
};
const fakeApiExcludeSchedule = (dateToExclude) => {
  delete fakeData[dateToExclude];
  return Promise.resolve(
    { json: () => null,
    },
  );
};
const fakeApiEditSchedule = (dateToEdit, newInfo) => Promise.resolve(
  { json: () => {
    fakeData[dateToEdit] = newInfo;
    return fakeData;
  },
  },
);
const fakeApiAddSchedule = (dateToAdd, newInfo) => Promise.resolve(
  { json: () => {
    fakeData[dateToAdd] = newInfo;
    return fakeData;
  },
  },
);
function Schedule() {
  const [disableNext, setDisableNext] = useState(true);
  const [loading, setLoading] = useState(true);
  const [toEdit, setToEdit] = useState(null);
  const [schedule, setSchedule] = useState({});
  const history = useHistory();
  const getDataFromApi = async () => fakeApiGetSchedule(new Date().toISOString())
    .then((e) => e.json())
    .then(setSchedule)
    .then(() => setLoading(false));

  useEffect(() => {
    getDataFromApi();
  }, []);
  if (loading) return <h1>Carregando...</h1>;
  console.log(schedule);
  return (
    <div className="register-page">
      <div>
        <section>
          <h3>Agenda</h3>
          {Object.entries(schedule).map(([dateUfc, personel]) => (
            <div key={ dateUfc }>
              {dateUfc}
              {'  '}
              {personel.map((e) => e.name).join('/ ')}
              <FontAwesomeIcon
                icon={ faPenAlt }
                onClick={ () => {
                  setToEdit(dateUfc);
                } }
              />
              {' '}
              <FontAwesomeIcon
                icon={ faTrash }
                onClick={ async () => {
                  await fakeApiExcludeSchedule(dateUfc);
                  setLoading(true);
                  await getDataFromApi();
                } }
              />
            </div>
          ))}
        </section>
        {toEdit !== null
        && (
          <section>
            <h3>Edição</h3>
          </section>
        )}
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
