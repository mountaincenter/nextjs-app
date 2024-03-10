import React from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  Button: {
    children: <MoonIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />,
  },
};
