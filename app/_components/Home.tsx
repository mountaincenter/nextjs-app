import { HomeIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import Button from "./atoms/Button/Button";

const HomeLink = () => {
  return (
    <Link href="/">
      <Button className="inline-block">
        <HomeIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      </Button>
    </Link>
  );
};

export default HomeLink;
