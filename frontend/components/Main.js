import React from "react";

function Main() {
  return (
    <div className="flex flex-col m-auto items-center">
      <h1 className="text-5xl font-bold mb-8">Welcome to E-Buy!</h1>
      <div className="flex flex-row justify-center mb-8">
        <span className="text-3xl mr-4">🛍️</span>
        <span className="text-3xl mr-4">🛒</span>
        <span className="text-3xl mr-4">🎁</span>
        <span className="text-3xl mr-4">👗</span>
        <span className="text-3xl mr-4">👕</span>
        <span className="text-3xl mr-4">👖</span>
        <span className="text-3xl mr-4">👠</span>
        <span className="text-3xl mr-4">💄</span>
        <span className="text-3xl mr-4">🕶️</span>
      </div>
      <p className="text-2xl text-center mx-40 mb-2">
        Discover a world of fashion, beauty, and lifestyle products at your fingertips.
      </p>
      <p className="text-2xl text-center mx-40 mb-2">
      Our online shopping site offers a wide range of high-quality items, from clothing and accessories to home decor and gifts.
      </p>
      <p className="text-2xl text-center mx-40 mb-8">
      Shop with us from the comfort of your own home and enjoy the convenience of easy ordering and fast delivery.
      </p>
      <p className="text-2xl text-center mx-8">
        Start browsing now and let us help you find the perfect items to suit your style and needs. Happy shopping!
      </p>
    </div>
  );
}

export default Main;

