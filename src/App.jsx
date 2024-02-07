import { Advertisement } from "./components/Body/Advertisement";
import { FormSection } from "./components/FormSection/FormSection";
import { Header } from "./components/Header/Header";
import { Layout } from "./components/Layout";
import { Record } from "./components/Records/Record";

function App() {
  return (
    <Layout>
      <Header />
      <Advertisement />
      <Record />
      <FormSection />
    </Layout>
  );
}

export default App;
