import Header from "../props/Header";
import Content from "../props/Content";
import Foot from "../props/Foot";
function MainPage() {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <Content />
      </body>
      <footer>
        <Foot />
      </footer>
    </>
  );
}

export default MainPage;
