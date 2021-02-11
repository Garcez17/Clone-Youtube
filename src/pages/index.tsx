import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

import { Container } from "../styles/Layout";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Main />
    </Container>
  )
}

export default Home;