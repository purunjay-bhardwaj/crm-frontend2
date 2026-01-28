import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Clients() {
  document.title = "Clients | Property CRM";

  const [clients, setClients] = useState([]);
  const [name, setName] = useState("");
  const [broker, setBroker] = useState("");

  // TEMP broker list (later comes from backend)
  const brokers = ["Amit Broker", "Neha Broker", "Rohit Broker"];

  const addClient = () => {
    if (!name || !broker) return;

    setClients([
      ...clients,
      {
        id: clients.length + 1,
        name,
        broker,
      },
    ]);

    setName("");
    setBroker("");
  };

  return (
    <>
      <Navbar />

      <PageHero title="Clients" image="/images/hero_bg_2.jpg" />

      <div className="container mt-5">
        <h2 className="mb-4">Clients</h2>

        {/* ADD CLIENT FORM */}
        <input
          className="form-control mb-2"
          placeholder="Client Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={broker}
          onChange={(e) => setBroker(e.target.value)}
        >
          <option value="">Select Broker</option>
          {brokers.map((b, index) => (
            <option key={index} value={b}>
              {b}
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary mb-4"
          onClick={addClient}
          disabled={!name || !broker}
        >
          Add Client
        </button>

        {/* CLIENT TABLE */}
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Client Name</th>
              <th>Assigned Broker</th>
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center text-muted">
                  No clients added yet
                </td>
              </tr>
            ) : (
              clients.map((c) => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td>{c.name}</td>
                  <td>{c.broker}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}
