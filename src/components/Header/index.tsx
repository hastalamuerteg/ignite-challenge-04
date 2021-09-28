import { FiPlusSquare } from "react-icons/fi";

import { Container } from "./styles";
import Logo from "../../assets/logo.svg";

interface IHeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: IHeaderProps) {
  function handleModalOpen() {
    openModal();
  }

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={handleModalOpen}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}
