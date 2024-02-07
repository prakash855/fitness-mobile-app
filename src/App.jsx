import { Advertisement } from "./components/Body/Advertisement";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout";
import { Record } from "./components/Records/Record";

function App() {
  return (
    <Layout>
      <Header />
      <Advertisement />
      <Record />
    </Layout>
  );
}

export default App;
