import { useState, useRef } from "react";

function AddResource({ subject, subjects, setSubjects, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Link");
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  function handleTypeChange(value) {
    setType(value);

    if (value !== "PDF") {
      setFile(null);
      setContent("");
    }
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setContent(selectedFile.name);
    }
  }

  function handleSave() {
    if (!title.trim() || (type !== "PDF" && !content.trim())) {
      alert("Please fill in Title and Content.");
      return;
    }

    const newResource = {
      id: Date.now(),
      title: title.trim(),
      type,
      favorite: false,
      createdAt: Date.now(),

      content: type === "PDF" ? file.name : content.trim(),
      fileUrl: type === "PDF" ? URL.createObjectURL(file) : null,
    };

    const updatedSubjects = subjects.map((s) => {
      if (s.id === subject.id) {
        return {
          ...s,
          resources: [...(s.resources || []), newResource],
        };
      }
      return s;
    });

    setSubjects(updatedSubjects);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Add Resource</h2>

        <label>Resource Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Java Notes"
        />

        <label>Resource Type</label>

        <div className="resource-types">
          {["PDF", "Link", "DOC", "Notes", "Video"].map((item) => (
            <label
              key={item}
              className={`type-pill ${type === item ? "active" : ""}`}
            >
              <input
                type="radio"
                value={item}
                checked={type === item}
                onChange={(e) => handleTypeChange(e.target.value)}
              />
              {item}
            </label>
          ))}
        </div>

        {/* PDF Upload */}
        {type === "PDF" && (
          <div className="pdf-upload">
            <button
              type="button"
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
            >
              Upload PDF
            </button>

            {file && <p className="file-name">📄 {file.name}</p>}

            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        )}

        {/* Other content */}
        {type !== "PDF" && (
          <>
            <label>Content / URL</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste link or notes..."
            />
          </>
        )}

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="save-btn" onClick={handleSave}>
            Save Resource
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddResource;
