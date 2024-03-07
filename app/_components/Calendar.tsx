import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "./atoms/Button";

const CalendarLink = () => {
  return (
    <Link href="/calendar">
      <Button className="inline-block">
        <CalendarDaysIcon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      </Button>
    </Link>
  );
};

export default CalendarLink;
