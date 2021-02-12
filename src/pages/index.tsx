import SEO from "../components/SEO";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

import { useToogleSidebarState } from "../hooks/Sidebar";

import { Container } from "../styles/Layout";

const Home: React.FC = () => {
  const { isOpened } = useToogleSidebarState();

  return (
    <Container isOpened={isOpened}>
      <SEO title="Inscrições" />
      <Header />
      <Sidebar />
      <Main />
    </Container>
  )
}

export default Home;