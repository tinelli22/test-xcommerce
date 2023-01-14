import Container from "../container/container";
import Header from "../header/header";
import Modal from "../modal/modal";

type LayoutType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutType) {
 
  return (
    <>
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Modal />
    </>
  );
}
