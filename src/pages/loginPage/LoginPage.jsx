import React from "react"
import BreadCrumbs from "../../components/utilities/BreadCrumbs"

const LoginPage = () => {
  let pathname = window.location.href
  let pathArray = pathname.split("/")
  let finalPath = pathArray[pathArray.length - 1]

  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className=" mt-[124px] mb-[125px]">
          <h3 className="font-dm text-[49px] capitalize text-[#262626] font-bold leading-normal mb-3">
            login
          </h3>
          <BreadCrumbs lastPath={finalPath} />
        </div>
        <div className=" mb-[57px] border-b border-[#f0f0f0f]">
          <p className="font-dm font-normal text-[#767676] text-base leading-[30px] mb-[62px] w-[644px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>
        <div className="mb-[58px] border-b border-[#f0f0f0]">
          <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
            Returning Customer
          </h2>
          <form action="" className="w-[1055px] border-b border-[#f0f0f0]">
            <div className="flex justify-between gap-[39px] mb-10">
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  Email address
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="email"
                  name="email"
                  placeholder="company@domain.com"
                />
              </div>
              <div className="flex flex-col w-1/2 border-b border-[#f0f0f0]">
                <label
                  htmlFor=""
                  className="font-dm text-[#262626] text-base font-bold leading-[23px] capitalize mb-[10px]"
                >
                  password
                </label>
                <input
                  className="font-dm text-sm pb-[17px] px-1"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
            </div>
            <button className="py-4 px-20 border border-[#2b2b2b] bg-white mb-[70px] font-dm text-sm text-[#262626] font-bold text-center hover:bg-[#262626] hover:text-[#fff] transition-all duration-300">
              Log in
            </button>
          </form>
        </div>
        <div>
          <h2 className="font-dm text-[#262626] text-[39px] font-bold capitalize leading-normal mb-[42px]">
            New Customer
          </h2>
          <p className="font-dm font-normal text-[#767676] text-base leading-[30px] mb-[62px] w-[644px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <button className="py-4 px-20 border border-[#2b2b2b] bg-white mb-[70px] font-dm text-sm text-[#262626] font-bold text-center hover:bg-[#262626] hover:text-[#fff] transition-all duration-300">
            Continue
          </button>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
