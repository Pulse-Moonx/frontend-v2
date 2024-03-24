"use client";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { useState } from "react";
import { useGetUser } from "@/hooks/getUser";
import { onPolygon, onEther } from "@/functions";

export function TransferTokensTwo() {
  const { register, handleSubmit } = useForm();
  const [amount, setAmount] = useState("0");
  const user = useGetUser();
  const style =
    "bg-white bg-opacity-10 backdrop-blur-md w-full px-6 p-4 rounded-lg border border-white border-opacity-50";

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="w-full flex flex-col items-start gap-6"
    >
      <input
        {...register("amount", { required: true })}
        placeholder="Quantidade de tokens"
        type="number"
        value={amount}
        onChange={({ currentTarget }) => setAmount(currentTarget.value)}
        className={style}
      />
      <Button
        children={"Enviar para Polygon"}
        onClick={() => onPolygon(amount, user)}
      />
      <Button
        children={"Enviar para Ethereum"}
        onClick={() => onEther(amount, user)}
      />
    </form>
  );
}
