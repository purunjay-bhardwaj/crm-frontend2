import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";


export default function Brokers() {
  document.title = "Brokers | Property CRM";
  const [brokers, setBrokers] = useState([]);
  const [name, setName] = useState("");

  const addBroker = () => {
    if (!name) return;

    setBrokers([
      ...brokers,
      { id: brokers.length + 1, name }
    ]);

    setName("");
  };

  return (
    <>
      <Navbar />
      <PageHero
  title="Brokers"
  image="/images/hero_bg_1.jpg"
/>


      <div className="container mt-5">
        <h2 className="mb-4">Brokers</h2>

        {/* ADD BROKER */}
        <input
          className="form-control mb-3"
          placeholder="Broker Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button className="btn btn-primary mb-4" onClick={addBroker}>
          Add Broker
        </button>

        {/* BROKER LIST */}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Broker Name</th>
            </tr>
          </thead>
          <tbody>
            {brokers.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}
