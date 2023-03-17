import dynamic from "next/dynamic";
import { ComponentType } from "react";

// dynamic import for performance
const IconProtectedFilled = dynamic(
  () => import("./library/iconProtectedFilled")
);
const IconProtected = dynamic(() => import("./library/iconProtected"));
const IconScroll = dynamic(() => import("./library/iconScroll"));
const IconLoader = dynamic(() => import("./library/iconLoader"));
const IconDetails = dynamic(() => import("./library/iconDetails"));
const IconLock = dynamic(() => import("./library/iconLock"));
const IconChevronDown = dynamic(() => import("./library/iconChevronDown"));
const IconError = dynamic(() => import("./library/iconError"));
const IconSuccess = dynamic(() => import("./library/iconSuccess"));
const IconAccordionCollapse = dynamic(
  () => import("./library/iconAccordionCollapse")
);
const IconAccordionExpand = dynamic(
  () => import("./library/iconAccordionExpand")
);

// Social
const IconTwitter = dynamic(() => import("./library/iconTwitter"));
const IconLinkedIn = dynamic(() => import("./library/iconLinkedIn"));

// Flags
const IconFlagUs = dynamic(() => import("./library/iconFlagUs"));
const IconFlagAu = dynamic(() => import("./library/iconFlagAu"));
const IconFlagUk = dynamic(() => import("./library/iconFlagUk"));
const IconFlagEs = dynamic(() => import("./library/iconFlagEs"));
const IconFlagDe = dynamic(() => import("./library/iconFlagDe"));
const IconFlagPt = dynamic(() => import("./library/iconFlagPt"));
const IconFlagIt = dynamic(() => import("./library/iconFlagIt"));

interface IIconVariation {
  [index: string]: ComponentType<{ colour?: string | undefined }>;
}

export const IconController = (
  icon: string,
  size: number | undefined
): {
  IconComponent: ComponentType<{ colour?: string | undefined }>;
  containerSize: string | undefined;
} => {
  // Size
  let containerSize;

  switch (size) {
    case 1:
      containerSize = "h-4 w-4";
      break;
    case 2:
      containerSize = "h-6 w-6";
      break;
    case 3:
      containerSize = "h-8 w-8";
      break;
    case 4:
      containerSize = "h-16 w-16";
      break;
    case 5:
      containerSize = "h-32 w-32";
      break;
  }

  // Variant
  const iconVariation: IIconVariation = {
    protected: IconProtected,
    protectedFilled: IconProtectedFilled,
    scroll: IconScroll,
    loader: IconLoader,
    details: IconDetails,
    lock: IconLock,
    chevronDown: IconChevronDown,
    error: IconError,
    success: IconSuccess,
    accordionCollapse: IconAccordionCollapse,
    accordionExpand: IconAccordionExpand,
    twitter: IconTwitter,
    linkedIn: IconLinkedIn,
    flagUs: IconFlagUs,
    flagUk: IconFlagUk,
    flagAu: IconFlagAu,
    flagEs: IconFlagEs,
    flagDe: IconFlagDe,
    flagPt: IconFlagPt,
    flagIt: IconFlagIt,
  };

  const IconComponent = iconVariation[icon];

  return {
    IconComponent,
    containerSize,
  };
};
