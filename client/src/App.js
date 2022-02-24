//Components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <UserProvider>
      <TemplateProvider>
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </TemplateProvider>
    </UserProvider>
  );
}

export default App;
