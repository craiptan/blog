import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
    UserGroupIcon,
    PuzzlePieceIcon,
    CodeBracketIcon,
    CodeBracketSquareIcon
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
    title: "What solutions do we offer?",
    desc: "We offer consultancy services in the areas of customer relationship management (CRM) systems, business process automation and web application development.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "CRM Consultancy",
        desc: "While streamlining your business operations we ensure that you get the right solution and tailor made to fit your usecase and have room to scale while minimizing cost.",
        icon: <UserGroupIcon />,
      },
      {
        title: "Business process automation",
        desc: "We help you identify, and eliminate waste in your business operation through business process automation.",
        icon: <PuzzlePieceIcon />,
      },
      {
        title: "Application Implementation and Support",
        desc: "We are your partner in implementing bespoke solution to your business or integrate available tools within your ecosystem to fit your business needs.",
        icon: <CodeBracketIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};