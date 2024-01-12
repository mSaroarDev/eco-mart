const removeImageFunction = async (publicId) => {
  try {
    await fetch("/api/remove-image?p_id=" + publicId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

export default removeImageFunction;
