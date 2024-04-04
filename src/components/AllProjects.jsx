import { dataProjects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import BuiltWith from "./BuiltWith";
import LinkArrow from "./LinkArrow";
import { useNavigate } from "react-router-dom";

export default function AllProjects() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-6 md:max-lg:w-4/6 lg:max-w-none xl:max-w-screen-xl lg:px-6 xl:px-24 mb-40">
      <div className="relative mt-16 xl:mt-24">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="group mb-2 inline-flex items-center font-semibold leading-tight text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            ></path>
          </svg>
          Januar Maksum
        </button>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          All Projects
        </h1>
        <table className="mt-12 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
          <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-dark-blue/75 px-6 py-5 backdrop-blur text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 text-slate-200">
                Year
              </th>
              <th scope="col" className="py-3 text-slate-200">
                Project
              </th>
              <th
                scope="col"
                className="hidden xl:table-cell py-3 text-slate-200"
              >
                Description
              </th>
              <th
                scope="col"
                className="hidden lg:table-cell py-3 text-slate-200"
              >
                Built with
              </th>
              <th
                scope="col"
                className="hidden md:table-cell py-3 text-slate-200"
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {dataProjects.map((item) => (
              <tr
                key={item.project_id}
                className="border-b border-slate-300/10 last:border-none"
              >
                <td className="py-4 pr-4 align-top">{item.project_year}</td>
                <th
                  scope="row"
                  className="py-4 pr-4 align-top font-medium text-gray-900 dark:text-white"
                >
                  <a
                    href={item.project_link}
                    className="group-hover:text-primary cursor-pointer font-semibold"
                    target="_blank"
                  >
                    {item.project_title}{" "}
                    <span className="md:hidden">
                      <LinkArrow />
                    </span>
                  </a>
                </th>
                <td className="hidden xl:table-cell py-4 pr-4 align-top text-xs">
                  {item.project_description}
                </td>
                <td className="hidden lg:table-cell py-4 pr-4 align-top">
                  <ul className="flex flex-wrap -translate-y-1.5">
                    {item.project_build_with.map((build, index) => (
                      <BuiltWith build={build} key={index} />
                    ))}
                  </ul>
                </td>
                <td className="hidden md:table-cell py-4 pr-4 align-top">
                  <a
                    href={item.project_link}
                    className="flex group-hover:text-primary cursor-pointer font-semibold"
                    target="_blank"
                  >
                    {item.project_link_type === "github" && (
                      <div className="flex items-center gap-1">
                        <span>GitHub</span>
                        <span>
                          <FaGithub
                            size={14}
                            className="hover:text-slate-200 transition-all cursor-pointer"
                          />
                        </span>
                      </div>
                    )}
                    {item.project_link_type === "domain" && (
                      <>
                        {item.project_link_short}
                        <LinkArrow />
                      </>
                    )}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
