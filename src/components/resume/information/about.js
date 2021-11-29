import React from 'react';

const about = () => {
  return (
    <div className="about">
      <h3 className="title">about this page</h3>
      <p>
        this page is for react, typescript and sass test before inplements of product.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        voluptates modi facere vel sapiente laborum, ea ab error saepe
        eaque. Quia quae reiciendis hic totam ad in necessitatibus iste?
        Quibusdam.
      </p>
      <div className="box-container">
        <div className="box">
          <h3> <span>age : </span> 20 </h3>
          <h3> <span>address : </span> seoul, korea </h3>
          <h3> <span>number : </span> +123-456-7880 </h3>
          <h3> <span>email : </span> acskang@gmail.com </h3>
        </div>
        <div className="box">
          <h3> <span>skill : </span> web design </h3>
          <h3> <span>language : </span> english </h3>
          <h3> <span>experience : </span> 2 years </h3>
          <h3> <span>freelance : </span> available </h3>
        </div>
      </div>
    </div>
  );
};

export default about;