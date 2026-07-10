import React from "react";
import { Form } from "react-bootstrap";
import SBUtton from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email Address"
        name="email"
        type="email"
        placeholder="Enter email"
        value={form?.email}
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={form?.password}
        onChange={handleChange}
      />

      <div className="d-grid mt-4">
        <SBUtton
          loading={isLoading}
          disabled={isLoading}
          variant="info"
          type="submit"
          action={handleSubmit}
          className="py-2.5 rounded-pill fw-bold text-white"
          style={{ background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)", border: "none" }}
        >
          Sign In
        </SBUtton>
      </div>
    </Form>
  );
}
