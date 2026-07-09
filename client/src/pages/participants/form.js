import React from "react";
import { Figure, Form } from "react-bootstrap";
import Button from "../../components/Button";
import TextInputWithLabel from "../../components/TextInputWithLabel";

export default function ParticipantsForm({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan nama depan"}
        label={"Nama Depan"}
        name="firstName"
        value={form.firstName}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan nama belakang"}
        label={"Nama Belakang"}
        name="lastName"
        value={form.lastName}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan email"}
        label={"Email"}
        name="email"
        value={form.email}
        type="email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan password"}
        label={"Password"}
        name="password"
        value={form.password}
        type="password"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan role"}
        label={"Role"}
        name="role"
        value={form.role}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Avatar"}
        label={"Avatar"}
        name="avatar"
        // value={form.avatar}
        type="file"
        onChange={handleChange}
      />
      {form.avatar !== "" && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={form.avatar}
              // src={`${config.api_image}/${form.avatar}`}
            />

            <Figure.Caption>Perview image avatar</Figure.Caption>
          </Figure>
        </div>
      )}
      <Button variant="primary" action={handleSubmit} loading={isLoading}>
        {edit ? "Ubah" : "Simpan"}
      </Button>
    </Form>
  );
}
