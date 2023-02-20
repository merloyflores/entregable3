import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import Pagination from "./components/Pagination";
import ResidentForm from "./components/ResidentForm";
import ResidentList from "./components/ResidentList";
import { getRandomNumber } from "./utils/handleRandom";

const RESIDENT_PERPAGE = 12;

function App() {
  //Estado que almacena la información de la location
  const [location, setLocation] = useState();
  //Estado que almacena el valor del input no controlado
  const [nameLocation, setNameLocation] = useState("");
  const [page, setPage] = useState(1);

  //funciion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameLocation(e.target.idLocation.value);
  };

  //Funcion que se encargar de obtener los residentes dependiendo de la paginacion actual
  const pagination = () => {
    if (!location) return [];
    const maxLimit = page * RESIDENT_PERPAGE;
    const minLimit = maxLimit - RESIDENT_PERPAGE;
    const newResidents = location?.residents.slice(minLimit, maxLimit);
    return newResidents;
  };

  //Efecto que se ejecuta en el primer render y cuando cambia name location
  useEffect(() => {
    setPage(1);
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation;
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [nameLocation]);
  return (
    <div className="App">
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination
        location={location}
        RESIDENT_PERPAGE={RESIDENT_PERPAGE}
        setPage={setPage}
      />
      <ResidentList pagination={pagination} />
      <Pagination
        location={location}
        RESIDENT_PERPAGE={RESIDENT_PERPAGE}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
