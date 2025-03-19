"use client";

import CompanyStatement from "@/components/splash/companystatement";
import JobListings from "./job-listings";
import { useRouter } from "next/navigation";
import Button from "@mui/joy/Button";
import FilterEducationLevel from "./filtereducationlevel";
import FilterExperience from "./filteryearsofexperience";
import FilterIndustry from "./filterindustry";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import { useState } from "react";

export default function Home() {
  const [modalopen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const router = useRouter();

  return (
    <div
      className="h-screen grid bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <div className="h-28 px-2 md:px-20 py-8 md:py-2 grid md:grid-rows-2 gap-4">
        <div className="flex justify-between">
          <div
            className="grid content-center p-2 rounded-lg text-black text-xl"
            style={{ fontFamily: "McLaren" }}
          >
            <div>Jobs Park</div>
          </div>
          <div className="grid grid-cols-2">
            <button className="text-sky-600 text-center">Login</button>
            <Button
              onClick={() => {
                router.push(`/employer-sign-in`);
              }}
            >
              Post a job
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-[100px_1fr] content-center gap-4 text-text-table-gray max-md:hidden">
          <div className="grid grid-cols-2 content-center">
            <div>Filter</div>
            <FilterListIcon />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FilterEducationLevel />
            <FilterIndustry />
            <FilterExperience />
          </div>
        </div>
        <div className="grid grid-cols-[100px_1fr] content-center gap-4 text-text-table-gray md:hidden">
          <button
            className="grid grid-cols-2 content-center"
            onClick={handleOpenModal}
          >
            <div>Filter</div>
            <FilterListIcon />
          </button>
        </div>
      </div>

      <Modal
        open={modalopen}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="z-1 shadow-xl my-60 mx-4">
          <Card sx={{ backgroundColor: "#F0F4F9" }}>
            <div className="grid grid-rows-3 gap-4 rounded-xl p-8">
              <FilterEducationLevel />
              <FilterIndustry />
              <FilterExperience />
            </div>
          </Card>
        </div>
      </Modal>

      <JobListings />
      <footer className="w-full pb-4 h-20">
        <CompanyStatement />
      </footer>
    </div>
  );
}
