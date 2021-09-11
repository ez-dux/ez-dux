import React, { SyntheticEvent } from 'react';

import { useData, useLoading, useRequest, useStart } from '../store/age';

export const Examples: React.FC = () => {
  const value = useRequest();
  const start = useStart();
  const onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    start({ name: e.currentTarget.value });
  };
  const data = useData();
  const loading = useLoading();
  return (
    <div className="h-full">
      <header className="border-black h-20 w-full p-1 flex align-center bg-purple-100 fixed shadow">
        <h6 className="text-purple-700 text-lg font-semibold my-auto p-4">
          ez-dux
        </h6>
        <h6
          className="text-purple-500 text-lg font-semibold my-auto p-4"
          onClick={() =>
            window.open(
              'https://api.whatsapp.com/send?phone=5548991012435&text=hi!',
              '_blank'
            )
          }
        >
          redux mentoring?
        </h6>
      </header>
      <div className="flex flex-row pt-20">
        <div className="bg-purple-300 w-1/5 p-1">
          <div className="fixed">Whatever</div>
        </div>
        <div className="bg-purple-200 w-4/5 p-8">
          <div>
            <input onChange={onChange} value={value?.name} />
          </div>
          {loading && <div>...loading</div>}
          {data && <div>{data?.age}</div>}
        </div>
      </div>
    </div>
  );
};
