import React from "react";
import Input from "../../components/Input";
import { PlusIcon } from "@heroicons/react/20/solid";

export default function PersonalGrowthPage({ countries }: any) {
  return (
    <div className="flex flex-col space-y-3 text-white">
      <h1 className="text-4xl">Forecast</h1>
      <Input
        onEnter={() => console.log("hit enter")}
        placeholder="Forecast goal"
        type="text"
        required
      />
      <div className="flex w-full items-center justify-center space-x-2">
        <button className="h-8 w-8 rounded-full bg-teal-600 p-1 transition-shadow hover:shadow hover:shadow-md hover:shadow-teal-200/50">
          <PlusIcon className="h-full w-full text-white" />
        </button>
        <span>or ↵</span>
      </div>
    </div>
  );
}
