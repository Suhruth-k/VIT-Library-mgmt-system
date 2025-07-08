import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBook, FaLock, FaUserAlt, FaUsers } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { AppBar, SideBar } from "../../../components";
import { Outlet } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";

const menu = [
  {
    id: 1,
    title: "Core",
    listItems: [
      {
        id: 1,
        text: "Dashbaord",
        link: "/admin/dashboard",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    id: 5,
    title: "Transaction",
    listItems: [
      {
        id: 1,
        text: "Issued Books",
        link: "manage-issued-books",
        icon: <SiBookstack />,
      },
      {
        id: 2,
        text: "Reserved Books",
        link: "reserved-books-list",
        icon: <SiBookstack />,
      },
      {
        id: 3,
        text: "Returned Books",
        link: "returned-books-list",
        icon: <SiBookstack />,
      },
      {
        id: 4,
        text: "Renew Books",
        link: "manage-renew-requests",
        icon: <FaBook />,
      },
    ],
  },
  {
    id: 2,
    title: "Users",
    listItems: [
      {
        id: 1,
        text: "Students",
        link: "manage-students",
        icon: <FaUsers />,
      },
      {
        id: 2,
        text: "Teachers",
        link: "manage-teachers",
        icon: <FaUsers />,
      },
      {
        id: 3,
        text: "Batches",
        link: "manage-batches",
        icon: <FaBook />,
      },
      {
        id: 4,
        text: "Departements",
        link: "manage-departements",
        icon: <BiCategoryAlt />,
      },
    ],
  },
  {
    id: 3,
    title: "Books",
    listItems: [
      {
        id: 1,
        text: "Books",
        link: "manage-books",
        icon: <FaBook />,
      },
    ],
  },
  {
    id: 7,
    title: "Account",
    listItems: [
      {
        id: 1,
        text: "Profile",
        link: "profile",
        icon: <FaUserAlt />,
      },
      {
        id: 2,
        text: "Messages",
        link: "manage-messages",
        icon: <AiFillMessage />,
      },
      {
        id: 3,
        text: "Change Password",
        link: "change-password",
        icon: <FaLock />,
      },
    ],
  },
];

const AdminDashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="dashboard__layout">
      <SideBar menu={menu} open={open} setOpen={setOpen} />
      <div className="container bg">
        <AppBar open={open} setOpen={setOpen} />
        <main className="bg text__color">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
