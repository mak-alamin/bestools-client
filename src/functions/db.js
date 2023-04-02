const createUserToDB = (user) => {
  const email = user?.email;
  const displayName = user?.name;

  const currentUser = { name: displayName, email: email };

  if (email) {
    fetch(`http://localhost:8000/user/${email}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
};

export { createUserToDB };
