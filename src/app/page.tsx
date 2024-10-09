import Form from "@/components/form/Mainform";
import Image from "next/image";

export default function Page() {
  return (
    <div className="">
      <Form />
      <div className="flex w-full justify-between items-center mt-5 px-2 sm:px-4">
        <Image
          src={"/asstes/icons/mlsa.png"}
          alt="mlsa logo"
          height={200}
          width={200}
          className="max-w-[150px] sm:max-w-[200px] w-auto h-auto"
        />
        <Image
          src={"/asstes/images/hacktoberfest.png"}
          alt="hacktoberfest"
          height={120}
          width={120}
          className="max-w-[100px] sm:max-w-[200px] w-auto h-auto"
        />
      </div>
    </div>
  );
}
