import React, { useState } from "react";

const SortableTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      source: "Google",
      users: 1023,
      sessions: 1265,
      bounceRate: "27.23%",
      avgSessionDuration: "00:06:25",
    },
    {
      id: 2,
      source: "Direct",
      users: 872,
      sessions: 1077,
      bounceRate: "32.70%",
      avgSessionDuration: "00:09:18",
    },
    {
      id: 3,
      source: "Facebook",
      users: 812,
      sessions: 1003,
      bounceRate: "24.83%",
      avgSessionDuration: "00:05:56",
    },
    {
      id: 4,
      source: "GitHub",
      users: 713,
      sessions: 881,
      bounceRate: "38.09%",
      avgSessionDuration: "00:06:19",
    },
    {
      id: 5,
      source: "DuckDuckGo",
      users: 693,
      sessions: 856,
      bounceRate: "37.36%",
      avgSessionDuration: "00:09:12",
    },
    {
      id: 6,
      source: "Pinterest",
      users: 623,
      sessions: 770,
      bounceRate: "52.81%",
      avgSessionDuration: "00:03:10",
    },
    {
      id: 7,
      source: "Bing",
      users: 504,
      sessions: 623,
      bounceRate: "66.76%",
      avgSessionDuration: "00:04:42",
    },
    {
      id: 8,
      source: "Twitter",
      users: 462,
      sessions: 571,
      bounceRate: "31.53%",
      avgSessionDuration: "00:08:05",
    },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSort = (key) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    setData(
      [...data].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );

    setSortConfig({ key, direction });
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 text-[#6C757D]">
      <thead>
        <tr>
          <th
            onClick={() => handleSort("source")}
            className="py-3 px-3 text-start"
          >
            Source{" "}
            {sortConfig.key === "source" && sortConfig.direction === "asc" && (
              <span>&uarr;</span>
            )}
            {sortConfig.key === "source" && sortConfig.direction === "desc" && (
              <span>&darr;</span>
            )}
          </th>
          <th
            onClick={() => handleSort("users")}
            className="py-3 px-3 text-end"
          >
            Users{" "}
            {sortConfig.key === "users" && sortConfig.direction === "asc" && (
              <span>&uarr;</span>
            )}
            {sortConfig.key === "users" && sortConfig.direction === "desc" && (
              <span>&darr;</span>
            )}
          </th>
          <th
            onClick={() => handleSort("sessions")}
            className="py-3 px-3 hidden xl:table-cell text-end"
          >
            Sessions{" "}
            {sortConfig.key === "sessions" &&
              sortConfig.direction === "asc" && <span>&uarr;</span>}
            {sortConfig.key === "sessions" &&
              sortConfig.direction === "desc" && <span>&darr;</span>}
          </th>
          <th
            onClick={() => handleSort("bounceRate")}
            className="py-3 px-3 hidden xl:table-cell text-end"
          >
            Bounce Rate{" "}
            {sortConfig.key === "bounceRate" &&
              sortConfig.direction === "asc" && <span>&uarr;</span>}
            {sortConfig.key === "bounceRate" &&
              sortConfig.direction === "desc" && <span>&darr;</span>}
          </th>
          <th
            onClick={() => handleSort("avgSessionDuration")}
            className="py-3 px-3 hidden xl:table-cell text-end"
          >
            Avg. Session Duration{" "}
            {sortConfig.key === "avgSessionDuration" &&
              sortConfig.direction === "asc" && <span>&uarr;</span>}
            {sortConfig.key === "avgSessionDuration" &&
              sortConfig.direction === "desc" && <span>&darr;</span>}
          </th>
        </tr>
      </thead>
      <tbody className="bg-transparent divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className=" ps-5 py-3 pe-3 ">{item.source}</td>
            <td className="py-3 px-3 text-end">{item.users}</td>
            <td className="py-3 px-3 hidden xl:table-cell text-end">
              {item.sessions}
            </td>
            <td className="py-3 px-3 hidden xl:table-cell text-end text-green-500">
              {item.bounceRate}
            </td>
            <td className="py-3 px-3 hidden xl:table-cell text-end">
              {item.avgSessionDuration}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
