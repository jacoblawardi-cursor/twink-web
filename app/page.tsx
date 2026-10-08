type Karyawan = {
  id: number;
  name: string;
  address: string;
};

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/karyawan");

  const karyawan: Karyawan[] = await response.json();

  return (
    <main className="container">
      <h1>Daftar Karyawan</h1>

      <div className="table-wrapper">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {karyawan.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}