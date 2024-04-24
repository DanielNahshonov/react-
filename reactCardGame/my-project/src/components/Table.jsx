import React from "react";

export default function Table(PlayerList) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-5">
        <table className="table-auto">
          <thead>
            <tr className="bg-gray-200 border-black">
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">Wins</th>
              <th className="px-4 py-2 border border-black">Lose</th>
              <th className="px-4 py-2 border border-black">Games Played</th>
              <th className="px-4 py-2 border border-black">Win Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-4 py-2 border border-black">John</td>
              <td className="px-4 py-2 border border-black">10</td>
              <td className="px-4 py-2 border border-black">5</td>
              <td className="px-4 py-2 border border-black">15</td>
              <td className="px-4 py-2 border border-black">67%</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
