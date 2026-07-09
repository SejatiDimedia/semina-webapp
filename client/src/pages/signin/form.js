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

      <SBUtton
        loading={isLoading}
        disabled={isLoading}
        variant="primary"
        type="submit"
        action={handleSubmit}
      >
        Submit
      </SBUtton>
    </Form>
  );
}
