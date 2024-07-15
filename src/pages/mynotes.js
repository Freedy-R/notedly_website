import React, { useEffect } from "react";
const MyNotes = () => {
  useEffect(() => {
    // Uaktualnienie tytułu dokumentu.
    document.title = "Moje notatki — Notedly";
  });
  return (
    <div>
      <h1>Notedly</h1>
      <p>To są moje notatki.</p>
    </div>
  );
};
export default MyNotes;
