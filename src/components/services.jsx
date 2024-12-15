import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import Modal from "./modal";

export default function Services() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="services">
      <button onClick={() => setOpenModal(true)}>
        <LuShoppingCart size={50} />
      </button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      <button>
        <CgProfile size={50} />
      </button>
    </div>
  );
}
