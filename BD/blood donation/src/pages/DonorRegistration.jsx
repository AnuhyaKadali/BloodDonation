const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post(`${API_URL}/api/donorRegistration/register`, formData);



    setSuccessMessage("✅ Donor registered successfully!");

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      bloodGroup: "",
      age: "",
      city: "",
    });

    setTimeout(() => setSuccessMessage(""), 3000);
  } catch (error) {
    alert("❌ Failed to register donor. Check backend.");
    console.error(error);
  }
};