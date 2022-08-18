import React, { useEffect, useState } from 'react';
import AdminBill from './adminBill/Bill';
import UserBill from './userBill/userBill';

export default function Bill({ updateCart, router }) {
  const level = 1;
  const [totalQuantity, setTotalQuantity] = useState();
  const [totalPitem, setTotalItem] = useState();
  useEffect(() => {
    // ttprice
    const s = updateCart
      ?.filter((item) => item.id === Number(router.query.id))
      .map((data) =>
        data.data.cart?.items.map(
          (i) => Number(i.quantity) * Number(i.itemTotal)
        )
      );
    const totalPrice = s[0];
    let sum = 0;
    for (let i = 0; i < totalPrice?.length; i++) {
      sum += totalPrice[i];
    }
    setTotalItem(sum);
    // ttamount
    const s1 = updateCart
      ?.filter((item) => item.id === Number(router.query.id))
      .map((data) => data.data.cart?.items.map((i) => Number(i.quantity)));
    const totalAmount = s1[0];
    let sum1 = 0;
    for (let i = 0; i < totalAmount?.length; i++) {
      sum1 += totalAmount[i];
    }
    setTotalQuantity(sum1);
  });

  return (
    <div>
      {level === 0 ? (
        <>
          <AdminBill
            updateCart={updateCart}
            router={router}
            totalQuantity={totalQuantity}
            totalPitem={totalPitem}
          />
        </>
      ) : (
        <>
          <UserBill
            updateCart={updateCart}
            router={router}
            totalPitem={totalPitem}
            totalQuantity={totalQuantity}
          />
        </>
      )}
    </div>
  );
}
