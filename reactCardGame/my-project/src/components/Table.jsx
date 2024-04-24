import React from "react";

export default function Table({ playersList }) {
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
              <td className="px-4 py-2 border border-black">Admin</td>
              <td className="px-4 py-2 border border-black">100</td>
              <td className="px-4 py-2 border border-black">0</td>
              <td className="px-4 py-2 border border-black">100</td>
              <td className="px-4 py-2 border border-black">100.00%</td>
            </tr>
            {playersList.map((player, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-2 border border-black">{player.fullName}</td>
                <td className="px-4 py-2 border border-black">{player.wins}</td>
                <td className="px-4 py-2 border border-black">{player.lost}</td>
                <td className="px-4 py-2 border border-black">{player.wins + player.lost}</td>
                <td className="px-4 py-2 border border-black">
                  {((player.wins / (player.wins + player.lost)) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
