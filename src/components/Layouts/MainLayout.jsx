import React from "react"; 

function MainLayout(props) {
  const { children } = props;
  
  return (
    <>
	    <div className="flex">
			<aside className="bg-red-500">kiri</aside>
			<div className="bg-yellow-500">kanan {children}</div>
            <div className="bg-green-300">kanan atas</div>
			<div className="bg-green-500">{children}</div>
		</div>
    </>
  );
}

export default MainLayout;