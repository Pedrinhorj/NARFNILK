import { useState } from "react";
import "../styles/accordion.css";

export default function Accordion() {
  const AccordionItem = ({ title, children, isOpen, isClose, onToggle }) => (
    <div>
      <div className="accordion-title" onClick={onToggle}>
        {title}
      </div>
      <div
        className={`accordion-content ${isOpen ? "open" : ""} ${
          isClose ? "close" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <AccordionItem
        title="Nossa História"
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          voluptatum totam consequuntur harum non? Molestiae maiores sed dolorum
          delectus. Qui illum iste numquam fuga eius. Eveniet omnis ex est
          itaque.
        </p>
      </AccordionItem>
      <AccordionItem
        title="Nosso Compromisso"
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et
          dignissimos nobis vel cupiditate quis vero animi facere. Minima fuga
          modi in atque? Aliquid corrupti nihil minus vel vitae delectus dolore,
          quas iusto. Molestiae voluptatibus et ipsam sit deserunt? Nemo
          assumenda voluptatem vel possimus saepe quidem tenetur illum quas
          laboriosam!
        </p>
      </AccordionItem>
    </div>
  );
}
