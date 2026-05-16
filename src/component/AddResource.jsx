import { useState, useRef } from "react";

function AddResource({ subject, subjects, setSubjects, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [type, setType] = useState("Link");
  const [file, setFile] = useState(null);
  const [videoSource, setVideoSource] = useState("url"); // "url" or "file"

  const fileInputRef = useRef(null);

  function handleTypeChange(value) {
    setType(value);
    setFile(null);
    setContent("");
    setVideoSource("url");
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setContent(selectedFile.name);
    }
  }

  function handleSave() {
    const needsFile = type === "PDF" || type === "DOC" || (type === "Video" && videoSource === "file");
    const needsContent = !needsFile;

    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }
    if (needsFile && !file) {
      alert(`Please upload a ${type} file.`);
      return;
    }
    if (needsContent && !content.trim()) {
      alert("Please fill in the content field.");
      return;
    }

    const newResource = {
      id: Date.now(),
      title: title.trim(),
      type,
      favorite: false,
      createdAt: Date.now(),
      content: needsFile ? file.name : content.trim(),
      fileUrl: needsFile ? URL.createObjectURL(file) : null,
    };

    const updatedSubjects = subjects.map((s) => {
      if (s.id === subject.id) {
        return { ...s, resources: [...(s.resources || []), newResource] };
      }
      return s;
    });

    setSubjects(updatedSubjects);
    onClose();
  }

  function renderInput() {
    switch (type) {
      case "PDF":
        return (
          <div className="pdf-upload">
            <button
              type="button"
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
            >
              📄 Upload PDF
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
        );

      case "DOC":
        return (
          <div className="pdf-upload">
            <button
              type="button"
              className="upload-btn"
              onClick={() => fileInputRef.current.click()}
            >
              📝 Upload Document
            </button>
            {file && <p className="file-name">📝 {file.name}</p>}
            <input
              ref={fileInputRef}
              type="file"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        );

      case "Link":
        return (
          <>
            <label>URL</label>
            <input
              type="url"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="https://example.com"
            />
          </>
        );

      case "Video":
        return (
          <>
            <label>Video Source</label>
            <div className="resource-types" style={{ marginBottom: "12px" }}>
              <label className={`type-pill ${videoSource === "url" ? "active" : ""}`}>
                <input
                  type="radio"
                  value="url"
                  checked={videoSource === "url"}
                  onChange={() => { setVideoSource("url"); setFile(null); setContent(""); }}
                />
                Paste URL
              </label>
              <label className={`type-pill ${videoSource === "file" ? "active" : ""}`}>
                <input
                  type="radio"
                  value="file"
                  checked={videoSource === "file"}
                  onChange={() => { setVideoSource("file"); setContent(""); }}
                />
                Upload from Computer
              </label>
            </div>

            {videoSource === "url" ? (
              <>
                <label>Video URL</label>
                <input
                  type="url"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                />
              </>
            ) : (
              <div className="pdf-upload">
                <button
                  type="button"
                  className="upload-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  🎬 Upload Video
                </button>
                {file && <p className="file-name">🎬 {file.name}</p>}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>
            )}
          </>
        );

      case "Notes":
        return (
          <>
            <label>Notes</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your notes here..."
              rows={5}
            />
          </>
        );

      default:
        return null;
    }
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
          placeholder="e.g. Java Notes"
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

        {renderInput()}

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
