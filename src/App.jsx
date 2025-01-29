import { useState } from "react";
import ConfirmationModal from "./components/ConfirmationModal";
import Formulaire from "./components/Formulaire";
import PdfGenerator from "./components/PdfGenerator";

function App() {
  const [formData, setFormData] = useState(null);
  const [formDataLabel, setFormDataLabel] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirmData, setConfirmData] = useState(false);

  const handleFormSubmit = (data, dataLabel) => {
    setFormData(data);
    setFormDataLabel(dataLabel);
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setConfirmData(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    setConfirmData(false);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        {!confirmData && !showModal && (
          <Formulaire onSubmit={handleFormSubmit} />
        )}
        {showModal && (
          <ConfirmationModal
            formData={formData}
            formDataLabel={formDataLabel}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
        {confirmData && !showModal && <PdfGenerator formData={formData} />}
      </div>
    </>
  );
}

export default App;
