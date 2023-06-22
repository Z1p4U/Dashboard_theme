import { Autocomplete, Select } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const PAGE_SIZES = [10, 15, 20];

const Clients = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-3.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Angelica Ramos",
      company: "The Wiz",
      email: "angelica@ramos.com",
      status: "Active",
    },
    {
      id: 2,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "	Ashton Cox",
      company: "Levitz Furniture",
      email: "ashton@cox.com",
      status: "Active",
    },
    {
      id: 3,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-4.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Brenden Wagner",
      company: "The Wiz",
      email: "brenden@wagner.com",
      status: "Inactive",
    },
    {
      id: 4,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-2.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Charde Marshall",
      company: "Price Savers",
      email: "charde@marshall.com",
      status: "Active",
    },
    {
      id: 5,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-3.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Angelica Ramos",
      company: "The Wiz",
      email: "angelica@ramos.com",
      status: "Deleted",
    },
    {
      id: 6,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "	Ashton Cox",
      company: "Levitz Furniture",
      email: "ashton@cox.com",
      status: "Active",
    },
    {
      id: 7,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-4.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Brenden Wagner",
      company: "The Wiz",
      email: "brenden@wagner.com",
      status: "Inactive",
    },
    {
      id: 8,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-2.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Charde Marshall",
      company: "Price Savers",
      email: "charde@marshall.com",
      status: "Active",
    },
    {
      id: 9,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-3.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Angelica Ramos",
      company: "The Wiz",
      email: "angelica@ramos.com",
      status: "Deleted",
    },
    {
      id: 10,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "	Ashton Cox",
      company: "Levitz Furniture",
      email: "ashton@cox.com",
      status: "Active",
    },
    {
      id: 11,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-4.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Brenden Wagner",
      company: "The Wiz",
      email: "brenden@wagner.com",
      status: "Inactive",
    },
    {
      id: 12,
      picture: (
        <img
          src={"https://appstack.bootlab.io/img/avatars/avatar-2.jpg"}
          className=" w-10 h-10 rounded-full"
        />
      ),
      name: "Charde Marshall",
      company: "Price Savers",
      email: "charde@marshall.com",
      status: "Active",
    },

    // more records...
  ]);
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(employees.slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(employees.slice(from, to));
  }, [page, pageSize]);

  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className=" px-10 pt-5 pb-40 md:pb-32 bg-primaryLight w-full  overflow-x-hidden">
      <p className=" block text-slate-600 text-xs md:text-lg h4 font-bold ">
        Clients
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 my-5">
        <div className=" h-full shadow rounded bg-white p-5 mb-10 col-span-2">
          <div className=" pb-5 flex items-center justify-between">
            <p className=" text-slate-700 text-sm font-bold">Clients</p>
            <span>
              <BiDotsHorizontalRounded />
            </span>
          </div>
          <div className=" block md:flex justify-between  my-3">
            <div className=" flex items-center gap-3 mb-3 md:mb-0">
              <p className=" text-xs text-slate-400">Show</p>
              <Select
                height={20}
                className=" w-[100px]"
                placeholder="Pick one"
                data={[
                  { value: "react", label: 10 },
                  { value: "ng", label: 25 },
                  { value: "svelte", label: 50 },
                  { value: "vue", label: 100 },
                ]}
              />
              <p className=" text-xs text-slate-400">entries</p>
            </div>
            <div>
              <div className=" flex items-center gap-3">
                <Autocomplete
                  placeholder="Search"
                  data={["React", "Angular", "Svelte", "Vue"]}
                />
              </div>
            </div>
          </div>
          <DataTable
            borderRadius="sm"
            striped
            highlightOnHover
            // provide data
            records={records}
            // define columns
            columns={[
              { accessor: "picture", title: "picture" },
              { accessor: "name", title: "name" },
              {
                accessor: "company",
                title: "company",
                // this column has custom cell data rendering
              },
              { accessor: "email", title: "email" },
              {
                accessor: "status",
                title: "Status",
                render: ({ status }, i) => {
                  return (
                    <React.Fragment key={i}>
                      {status === "Active" && (
                        <span
                          className={`${
                            status === "Active" &&
                            " w-[40px] text-[10px] text-white text-center rounded bg-green-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                      {status === "Deleted" && (
                        <span
                          className={`${
                            status === "Deleted" &&
                            " w-[60px] text-[10px] text-white text-center rounded bg-red-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                      {status === "Inactive" && (
                        <span
                          className={`${
                            status === "Inactive" &&
                            " w-[60px] text-[10px] text-white text-center rounded bg-yellow-500 px-1  py-0"
                          }`}
                        >
                          {status}
                        </span>
                      )}
                    </React.Fragment>
                  );
                },
              },
            ]}
            totalRecords={employees.length}
            paginationColor="cyan"
            paginationSize="lg"
            paginationWrapBreakpoint={"lg"}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p) => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}

            // execute this callback when a row is clicked
            // onRowClick={({ name, party, bornIn }) =>
            //   alert(`You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}.`)
            // }
          />
        </div>

        <div className=" w-auto shadow rounded bg-white p-5 col-span-1 ">
          <div className=" pb-5 flex items-center justify-between">
            <p className=" text-slate-700 text-sm font-bold">Angelica Ramos</p>
            <span>
              <BiDotsHorizontalRounded />
            </span>
          </div>

          <div className=" flex items-center justify-center mb-3">
            <img
              src={"https://appstack.bootlab.io/img/avatars/avatar-3.jpg"}
              className=" w-16 h-16 rounded-full"
            />
          </div>

          <div className=" mb-3">
            <p className=" text-slate-600">About me</p>
            <p className=" text-slate-400 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              numquam repellat rerum perspiciatis reiciendis, voluptas non
              dolore cumque hic, nihil harum asperiores! Accusamus tenetur nam
              totam voluptas vero esse maiores!
            </p>
          </div>

          <div>
            <div className=" flex items-center justify-between text-sm border border-white border-b-slate-300 py-3">
              <p className=" text-slate-600 font-bold">Name</p>
              <p>Angelica Ramos</p>
            </div>
            <div className=" flex items-center justify-between text-sm border border-white border-b-slate-300 py-3">
              <p className=" text-slate-600 font-bold">Company</p>
              <p>The Wiz</p>
            </div>
            <div className=" flex items-center justify-between text-sm border border-white border-b-slate-300 py-3">
              <p className=" text-slate-600 font-bold">Email</p>
              <p>angelica@ramos.com</p>
            </div>
            <div className=" flex items-center justify-between text-sm border border-white border-b-slate-300 py-3">
              <p className=" text-slate-600 font-bold">Phone</p>
              <p> +1234123123123</p>
            </div>
            <div className=" flex items-center justify-between text-sm border border-white border-b-slate-300 py-3">
              <p className=" text-slate-600 font-bold">Status</p>
              <span
                className={`' w-[40px] text-[10px] text-white text-center rounded bg-green-500 px-1  py-0'}`}
              >
                Active
              </span>
            </div>
          </div>

          <p className=" text-xs text-slate-600 font-bold my-3">Activity</p>

          <ul className="timeline py-5 md:py-8 lg:py-3">
            <li className="timeline-item">
              <div className=" flex items-center justify-between">
                <strong className=" text-[10px] ps-8">Signed out</strong>
                <p className=" text-[10px] text-slate-400">30m ago</p>
              </div>
              <p className=" ps-8 text-[13px] text-slate-500">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>
          </ul>

          <ul className="timeline py-5 md:py-8 lg:py-3">
            <li className="timeline-item">
              <div className=" flex items-center justify-between">
                <strong className=" text-[10px] ps-8">
                  Created invoice #1204
                </strong>
                <p className=" text-[10px] text-slate-400">2h ago</p>
              </div>
              <p className=" ps-8 text-[13px] text-slate-500">
                Sed aliquam ultrices mauris. Integer ante arcu...
              </p>
            </li>
          </ul>

          <ul className="timeline py-5 md:py-8 lg:py-3">
            <li className="timeline-item">
              <div className=" flex items-center justify-between">
                <strong className=" text-[10px] ps-8">
                  Discarded invoice #1147
                </strong>
                <p className=" text-[10px] text-slate-400">3h ago</p>
              </div>
              <p className=" ps-8 text-[13px] text-slate-500">
                Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget,
                imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices
                mauris...
              </p>
            </li>
          </ul>

          <ul className="timeline py-5 md:py-8 lg:py-3">
            <li className="timeline-item">
              <div className=" flex items-center justify-between">
                <strong className=" text-[10px] ps-8">Signed in</strong>
                <p className=" text-[10px] text-slate-400">2d ago</p>
              </div>
              <p className=" ps-8 text-[13px] text-slate-500">
                Sed aliquam ultrices mauris. Integer ante arcu...
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
