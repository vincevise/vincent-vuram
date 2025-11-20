"use client";
import { motion } from "framer-motion";

import ContactGrid from "@/components/main-page/contact-grid";
import CvSection from "@/components/main-page/cv-section";
import BangaloreMap from "@/components/main-page/geo-location";
import ObjectSection from "@/components/main-page/object-section";
import SkillSection from "@/components/main-page/skill-section";
import ItemContainer from "@/components/ui-components/item-container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiDotsSixVerticalBold } from "react-icons/pi";
import Chip from "@/components/ui-components/chip";
import NoSignal from "@/components/tv-grain";
import SocioGramPost from "@/components/main-page/sociaogram-card";

// Explicitly define the component return type
export default function Page(): React.ReactElement {
  return (
    <React.StrictMode>
      <div
        className="px-4 lg:px-10  space-y-4 mt-12 py-8"
        // style={backgroundgrid}
      >
        <h1 className="text-3xl font-bold mb-6 sr-only">
  Vuram Vincent — Frontend Developer (React & Next.js)
</h1>

        <div className="w-full  max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
          <div className="w-full col-span-12 grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-6">
            <div className="col-span-6 grid grid-cols-3 lg:grid-cols-6  gap-6">
              <ItemContainer>
                <div className="w-full h-full flex flex-col gap-2 justify-between items-start text-left  p-4">
                  <Image
                    src={"/dp2.png"}
                    alt="my dp"
                    className="w-28  h-auto object-contain"
                    width={100}
                    height={100}
                  />
                  <p className="">
                    {`I'm`} <strong>Vuram Vincent</strong> , a developer with an
                    architectural background from Bangalore. {`I'm`} interested in
                    Full Stack Development, UI/UX Design, Architecture, Creative
                    Coding, Spatial Design, and Art.
                  </p>
                </div>
              </ItemContainer>
                <BangaloreMap />
              <ContactGrid/>
            </div>

            <CvSection />
          </div>
          <div className="col-span-12 lg:col-span-3 group relative contianer-border-style">
            <NoSignal/>
            {/* <Link className="w-full block h-full relative " href={"/work"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              <div className="text-xl font-medium text-black absolute top-6 left-6">
                  WORK
              </div>
              
                <Image
                  alt="urban"
                  className="w-full h-full object-contain p-6 group-hover:p-0 transition-all duration-300"
                  width={300}
                  height={300}
                  src={"/3d/urban/urban.png"}
                />
            </motion.div>
            </Link> */}
          </div>

           <SkillSection/>

          <ObjectSection/>
           <div className="col-span-2 md:col-span-6 lg:col-span-12 w-full  max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12  ">
          <ItemContainer href="/3d/urban" title="Urban Design">
            <Image
              src="/3d/urban/urban.png"
              alt="vav"
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
          </ItemContainer>

          <ItemContainer
            href="/ui-lib"  
            title="UI Library"
          >
            <Image
              src="/ui-lib.png"
              alt="vav"
              width={400}
              height={400}
              className="w-full p-4 h-auto object-contain"
            /> 
          </ItemContainer>
          
          <ItemContainer
            title="Safakat"
            href="/3d/safakat"
          >
            <Image
              src="/3d/safakat/safakathouse.png"
              alt="vav"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </ItemContainer>
          
          <ItemContainer title="Residence" href="/3d/residence">
            <Image
              src="/3d/residence/residence5.png"
              alt="vav"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </ItemContainer>

          <ItemContainer title="Canteen" href="/3d/canteen">
            <Image
              src="/3d/canteen/canteen.png"
              alt="masshousing"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </ItemContainer>

          <ItemContainer title="Vav" href="/3d/vav">
            <Image
              src="/3d/vav/vav.png"
              alt="vav"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </ItemContainer>
          
          <ItemContainer title="Mass Housing" href="/3d/masshousing">
            <Image
              src="/3d/masshousing/masshousing.jpg"
              alt="masshousing"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </ItemContainer>

          <ItemContainer title="Flow Builder" href="/worflow-builder">
            <Image
              src="/flow-builder.png"
              alt="flow-builder"
              width={200}
              height={200}
              className="w-full h-full object-contain"
            />
          </ItemContainer>
           <ItemContainer  
          //  href="/https://google-keep-clone-eta-steel.vercel.app/"
           >
            <div className="w-full h-full flex ">
              <div className=" h-full px-0.5 flex flex-col justify-end py-4 bg-gray-100 rounded-l-md  cursor-move  ">
                <PiDotsSixVerticalBold className="w-8 h-8"/> 
              </div>
              <div className="w-full h-full p-3 text-left flex flex-col">
                <div className="w-full h-full">
                  <Link href={'https://google-keep-clone-eta-steel.vercel.app/'} className="font-medium  text-lg w-full outline-none hover:underline">Google Keep Clone</Link>
                  <div className="w-full h-fit mt-4 text-gray-500 text-sm space-y-2">
                    <p className="">
                      Made a Google Keep clone in React — now I have more states than the United States.
                    </p>
                    <p>
                      I built a Google Keep clone for my portfolio. It's like Google Keep… but it only keeps my hopes of becoming a full-stack dev alive.
                    </p>
                  </div>
                  <div className="mt-10 w-full flex-wrap flex items-center gap-2">
                    <Chip value="PERN"  onClose={()=>{}}/>
                    <Chip value="T3-Stack"  onClose={()=>{}}/>
                  </div>

                </div>
                <div>
                </div>
              </div>
            </div>
            {/* <Image
              src="/keep-clone.png"
              alt="Keep clone"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            /> */}
          </ItemContainer>
           <ItemContainer  
          //  href="/https://google-keep-clone-eta-steel.vercel.app/"
           >
             <SocioGramPost/>
            
          </ItemContainer>
          <div className="col-span-6 aspect-square contianer-border-style h-[calc(100vh-100px)]">
            {/* <AestheticSceneR3F /> */}
            <iframe
            src="https://architecture-3d.vercel.app/aesthetic"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
          />
          </div>
        </div>
          
        </div>
      </div>
    </React.StrictMode>
  );
}
