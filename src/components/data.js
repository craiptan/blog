import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../../public/img/benefit-one.png";
  import benefitTwoImg from "../../public/img/benefit-two.png";
  
  const benefitOne = {
    title: "Why consult with us?",
    desc: "Most consut with us to actualize digital concepts through creative technology solutions, while doing so they realize the following ",
    image: benefitOneImg,
    bullets: [
      {
        title: "Drive customer retention",
        desc: "Through streamlining of business processes to improve customer experience you get to understand your customers",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Improve efficiency",
        desc: "Through business process automation the effiency and productivity is improved through elimination of waste",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Tap to new opportunities",
        desc: "In today's fast-paced business environment, agility is key. By improving processes and implementing streamlined solutions, your organization will be better equipped to adapt quickly to changes in the customer needs and take advantage of the new opportunities.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Offer more benefits here",
    desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Mobile Responsive Template",
        desc: "Nextly is designed as a mobile first responsive template.",
        icon: <DevicePhoneMobileIcon />,
      },
      {
        title: "Powered by Next.js & TailwindCSS",
        desc: "This template is powered by latest technologies and tools.",
        icon: <AdjustmentsHorizontalIcon />,
      },
      {
        title: "Dark & Light Mode",
        desc: "Nextly comes with a zero-config light & dark mode. ",
        icon: <SunIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};