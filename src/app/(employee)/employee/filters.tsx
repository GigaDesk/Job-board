"use client";

import { useEffect, useState } from "react";
import { ActiveRoute } from "../state/store";
import FilterEducationLevel from "../../filtereducationlevel";
import FilterExperience from "../../filteryearsofexperience";
import FilterIndustry from "../../filterindustry";
import FilterListIcon from "@mui/icons-material/FilterList";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";

export default function Filters() {
  useEffect(() => {
    ActiveRoute.instance = "Home";
  }, []);

  const [modalopen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full max-md:p-2">
      <div className="w-full text-black">
        <div className="px-2 md:px-20 py-2 md:py-2 grid gap-4">
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
      </div>
    </div>
  );
}
