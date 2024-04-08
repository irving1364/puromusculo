"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

interface ModalFilterProps {
  isVisible: boolean;
  onClose: () => void;
}

const ModalCart: React.FC<ModalFilterProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target &&
      e.target instanceof HTMLDivElement &&
      e.target.id === "wrapper"
    ) {
      onClose();
    }
  };

  return (
    <>
      <div className="modalCart" id="wrapper" onClick={handleClose}>
        <div className="modalCart-header">
          <p className="text-dark dark:text-darkmode-dark text-2xl font-medium">
            Tu Carrito
          </p>
          <button className="modalCart-close" onClick={() => onClose()}>
            X
          </button>
        </div>

        <div className="modalCart-content">
          <div className="flex flex-col justify-center items-center space-y-6">
            <div>
              <FaShoppingCart size={76} />
            </div>
            <p>Ups. Tu Carrito está vacío.</p>
            <Link href={"/product"} className="btn btn-primary w-full">
              No te lo pierdas, agrega producto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCart;
