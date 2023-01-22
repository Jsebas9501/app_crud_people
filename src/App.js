import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import ModalPost from "./components/ModalPost";
import ModalPut from "./components/ModalPut";
import ModalDelete from "./components/ModalDelete";

function App() {
  const baseUrl = "http://127.0.0.1:8000/api/people/";
  const [data, setData] = useState([]);
  const [modalPost, setModalPost] = useState(false);
  const [modalPut, setModalPut] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({
    id: "",
    document_type: "",
    document: "",
    first_name: "",
    last_name: "",
    email: "",
    hobbie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPerson((prevent) => ({ ...prevent, [name]: value }));
  };

  const openCloseModalPost = () => {
    setModalPost(!modalPost);
  };

  const openCloseModalPut = () => {
    setModalPut(!modalPut);
  };

  const openCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const requestGet = async () => {
    try {
      const response = await axios.get(baseUrl);
      setData(response.data.people);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestGet();
  }, []);

  const requestPost = async () => {
    try {
      const response = await axios.post(baseUrl, {
        document_type: selectedPerson.document_type,
        document: selectedPerson.document,
        first_name: selectedPerson.first_name,
        last_name: selectedPerson.last_name,
        email: selectedPerson.email,
        hobbie: selectedPerson.hobbie,
      });
      setData([...data, response.data]);
      openCloseModalPost();
      requestGet();
    } catch (error) {
      console.log(error);
    }
  };

  const requestPut = async () => {
    try {
      const response = await axios.put(`${baseUrl}${selectedPerson.id}`, {
        document_type: selectedPerson.document_type,
        document: selectedPerson.document,
        first_name: selectedPerson.first_name,
        last_name: selectedPerson.last_name,
        email: selectedPerson.email,
        hobbie: selectedPerson.hobbie,
      });
      console.log(response)
      
      let dataNueva = data;
      // eslint-disable-next-line array-callback-return
      dataNueva.map((person) => {
        if (person.id === selectedPerson.id) {
          person.document_type = selectedPerson.document_type;
          person.document = selectedPerson.document;
          person.first_name = selectedPerson.first_name;
          person.last_name = selectedPerson.last_name;
          person.email = selectedPerson.email;
          person.hobbie = selectedPerson.hobbie;
        }
      });
      setData(dataNueva);
      openCloseModalPut();
    } catch (error) {
      console.log(error);
    }
  };

  const requestDelete = async () => {
    try {
      await axios.delete(`${baseUrl}${selectedPerson.id}`);
      
      let dataNueva = data.filter(person => person.id !== selectedPerson.id);
      setData(dataNueva);
      openCloseModalDelete();
    } catch (error) {
      console.log(error);
    }
  };

  const selectPerson = (person, caso) => {
    setSelectedPerson(person);

    caso === "Put" ? openCloseModalPut() : openCloseModalDelete();
  };

  return (
    <div className="col-auto p-5 text-center">
      <br />
      <button className="btn btn-success" onClick={() => openCloseModalPost()}>
        Post
      </button>
      <br />
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo Documento</th>
            <th>Documento</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Email</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.document_type}</td>
              <td>{person.document}</td>
              <td>{person.first_name}</td>
              <td>{person.last_name}</td>
              <td>{person.email}</td>
              <td>{person.hobbie}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => selectPerson(person, "Put")}
                >
                  Put
                </button>
                {"  "}
                <button
                  className="btn btn-danger"
                  onClick={() => selectPerson(person, "Delete")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalPost
        modalPost={modalPost}
        openCloseModalPost={openCloseModalPost}
        handleChange={handleChange}
        requestPost={requestPost}
      />
      <ModalPut
        modalPut={modalPut}
        openCloseModalPut={openCloseModalPut}
        handleChange={handleChange}
        requestPut={requestPut}
        selectedPerson={selectedPerson}
      />
      <ModalDelete
        modalDelete={modalDelete}
        requestDelete={requestDelete}
        openCloseModalDelete={openCloseModalDelete}
        selectedPerson={selectedPerson}
      />
    </div>
  );
}

export default App;
