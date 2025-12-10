import { Button } from "@/components/ui/button";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { NoiseBackground } from "@/components/ui/noise-background";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { cn } from "@/lib/utils";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Bento Grid</h1>
      <Button
        variant="primary"
        className="bg-blue-500 text-white cursor-pointer"
      >
        Click me
      </Button>
      <p className="text-left">
        You are not your job, you&apos;re not how much money you have in the
        bank. You are not the car you drive. You&apos;re not the contents of
        your wallet. You are not your fucking khakis.{" "}
        <EncryptedText text="All singing, all dancing crap of the world." />
      </p>

      <div className="mx-auto max-w-sm">
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
                Learn how to create a bento grid with Tailwind CSS, Next.js and
                Framer Motion.
              </p>
            </div>
          </Card>
        </NoiseBackground>
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
