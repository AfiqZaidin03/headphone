import { UpdateFollower } from "react-mouse-follower";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
      </UpdateFollower>
    </main>
  );
};

export default App;
