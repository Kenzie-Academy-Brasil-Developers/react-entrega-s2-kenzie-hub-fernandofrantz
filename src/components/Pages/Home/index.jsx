import axios from "axios";
import { useEffect, useState } from "react";
import CreateTechs from "../../CreateTechs";

const Home = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    return JSON.parse(localToken);
  });

  useEffect(() => {
    axios
      .get("https://kenziehub.herokuapp.com/profile", {
        headers: { Authorization: `barear ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h2> - Bem vindo(a), {user.name}!</h2>
      <CreateTechs token={token} user={user} />
    </>
  );
};
export default Home;
