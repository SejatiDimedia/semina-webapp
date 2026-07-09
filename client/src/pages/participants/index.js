import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../components/Breadcrumb";
import Button from "../../components/Button";
import Table from "../../components/TableWithAction";
import SearchInput from "../../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchParticipants,
  setKeyword,
} from "../../redux/participants/actions";
import AlertMessage from "../../components/Alert";
import Swal from "sweetalert2";
import { deleteData } from "../../utils/fetchData";
import { setNotif } from "../../redux/notif/actions";
import { accessParticipants } from "../../const/access";

function ParticipantsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notif = useSelector((state) => state.notif);
  const participants = useSelector((state) => state.participants);

  const [access, setAccess] = useState({
    tambah: false,
    hapus: false,
    edit: false,
  });

  const checkAccess = () => {
    let { role } = localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : {};
    const access = { tambah: false, hapus: false, edit: false };
    Object.keys(accessParticipants).forEach(function (key, index) {
      if (accessParticipants[key].indexOf(role) >= 0) {
        access[key] = true;
      }
    });
    setAccess(access);
  };

  useEffect(() => {
    checkAccess();
  }, []);

  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch, participants.keyword]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`/cms/participants/${id}`);

        dispatch(
          setNotif(
            true,
            "success",
            `berhasil hapus participant ${res.data.data.email}`
          )
        );

        dispatch(fetchParticipants());
      }
    });
  };

  return (
    <Container className="mt-3">
      <BreadCrumb textSecound={"Participants"} />
      {access.tambah && (
        <div className="mb-3">
          <Button action={() => navigate("/participants/create")}>
            Tambah
          </Button>
        </div>
      )}
      <SearchInput
        query={participants.keyword}
        handleChange={(e) => dispatch(setKeyword(e.target.value))}
      />
      {notif.status && (
        <AlertMessage type={notif.typeNotif} message={notif.message} />
      )}
      <Table
        status={participants.status}
        thead={["First Nama", "Last Name", "Email", "Role", "Avatar", "Aksi"]}
        data={participants.data}
        tbody={["firstName", "lastName", "email", "role", "avatar"]}
        editUrl={access.edit ? `/participants/edit` : null}
        deleteAction={access.hapus ? (id) => handleDelete(id) : null}
        withoutPagination
      />
    </Container>
  );
}

export default ParticipantsPage;
