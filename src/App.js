import "./App.css";
import Header from "./components/header/Header";
import UserCard from "./components/user-card/UserCard";
import UserDetailsTabs from "./components/user-card/user-details-tab/UserDetailsTab";

function App() {
  return (
    <div className="App-container">
      <Header></Header>
      <div className="User-data">
        <UserCard></UserCard>
        <UserDetailsTabs></UserDetailsTabs>
      </div>
    </div>
  );
}

export default App;
