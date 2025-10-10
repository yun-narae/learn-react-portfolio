import Header from '../components/Header';
import Main from '../components/Main';
import Intro from '../components/Intro';
import Skill from '../components/Skill';
import Site from '../components/Site';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomeView = () => {
    return (
        <>
            <Header />
            <Main>
                <Intro />
                <Skill />
                <Site />
                <Contact /> 
            </Main>
            <Footer />
        </>
  )
}

export default HomeView;