import Link from "next/link";
import Icon from "../../public/asstes/icons/mlsa.png";
import { Form_Details } from "@/constants";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Example from "@/components/ui/button2";
import Form from "@/components/form/Mainform";
import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <Form />
      <div className="mt-5 ml-3">
        <Image
          src={"/asstes/icons/mlsa.png"}
          alt="mlsa logo"
          height={200}
          width={200}
        />
        <Image
          src={"/asstes/images/hacktoberfest.png"}
          alt="hacktoberfest"
          height={140}
          width={140}
          className="absolute top-0 right-0 translate-y-5 -translate-x-4"
        />
      </div>
    </div>
  );
}
