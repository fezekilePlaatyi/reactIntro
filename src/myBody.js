import React, { useEffect, useState } from "react";

const MyBody = ({ greeting }) => {
  const [email, setEmail] = useState("");
  const [haveErrors, setHaveErrors] = useState(true);

  const listOfUser = [
    { username: "Ramaposa", id: 2 },
    { username: "Some name", id: 4 },
  ];

  const handleUpdateEmail = (e) => {
    var target = e.target;
    var emailValueFromInput = target.value;

    setEmail(emailValueFromInput); //updating state of email
  };

  const handleSubmit = () => {
    if (!haveErrors) alert("We can submit");
    else alert("Noooo");
  };

  useEffect(() => {
    if (email) {
      setHaveErrors(false);
    } else {
      setHaveErrors(true);
    }
  }, [email]);

  return (
    <div>
      {haveErrors ? "Make sure all field are entered" : "We gooood"}
      <h4>Here will display passed data which is: {greeting}</h4>{" "}
      {/* We were passing state to this component */}
      <input type="text" className="email" onChange={handleUpdateEmail} />
      <h2>Your email is: {email}</h2>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        {listOfUser.map((user, index) => (
          <p>
            Hello, {user.username} from {index}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MyBody;
