import React, { useState } from 'react';
import { Category, Videos } from './index';
import { BiSolidCategory } from 'react-icons/bi';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('예술의 이유');
  return (
    <main id="main">
      <aside id="aside">
        <h2>
          <BiSolidCategory className="icon" />
          카테고리
        </h2>
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} | 유튜버</h2>
        <Videos />
      </section>
    </main>
  );
};

export default MainConts;
