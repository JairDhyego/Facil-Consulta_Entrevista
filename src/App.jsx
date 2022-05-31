import "./index.css";
import "./mobile.css";
import { AppRoutes } from "./routes/";

import UserProvider from "./shared/contexts/index";

function App() {
  return (
    <div>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
