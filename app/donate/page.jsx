import React from "react";
import Image from "next/image";
import image1 from "@/public/1812.jpg";

import { AspectRatio } from "@/components/ui/aspect-ratio";

function Donate() {
  return (
    <div className="w-[450px]  ">
      <AspectRatio ratio={10 / 9}>
        <Image
          src={image1}
          alt="Image"
          className="rounded-md object-cover my-5"
        />
        <Image
          src={image1}
          alt="Image"
          className="rounded-md object-cover my-5"
        />
      </AspectRatio>
      <AspectRatio ratio={10 / 9}>
        <Image
          src={image1}
          alt="Image"
          className="rounded-md object-cover my-5"
        />
        <Image
          src={image1}
          alt="Image"
          className="rounded-md object-cover my-5"
        />
      </AspectRatio>
    </div>
  );
}

export default Donate;
