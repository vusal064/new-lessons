import { students } from "./data/students";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Telebeler</h1>

      {students.map((student) => (
        <Profile
          key={student.id}
          name={student.name}
          age={student.age}
          onClick={() => alert(student.name)}
        />
      ))}
    </div>
  );
}

export default App;
