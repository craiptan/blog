import Container from "./Container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const CompanyHero = () => {
  return (
    <>
<Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {data.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
    </>
  );
}

const data = [
  {
    question: "Vision",
    answer: "To actualize digital concepts through creative technology solutions.",
  },
  {
    question: "Mission",
    answer: "To simplify technology concepts and streamline business processes through automation to reduce waste and maximize profitable growth.",
  },
  {
    question: "Roadmap",
    answer:
      "Providing technology solutions as a means to streamline and grow business solutions and contribute to a brighter world in many different ways.",
  },
];

export default CompanyHero;