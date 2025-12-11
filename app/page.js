"use client";
import FlyingPosters from "@/components/FlyingPosters";
import PillNav from "@/components/PillNav";
import StaggeredMenu from "@/components/StaggeredMenu";
import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { NoiseBackground } from "@/components/ui/noise-background";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { cn } from "@/lib/utils";
import React from "react";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

const items = [
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/400/400?grayscale",
];

const page = () => {
  return (
    <div
      style={{ minHeight: "100vh", background: "#1a1a1a" }}
      className="overflow-x-hidden"
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/path-to-your-logo.svg"
        accentColor="#ff6b6b"
        isFixed={true}
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />

      <div className="max-w-4xl mx-auto pt-16 px-4">
        <div className="mt-16">
          <p className="text-left text-white mt-4">
            You are not your job, you&apos;re not how much money you have in the
            bank. You are not the car you drive. You&apos;re not the contents of
            your wallet. You are not your fucking khakis.{" "}
            <EncryptedText text="All singing, all dancing crap of the world." />
          </p>
          <div className="mx-auto max-w-sm mt-8">
            <NoiseBackground
              gradientColors={[
                "rgb(255, 100, 150)",
                "rgb(100, 150, 255)",
                "rgb(255, 200, 100)",
              ]}
            >
              <Card>
                <div className="px-4 py-2">
                  <EncryptedText text="How to create a bento grid with Tailwind" />
                  <h3 className="text-left text-lg font-semibold text-balance text-neutral-800 dark:text-neutral-200"></h3>
                  <p className="mt-2 text-left text-sm text-neutral-600 dark:text-neutral-400">
                    Learn how to create a bento grid with Tailwind CSS, Next.js
                    and Framer Motion.
                  </p>
                </div>
              </Card>
            </NoiseBackground>
          </div>
        </div>
      </div>
    </div>
  );
};

// const page = () => {
//   return (
//     <div className="mx-auto mt-8 flex w-full items-center justify-center">
//       <PixelatedCanvas
//         src={"./main.jpeg"}
//         width={800}
//         height={600}
//         cellSize={4}
//         dotScale={0.9}
//         shape={"circle"}
//         backgroundColor="#000000"
//         dropoutStrength={0.1}
//         interactive
//         distortionStrength={0.1}
//         distortionRadius={200}
//         distortionMode="repel"
//         followSpeed={0.2}
//         jitterStrength={4}
//         jitterSpeed={1}
//         sampleAverage
//         className="rounded-xl shadow-lg"
//       />
//     </div>
//   );
// };

export default page;

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex h-full min-h-80 flex-col overflow-hidden rounded-lg bg-white text-center dark:bg-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="flex gap-2">{children}</div>;
};

const CardBody = ({ children }) => {
  return <div className="flex ">{children}</div>;
};

const CardSkeleton = ({ children }) => {
  return (
    <div className="flex bg-neutral-400/50 rounded-md p-2 mt-4 overflow-hidden bg-[radial-gradient(var(--color-neutral-700)_1px,transparent_1px)] bg-size-[10px_10px] mask-radial-from-40%">
      {children}
    </div>
  );
};
