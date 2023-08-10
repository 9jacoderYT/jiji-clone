import React, { useState, useEffect } from "react";

const useUnsavedChangesWarning = (
  message = "Are you sure want to discard changes?"
) => {
  const [isDirty, setDirty] = useState(false);

useEffect(() => {
    // Detecting browser closing

    window.onbeforeunload = 
    
}. [isDirty])

  return [];
};

export default useUnsavedChangesWarning;
