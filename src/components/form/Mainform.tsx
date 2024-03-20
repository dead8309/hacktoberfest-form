"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Name from "@/components/questions/Name";
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Mail from '../questions/Mail';
import Phone from '../questions/Phone';
import Roll from '../questions/Roll';
import TryHackId from '../questions/TryHackId';
import Year from '../questions/Year';
import Rate from '../questions/Rate';

function Mainform() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Name />;
      case 1:
        return <Mail />;
      case 2:
        return <Phone />;
      case 3:
        return <Roll />;
      case 4:
        return <TryHackId />;
      case 5:
        return <Year />;
      default:
        return <Rate />;
    }
  }

  const FormTitles = [
    "Name",
    "Email",
    "Phone",
    "Roll",
    "TryHackME ID",
    "Year",
    "Rate",
  ];

  return (
    <div className='flex w-full h-full'>
      <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <Card className='px-5 sm:px-28 md:px-40 bg-black overflow-hidden'>
          <div className=''>
            <CardHeader>
              <CardTitle className='flex text-white items-center'>
                <span className='text-xs'>{page + 1}</span>
                <span><Image src={"/asstes/icons/arrow-white2.png"} alt="arrow" height={10} width={15} /></span>
                <span className='text-lg mx-2 font-normal'>{FormTitles[page]}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                {PageDisplay()}
              </motion.div>
            </CardContent>
            <CardFooter className="flex gap-10">
              <Button
                size="sm"
                disabled={page === 0}
                className='bg-transparent text-white'
                onClick={() => setPage((currPage) => currPage - 1)}
              >
                Go Back
              </Button>
              <Button
                size="sm"
                className='bg-transparent text-white'
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("form submitted");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Mainform;
