import SEO from "../components/SEO";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

import { Container } from "../styles/Layout";

const Home: React.FC = () => {
  return (
    <Container>
      <SEO title="Inscrições" />
      <Header />
      <Sidebar />
      <Main />
    </Container>
  )
}

export default Home;