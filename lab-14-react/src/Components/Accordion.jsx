import { useState, useEffect } from "react";
import "./accordion.css";

const topics = [
  { id: 1, title: "Mövzu 1", content: "Bu Mövzu 1-in açıqlamasıdır." },
  { id: 2, title: "Mövzu 2", content: "Bu Mövzu 2-in açıqlamasıdır." },
  { id: 3, title: "Mövzu 3", content: "Bu Mövzu 3-in açıqlamasıdır." },
];

function Accordion() {
  const [activeId, setActiveId] = useState(null);
  const [headerTitle, setHeaderTitle] = useState("Zəhmət olmasa birini seçin");

  // Mövzu açıldıqda başlığı dəyiş
  useEffect(() => {
    if (activeId === null) {
      setHeaderTitle("Zəhmət olmasa birini seçin");
    } else {
      const selectedTopic = topics.find((t) => t.id === activeId);
      setHeaderTitle(selectedTopic.title);
    }
  }, [activeId]);

  const toggle = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="accordion-wrapper">
      {/* Yuxarıdakı başlıq */}
      <h2 className="main-title">{headerTitle}</h2>

      {/* Mövzular */}
      {topics.map((item) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-header" onClick={() => toggle(item.id)}>
            <h3>{item.title}</h3>
            <span>{activeId === item.id ? "-" : "+"}</span>
          </div>

          {activeId === item.id && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
