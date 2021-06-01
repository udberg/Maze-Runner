const getScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IRN2MH4ruvnSCicBEebI/scores',
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const result = await response.json();
  const elements = await result;
  elements.result.sort((a, b) => (b.score - a.score));
  return elements;
};

const setScore = async (user, score) => {
  const data = {
    user,
    score,
  };
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IRN2MH4ruvnSCicBEebI/scores',
    {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    },
  );
};

export { getScore, setScore };