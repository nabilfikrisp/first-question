  import passengerList from "../data/passengerList";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 text-slate-800">
      <div className=" mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-5">
        <h1 className="text-center text-2xl font-bold">First Question</h1>
        <section id="passenger-list" className="w-full">
          <table className="mx-auto">
            <thead className="bg-slate-400">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {passengerList.map((passenger) => (
                <tr key={passenger.id}>
                  <td>{passenger.id}</td>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default App;
