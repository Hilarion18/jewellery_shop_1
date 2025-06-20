import React from 'react';

type AlbumData = {
  id: number;
  title: string;
  description: string;
};

type Props = {
  data: AlbumData[];
};

const AlbumGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumGrid;
