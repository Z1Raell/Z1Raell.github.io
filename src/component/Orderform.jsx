import React from "react";

export const OrderForm = ({
  formData,
  formErrors,
  isSubmitting,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Order Form</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {formErrors.phoneNumber && (
          <p className="error-message">{formErrors.phoneNumber}</p>
        )}
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        {formErrors.address && (
          <p className="error-message">{formErrors.address}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
