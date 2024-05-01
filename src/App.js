import { Outlet, useOutlet } from "react-router-dom";

function App() {
  const hasChild = useOutlet();

  const RootContent = () => <div>App /</div>;

  return <div>{hasChild || <RootContent />}</div>;
}

export default App;
