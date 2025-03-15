export default function KnowledgeSharing() {
  return (
    <>
      {/* section1 */}
      <div className="container py-3 pt-lg-0 pb-lg-8 px-lg-15 mt-4 mb-6 my-lg-20">
        <div className="text-center">
          <h1 className="fs-3 fs-lg-0">知識分享</h1>
          <hr className="my-3 my-lg-8" />
          <h2 className="fs-5 fs-lg-1">獲取新知,拓展人生視野。</h2>
        </div>
      </div>

      {/* section2 */}
      <div className="container">
        <h3 className="fs-3 fs-lg-1 mb-6 mb-lg-10">精選文章</h3>
        {/* 手機版標籤 */}
        <div className="knowledge-labals bg-primary-2 p-1 d-lg-none">
          <ul className="list-unstyled mb-0 d-flex justify-content-around">
            <li>
              <a className="knowledge-labal">全部</a>
            </li>
            <li>
              <a className="knowledge-labal">運動</a>
            </li>
            <li>
              <a className="knowledge-labal">運動</a>
            </li>
            <li>
              <a className="knowledge-labal">飲食</a>
            </li>
            <li>
              <a className="knowledge-labal">養身</a>
            </li>
            <li>
              <a className="knowledge-labal">醫療</a>
            </li>
            <li>
              <a className="knowledge-labal">癌症</a>
            </li>
            <li>
              <a className="knowledge-labal">居家</a>
            </li>
          </ul>
        </div>

        {/* 電腦版標籤 */}
        <div className="knowledge-labals-lg d-none d-lg-block">
          <ul className="list-unstyled mb-0 d-flex">
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.9998 2C6.47729 2 2 6.47729 2 11.9998C2 17.5223 6.47729 21.9996 11.9998 21.9996C17.5223 21.9996 21.9996 17.5223 21.9996 11.9998C21.9939 6.47947 17.5201 2.0061 11.9998 2ZM3.39534 11.9998C3.39708 11.0366 3.56191 10.0803 3.88284 9.17204C4.45972 13.3672 8.13949 13.7217 8.29777 14.3906C8.38498 15.1441 8.40678 15.9032 8.36274 16.6602C8.42771 17.9531 10.2137 17.9718 10.9023 18.9952C11.1443 19.4797 11.2385 20.0247 11.173 20.5628C6.76465 20.1324 3.40144 16.4291 3.39534 12.0002V11.9998ZM14.3348 20.2789C14.9684 18.2949 16.8704 17.6221 17.064 16.4753C17.2192 15.5553 16.0101 15.08 14.9243 14.9505C13.8386 14.821 14.0051 13.6995 13.2399 12.9041C12.4746 12.1088 11.9758 12.1524 10.9005 12.2876C9.82523 12.4227 8.90518 12.3342 8.60475 11.6727C8.30431 11.0113 8.6876 10.6951 7.89705 9.87538C7.57438 9.56622 7.56348 9.05387 7.87263 8.7312C7.98687 8.61172 8.13513 8.53062 8.2969 8.49792C8.85504 8.36318 9.84747 9.33512 10.4292 9.22088C12.1799 8.85983 10.0812 5.43123 12.7118 4.5696C13.195 4.40478 13.5931 4.05551 13.8198 3.59853C15.2954 3.92077 16.6598 4.62672 17.7752 5.64489C18.0996 6.39052 18.216 7.21028 18.1109 8.01696C17.7604 9.10271 16.8765 9.8841 17.8401 11.6597C18.8457 13.5146 19.4662 13.7666 19.9183 13.256C20.0949 13.062 20.3164 12.9133 20.5628 12.8235C20.2188 16.3537 17.7473 19.3122 14.3348 20.2794V20.2789Z" />
                </svg>
                <h4>全部</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_439_6860)">
                    <path d="M21.6565 15.8562L20.0016 17.5102L21.2457 18.7531C21.3555 18.8629 21.4176 19.0117 21.4176 19.1672C21.4176 19.3227 21.3559 19.4715 21.2461 19.5813L19.5806 21.2457C19.3609 21.4652 18.9712 21.4652 18.7516 21.2457L17.5079 20.0023L15.8529 21.6566C15.3952 22.1145 14.6526 22.1145 14.1945 21.6566C13.7364 21.1992 13.7364 20.457 14.1945 19.9992L19.9984 14.1988C20.4565 13.7414 21.1988 13.7414 21.6569 14.1988C22.1145 14.6562 22.1145 15.3984 21.6569 15.8562H21.6565Z" />
                    <path d="M9.80553 4.00038L4.00163 9.80116C3.54354 10.2586 2.80129 10.2586 2.3432 9.80116C1.88511 9.34335 1.88511 8.60155 2.3432 8.14374L3.9985 6.48944L2.75712 5.24921C2.64729 5.13944 2.58514 4.99061 2.58514 4.83475C2.58514 4.67889 2.6469 4.53046 2.75712 4.4203L4.42259 2.75624C4.53711 2.64178 4.6872 2.58436 4.8369 2.58436C4.9866 2.58436 5.13708 2.64139 5.25121 2.75585L6.4922 3.99608L8.14711 2.34218C8.6048 1.88436 9.34744 1.88436 9.80553 2.34218C10.2636 2.79999 10.2636 3.54179 9.80553 3.9996V4.00038Z" />
                    <path d="M12.536 15.0277L8.97644 11.4582L11.4639 8.97224L15.0235 12.5418L12.536 15.0277Z" />
                    <path d="M19.9984 12.5418L12.5361 19.9996C12.0784 20.4574 11.3357 20.4574 10.8776 19.9996C10.4195 19.5418 10.4195 18.8 10.8776 18.3422L18.34 10.8844C18.7977 10.4269 19.5403 10.4269 19.9984 10.8844C20.4565 11.3422 20.4565 12.084 19.9984 12.5418Z" />
                    <path d="M13.1224 5.6578L5.66005 13.1156C5.20196 13.573 4.45971 13.573 4.00201 13.1156C3.54392 12.6578 3.54392 11.916 4.00201 11.4582L11.4643 4.00038C11.922 3.54296 12.6647 3.54296 13.1228 4.00038C13.5809 4.4578 13.5809 5.19999 13.1228 5.6578H13.1224Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_439_6860">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="matrix(1 0 0 -1 2 22)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h4>運動</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8012 8.38164C12.0992 8.86602 12.2926 9.41406 12.3617 9.98398L14.9578 6.85234C15.3828 6.33945 15.9641 5.98281 16.6043 5.83047C16.0285 4.73711 14.8816 4 13.5625 4C12.5809 4.00547 11.7875 4.24453 11.082 4.7418C11.5387 5.29883 11.8301 5.9625 11.932 6.68203C12.0137 7.25977 11.9684 7.83594 11.8012 8.38164Z" />
                  <path d="M2.73623 11.2656H8.38935L7.19795 10.0628H5.02099C4.7038 10.0628 4.44677 9.80581 4.44677 9.48862C4.44677 9.17143 4.7038 8.9144 5.02099 8.9144H6.04951L4.11982 6.98433C3.8956 6.76011 3.8956 6.39644 4.11982 6.17222C4.34404 5.948 4.70771 5.948 4.93193 6.17222L6.86123 8.1019V7.07339C6.86123 6.7562 7.11826 6.49917 7.43545 6.49917C7.75263 6.49917 8.01006 6.7562 8.01006 7.07339V9.25073L10.0561 11.2656H11.1003C11.3819 10.3312 11.155 9.2855 10.464 8.55308C11.0401 7.49214 10.8675 6.1562 9.98349 5.27222C9.09912 4.38745 7.76435 4.21479 6.7038 4.79136C5.65224 3.76597 3.92607 3.75659 2.86787 4.76831C2.31865 5.28823 2.01045 5.99097 2.00029 6.74604C1.98974 7.48706 2.26748 8.18472 2.78154 8.71401C2.34756 9.51245 2.33779 10.466 2.73623 11.2656Z" />
                  <path d="M15.8602 7.59991L12.8215 11.2655H19.425L19.4801 11.2198C19.886 10.8831 20.1329 10.3878 20.1575 9.86085C20.1793 9.39405 20.0243 8.93585 19.7297 8.57804C20.4719 8.32218 21.1954 8.52921 21.2418 8.54288C21.55 8.63741 21.8774 8.46514 21.9731 8.15694C22.0692 7.84796 21.8969 7.51944 21.5879 7.42335C21.5368 7.40733 20.7645 7.1753 19.8465 7.34054C20.0114 6.42218 19.7793 5.64991 19.7637 5.59874C19.6676 5.28975 19.3387 5.11593 19.0297 5.21202C18.7208 5.30811 18.5477 5.63546 18.6442 5.94405C18.6563 5.98468 18.8645 6.70616 18.6122 7.44835C18.2407 7.08936 17.7352 6.89757 17.2184 6.9214C16.6915 6.9464 16.1965 7.19327 15.8602 7.59913V7.59991Z" />
                  <path d="M21.4137 12.4375H2.58594C2.2625 12.4375 2 12.6781 2 12.9738C2 15.3129 2.9957 17.5117 4.80313 19.1656C4.96289 19.3117 5.12695 19.452 5.2957 19.5859H18.7039C18.8727 19.452 19.0367 19.3117 19.1965 19.1656C21.0039 17.5117 21.9996 15.3129 21.9996 12.9734C21.9996 12.6773 21.7371 12.4375 21.4137 12.4375Z" />
                </svg>
                <h4>飲食</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.9941 4.65977C7.63471 0.84688 2.09213 4.19688 2.00112 8.73868C1.97807 9.8961 2.31205 11.0234 2.97729 12.0629H7.28823L8.05502 10.7848C8.27768 10.4137 8.81635 10.402 9.0519 10.7719L10.6695 13.3141L13.0277 8.33594C13.2331 7.90157 13.846 7.8879 14.073 8.30899L16.0945 12.0629H21.0121C24.6546 6.36954 17.4554 -0.1164 11.9949 4.65977H11.9941Z" />
                  <path d="M15.228 12.9265L13.5901 9.88428L11.2737 14.7741C11.0769 15.1901 10.4972 15.2265 10.2499 14.8378L8.57139 12.2003L8.12178 12.9499C8.01592 13.1265 7.82529 13.2343 7.61943 13.2343H3.90381C4.02021 13.3562 3.39951 12.7366 11.5808 20.8757C11.8093 21.103 12.1788 21.103 12.4073 20.8757C20.4628 12.862 19.9683 13.3562 20.0843 13.2343H15.7437C15.528 13.2343 15.33 13.1159 15.2276 12.9261L15.228 12.9265Z" />
                </svg>
                <h4>養身</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.5715 17.868C17.4786 17.9608 17.425 18.0858 17.425 18.2144C17.425 18.4858 17.6465 18.7037 17.9143 18.7037H22V17.7251H17.9143C17.7858 17.7251 17.6608 17.7751 17.5679 17.868H17.5715Z" />
                  <path d="M6.575 9.1286C6.575 9.00003 6.52143 8.87146 6.42857 8.7786C6.33929 8.68931 6.21429 8.63574 6.08571 8.63574H2V9.61431H6.08571C6.35714 9.61431 6.575 9.39646 6.575 9.12503V9.1286Z" />
                  <path d="M21.0786 6.96777H18.7857C18.7857 6.96777 18.7821 6.96777 18.7786 6.96777C18.775 6.96777 18.775 6.96777 18.7714 6.96777H16.75C16.75 6.96777 16.7464 6.96777 16.7429 6.96777C16.7393 6.96777 16.7393 6.96777 16.7357 6.96777H7.26071C7.26071 6.96777 7.25714 6.96777 7.25357 6.96777C7.25 6.96777 7.25 6.96777 7.24643 6.96777H5.225C5.225 6.96777 5.22143 6.96777 5.21786 6.96777C5.21429 6.96777 5.21429 6.96777 5.21071 6.96777H2.92143C2.41429 6.96777 2 7.38206 2 7.8892V7.92492H6.08571C6.40714 7.92492 6.70714 8.04992 6.93571 8.27492C7.16071 8.49992 7.28929 8.81063 7.28929 9.12849C7.28929 9.79277 6.75 10.3321 6.08571 10.3321H2V20.2571C2 20.7642 2.41429 21.1785 2.92143 21.1785H21.0786C21.5857 21.1785 22 20.7642 22 20.2571V19.4178H17.9143C17.25 19.4178 16.7107 18.8785 16.7107 18.2142C16.7107 17.8963 16.8393 17.5856 17.0643 17.3606C17.2929 17.1356 17.5929 17.0106 17.9143 17.0106H22V7.8892C22 7.38206 21.5857 6.96777 21.0786 6.96777ZM16.7536 15.9213C16.7536 16.1178 16.5929 16.2785 16.3964 16.2785H14.2071V18.4678C14.2071 18.6642 14.0464 18.8249 13.85 18.8249H10.1571C9.96071 18.8249 9.8 18.6642 9.8 18.4678V16.2785H7.61071C7.41429 16.2785 7.25357 16.1178 7.25357 15.9213V12.2285C7.25357 12.0321 7.41429 11.8713 7.61071 11.8713H9.8V9.68206C9.8 9.48563 9.96071 9.32492 10.1571 9.32492H13.85C14.0464 9.32492 14.2071 9.48563 14.2071 9.68206V11.8713H16.3964C16.5929 11.8713 16.7536 12.0321 16.7536 12.2285V15.9213Z" />
                  <path d="M13.4894 12.2249V10.0356H10.5108V12.2249C10.5108 12.4214 10.3501 12.5821 10.1536 12.5821H7.96436V15.5606H10.1536C10.3501 15.5606 10.5108 15.7214 10.5108 15.9178V18.1071H13.4894V15.9178C13.4894 15.7214 13.6501 15.5606 13.8465 15.5606H16.0358V12.5821H13.8465C13.6501 12.5821 13.4894 12.4214 13.4894 12.2249Z" />
                  <path d="M9.18569 4.03564C8.31783 4.03564 7.61426 4.73922 7.61426 5.60707V6.2535H16.3893V5.60707C16.3893 4.73922 15.6857 4.03564 14.8178 4.03564H9.18569Z" />
                  <path d="M18.4214 6.25357V5.60714C18.4214 3.61786 16.8035 2 14.8142 2H9.18209C7.19281 2 5.57495 3.61786 5.57495 5.60714V6.25357H6.89638V5.60714C6.89638 4.34643 7.92138 3.32143 9.18209 3.32143H14.8142C16.075 3.32143 17.0999 4.34643 17.0999 5.60714V6.25357H18.4214Z" />
                </svg>
                <h4>醫療</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_439_6851)">
                    <path d="M2.17192 13.5859C2.40083 13.8148 2.77153 13.8148 3.00044 13.5859L4.00044 12.5855H5.62661C5.777 13.309 6.18794 13.957 6.79341 14.3855C6.74888 14.5641 6.72661 14.7461 6.72661 14.9293C6.72661 15.3625 6.85278 15.7641 7.05864 16.1125L5.8981 17.273H4.48364C4.15981 17.273 3.89771 17.5351 3.89771 17.859C3.89771 18.1828 4.15981 18.4449 4.48364 18.4449H5.55474V19.516C5.55474 19.8398 5.81685 20.1019 6.14067 20.1019C6.4645 20.1019 6.72661 19.8398 6.72661 19.516V18.1016L7.88716 16.941C8.2356 17.1469 8.63716 17.273 9.07036 17.273C9.25356 17.273 9.4356 17.2508 9.61411 17.2062C10.043 17.8121 10.6907 18.223 11.4141 18.373V19.9992L10.4141 20.9996C10.1852 21.2285 10.1852 21.5992 10.4141 21.8281C10.643 22.057 11.0137 22.057 11.2426 21.8281L12 21.0707L12.7575 21.8281C12.9864 22.057 13.3571 22.057 13.586 21.8281C13.8149 21.5992 13.8149 21.2285 13.586 20.9996L12.5856 19.9992V18.373C13.309 18.2226 13.9571 17.8117 14.3856 17.2062C14.5641 17.2508 14.7461 17.273 14.9293 17.273C15.3625 17.273 15.7641 17.1469 16.1125 16.941L17.2731 18.1016V19.516C17.2731 19.8398 17.5352 20.1019 17.859 20.1019C18.1829 20.1019 18.445 19.8398 18.445 19.516V18.4449H19.5161C19.8399 18.4449 20.102 18.1828 20.102 17.859C20.102 17.5351 19.8399 17.273 19.5161 17.273H18.1016L16.9411 16.1125C17.1469 15.7641 17.2731 15.3625 17.2731 14.9293C17.2731 14.7461 17.2508 14.5641 17.2063 14.3855C17.8122 13.9566 18.2231 13.309 18.3731 12.5855H19.9993L20.9997 13.5859C21.2286 13.8148 21.5993 13.8148 21.8282 13.5859C22.0571 13.357 22.0571 12.9863 21.8282 12.7574L21.0708 12L21.8282 11.2422C22.0571 11.0133 22.0571 10.6426 21.8282 10.4137C21.5993 10.1848 21.2286 10.1848 20.9997 10.4137L19.9993 11.4141H18.3731C18.2227 10.6906 17.8118 10.043 17.2063 9.61405C17.2508 9.43553 17.2731 9.2535 17.2731 9.0703C17.2731 8.6371 17.1469 8.23553 16.9411 7.8871L18.1016 6.72655H19.5161C19.8399 6.72655 20.102 6.46444 20.102 6.14061C20.102 5.81678 19.8399 5.55468 19.5161 5.55468H18.445V4.48358C18.445 4.15975 18.1829 3.89764 17.859 3.89764C17.5352 3.89764 17.2731 4.15975 17.2731 4.48358V5.89803L16.1125 7.05858C15.7641 6.85272 15.3625 6.72655 14.9293 6.72655C14.7461 6.72655 14.5641 6.74882 14.3856 6.79335C13.9567 6.18749 13.309 5.77655 12.5856 5.62655V4.00038L13.586 3.00038C13.8149 2.77147 13.8149 2.40077 13.586 2.17186C13.3571 1.94296 12.9864 1.94296 12.7575 2.17186L12 2.92928L11.2422 2.17186C11.0133 1.94296 10.6426 1.94296 10.4137 2.17186C10.1848 2.40077 10.1848 2.77147 10.4137 3.00038L11.4141 4.00038V5.62655C10.6907 5.77694 10.043 6.18788 9.61411 6.79335C9.4356 6.74882 9.25356 6.72655 9.07036 6.72655C8.63716 6.72655 8.2356 6.85272 7.88716 7.05858L6.72661 5.89803V4.48358C6.72661 4.15975 6.4645 3.89764 6.14067 3.89764C5.81685 3.89764 5.55474 4.15975 5.55474 4.48358V5.55468H4.48364C4.15981 5.55468 3.89771 5.81678 3.89771 6.14061C3.89771 6.46444 4.15981 6.72655 4.48364 6.72655H5.8981L7.05864 7.8871C6.85278 8.23553 6.72661 8.6371 6.72661 9.0703C6.72661 9.2535 6.74888 9.43553 6.79341 9.61405C6.18755 10.043 5.77661 10.6906 5.62661 11.4141H4.00044L3.00044 10.4141C2.77153 10.1851 2.40083 10.1851 2.17192 10.4141C1.94302 10.643 1.94302 11.0137 2.17192 11.2426L2.92935 12L2.17192 12.7574C1.94302 12.9863 1.94302 13.357 2.17192 13.5859ZM15.5161 11.4141C15.8395 11.4141 16.102 11.6765 16.102 12C16.102 12.3234 15.8395 12.5859 15.5161 12.5859C15.1926 12.5859 14.9301 12.3234 14.9301 12C14.9301 11.6765 15.1926 11.4141 15.5161 11.4141ZM12.0004 16.1016C11.677 16.1016 11.4145 15.8391 11.4145 15.5156C11.4145 15.1922 11.677 14.9297 12.0004 14.9297C12.3239 14.9297 12.5864 15.1922 12.5864 15.5156C12.5864 15.8391 12.3239 16.1016 12.0004 16.1016ZM12.0004 7.89843C12.3239 7.89843 12.5864 8.16092 12.5864 8.48436C12.5864 8.8078 12.3239 9.0703 12.0004 9.0703C11.677 9.0703 11.4145 8.8078 11.4145 8.48436C11.4145 8.16092 11.677 7.89843 12.0004 7.89843ZM12.0004 10.2422C12.9696 10.2422 13.7583 11.0308 13.7583 12C13.7583 12.9691 12.9696 13.7578 12.0004 13.7578C11.0313 13.7578 10.2426 12.9691 10.2426 12C10.2426 11.0308 11.0313 10.2422 12.0004 10.2422ZM9.07075 12C9.07075 12.3234 8.80825 12.5859 8.48481 12.5859C8.16138 12.5859 7.89888 12.3234 7.89888 12C7.89888 11.6765 8.16138 11.4141 8.48481 11.4141C8.80825 11.4141 9.07075 11.6765 9.07075 12Z" />
                    <path d="M12 12.5859C12.3236 12.5859 12.5859 12.3236 12.5859 12C12.5859 11.6764 12.3236 11.4141 12 11.4141C11.6764 11.4141 11.4141 11.6764 11.4141 12C11.4141 12.3236 11.6764 12.5859 12 12.5859Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_439_6851">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(2 2)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h4>癌症</h4>
              </a>
            </li>
            <li className="bg-primary-2">
              <a className="knowledge-labal-lg">
                <svg
                  className="icon mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.6641 11.416L18.633 8.38489V4.88348C18.633 4.25045 18.1199 3.73733 17.4861 3.73733C16.8522 3.73733 16.3403 4.25045 16.3403 4.88348V6.0922L14.0836 3.83544C12.9677 2.72038 11.0279 2.72199 9.91441 3.83746L2.33549 11.416C1.88817 11.8641 1.88817 12.5896 2.33549 13.0373C2.78321 13.4854 3.50989 13.4854 3.95721 13.0373L11.5353 5.45837C11.7824 5.21291 12.2172 5.21291 12.4631 5.45756L20.0424 13.0373C20.2673 13.2614 20.5604 13.3728 20.853 13.3728C21.1457 13.3728 21.44 13.2614 21.6641 13.0373C22.1118 12.5896 22.1118 11.8645 21.6641 11.416Z" />
                  <path d="M12.3981 7.63401C12.1781 7.41399 11.8212 7.41399 11.602 7.63401L4.93547 14.2985C4.8301 14.4039 4.77075 14.5472 4.77075 14.6974V19.5581C4.77075 20.6986 5.69566 21.6235 6.83615 21.6235H10.1365V16.5121H13.8628V21.6235H17.1636C18.3041 21.6235 19.229 20.6986 19.229 19.5581V14.6974C19.229 14.5476 19.17 14.4039 19.0643 14.2985L12.3985 7.63401H12.3981Z" />
                </svg>
                <h4>居家</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* section3 */}
      <div className="bg-lg-primary-2 pt-2 pb-6 py-lg-5">
        <div className="container knowledge-articles">
          <div className="d-flex flex-column flex-lg-row">
            {/* 主文章 */}
            <article className="primary-article position-relative mb-6 mb-lg-0">
              <h4 className="title-label">
                銀髮族健康指南:
                <br />
                適合的運動讓晚年更輕鬆
              </h4>
              <img
                src="./images/athletic-senior-woman-stretching-arm-park.png"
                alt=""
                className="rounded mb-2 mb-lg-5"
              />
              <p className="fs-lg-4 mb-5 up-to-4-lines up-to-3-lines-xxl">
                隨著年齡增長,銀髮族的健康維護變得越來越重要。
                <br className="d-none d-xxl-block" />
                運動不僅能增強肌肉力量,還能提升心肺功能,改善生活品質。隨著身體機能的逐漸減弱,適當的運動能幫助維持身體靈活性和生活的獨立...
              </p>
              <div className="d-flex justify-content-end">
                <a className="learn-more-H">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </article>
            {/* 文章列表 */}
            <div className="ms-lg-10 ms-xl-15 ms-xxl-17">
              <article className="article d-flex flex-column mb-article">
                <div className="d-flex">
                  <div className="me-4">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="title mb-2 mb-lg-4">
                          健康新趨勢! 2024年飲食生活新知識
                        </h5>
                        <p className="fs-7 fs-lg-5 lh-sm-down-1-2 up-to-3-lines up-to-2-lines-lg mb-2 mb-lg-4">
                          首先,發酵食品因其調節腸道環境、增免疫力的效果而備受期待。日本傳統飲食中的味噌、納豆和醃漬品等再...
                        </p>
                      </div>

                      {/* 電腦版 */}
                      <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex">
                            <img
                              src="./images/people.png"
                              alt=""
                              className="photo me-2"
                            />
                            <p className="fs-7 fs-lg-6 fs-xl-5">
                              李美蘭 2024/7/29
                            </p>
                          </div>
                          <a className="learn-more-H">
                            了解更多
                            <span className="material-symbols-outlined">
                              chevron_right
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./images/high-angle-plate-with-keto-diet-food-nuts.png"
                    alt=""
                    className="img mb-2 mb-lg-0"
                  />
                </div>

                {/* 手機版 */}
                <div className="d-flex justify-content-between align-items-center d-lg-none">
                  <div className="d-flex">
                    <img
                      src="./images/people.png"
                      alt=""
                      className="photo me-2"
                    />
                    <p className="fs-7 fs-lg-6 fs-xl-5">李美蘭 2024/7/29</p>
                  </div>
                  <a className="learn-more-H">
                    了解更多
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
              <article className="article d-flex flex-column mb-article">
                <div className="d-flex">
                  <div className="me-4">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="title mb-2 mb-lg-4">輕鬆掌握手機技能</h5>
                        <p className="fs-7 fs-lg-5 lh-sm-down-1-2 up-to-3-lines up-to-2-lines-lg mb-2 mb-lg-4">
                          掌握手機基本技能可以顯著提升生活便利。學會開關機、解鎖手機,以及撥打電話和發送短短信是基礎。下載和使用應...
                        </p>
                      </div>

                      {/* 電腦版 */}
                      <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex">
                            <img
                              src="./images/people.png"
                              alt=""
                              className="photo me-2"
                            />
                            <p className="fs-7 fs-lg-6 fs-xl-5">
                              王志強 2024/7/23
                            </p>
                          </div>
                          <a className="learn-more-H">
                            了解更多
                            <span className="material-symbols-outlined">
                              chevron_right
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./images/close-up-woman-using-mobile.png"
                    alt=""
                    className="img mb-2 mb-lg-0"
                  />
                </div>

                {/* 手機版 */}
                <div className="d-flex justify-content-between align-items-center d-lg-none">
                  <div className="d-flex">
                    <img
                      src="./images/people.png"
                      alt=""
                      className="photo me-2"
                    />
                    <p className="fs-7 fs-lg-6 fs-xl-5">王志強 2024/7/23</p>
                  </div>
                  <a className="learn-more-H">
                    了解更多
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
              <article className="article d-flex flex-column">
                <div className="d-flex">
                  <div className="me-4">
                    <div className="d-flex flex-column justify-content-between h-100">
                      <div>
                        <h5 className="title mb-2 mb-lg-4">
                          戰勝癌症,守護健康!
                        </h5>
                        <p className="fs-7 fs-lg-5 lh-sm-down-1-2 up-to-3-lines up-to-2-lines-lg mb-2 mb-lg-4">
                          癌症是一種細胞不正常增生的疾病,可能發生在人體的各個部位。隨著年齡增長,患癌風險也會增加。預防癌症,首先
                        </p>
                      </div>

                      {/* 電腦版 */}
                      <div className="d-none d-lg-block">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex">
                            <img
                              src="./images/people.png"
                              alt=""
                              className="photo me-2"
                            />
                            <p className="fs-7 fs-lg-6 fs-xl-5">
                              陳佳欣 2024/8/2
                            </p>
                          </div>
                          <a className="learn-more-H">
                            了解更多
                            <span className="material-symbols-outlined">
                              chevron_right
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./images/senior-people-sitting-couch-side-view.png"
                    alt=""
                    className="img mb-2 mb-lg-0"
                  />
                </div>

                {/* 手機版 */}
                <div className="d-flex justify-content-between align-items-center d-lg-none">
                  <div className="d-flex">
                    <img
                      src="./images/people.png"
                      alt=""
                      className="photo me-2"
                    />
                    <p className="fs-7 fs-lg-6 fs-xl-5">陳佳欣 2024/8/2</p>
                  </div>
                  <a className="learn-more-H">
                    了解更多
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* section4 */}
      <div className="container">
        {/* 分隔線 */}
        <picture>
          <source
            srcSet="./images/dividers/divider-sm.png"
            media="(max-width: 576px)"
            className="mt-6 mb-2"
          />
          <img
            src="./images/dividers/divider-lg.png"
            alt=""
            className="mt-lg-10 mb-lg-4"
          />
        </picture>

        {/* 最新文章 */}
        <h3 className="fs-3 fs-lg-1 mb-6 mb-lg-10">最新文章</h3>
        <div className="new-articles">
          <article className="d-flex mb-6 mb-xl-22">
            <div className="me-4">
              <h5 className="title mb-1 mb-lg-4">銀髮族必備三大營養素!</h5>
              <p className="fs-7 fs-lg-5 fs-xl-4 text-secondary-2 mb-1 mb-lg-4">
                2024/8/14 #飲食
              </p>
              <p className="fs-7 fs-lg-4 fs-xl-3 lh-sm-down-1-2 up-to-5-lines up-to-3-lines-lg up-to-4-lines-xl mb-lg-4">
                為了不讓自己被老所困,無論是50歲以上的熟齡族,或逾65歲的銀髮族,每日三餐應正確攝取營養,為自己打造出黃金營養力。營養師建議,熟齡族應特別注意三大必需營養素的攝取,包括蛋白質、鈣質與維生素D,這些...
              </p>
              <div className="d-none d-lg-block">
                <a className="learn-more-H-lg">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src="./images/omega-3-food-sources-omega-6-yellow-top-view.png"
                alt=""
                className="img mb-1 mb-md-2 mb-lg-0"
              />
              <div className="d-flex justify-content-end d-lg-none">
                <a className="learn-more-H">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article className="d-flex flex-lg-row-reverse mb-6 mb-xl-22">
            <div className="me-4 me-lg-0 ms-lg-4">
              <h5 className="title mb-1 mb-lg-4">銀髮族在家運動簡單4招</h5>
              <p className="fs-7 fs-lg-5 fs-xl-4 text-secondary-2 mb-1 mb-lg-4">
                2024/8/12 #醫療
              </p>
              <p className="fs-7 fs-lg-4 fs-xl-3 lh-sm-down-1-2 up-to-5-lines up-to-3-lines-lg up-to-4-lines-xl mb-lg-4">
                隨著年齡增長,老年人可能面臨健康問題、孤獨感和家庭關係變化。心理諮詢能有效支持他們應對這些挑戰,改善情緒、增進人際關係、適應生活變化,並增強自我認識。尋找專業的心理諮詢師,選擇合適的溝通風格...
              </p>
              <div className="d-none d-lg-block">
                <div className="d-flex justify-content-lg-end">
                  <a className="learn-more-H-lg">
                    了解更多
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img
                src="./images/senior-woman-training-home.png"
                alt=""
                className="img mb-1 mb-md-2 mb-lg-0"
              />
              <div className="d-flex justify-content-end d-lg-none">
                <a className="learn-more-H">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
          </article>
          <article className="d-flex">
            <div className="me-4">
              <h5 className="title mb-1 mb-lg-4">打造理想的生活空間</h5>
              <p className="fs-7 fs-lg-5 fs-xl-4 text-secondary-2 mb-1 mb-lg-4">
                2024/8/9 #居家
              </p>
              <p className="fs-7 fs-lg-4 fs-xl-3 lh-sm-down-1-2 up-to-5-lines up-to-3-lines-lg up-to-4-lines-xl mb-lg-4">
                打造舒適的居家環境需要考慮多方面因素。首先,根據需求進行空間規劃,合理布局以最大化空間功能。選擇統一的風格和合適的色彩,創造和諧的氛圍。注重舒適性和實用性,選擇舒適的家具並設置足夠的儲物空間...
              </p>
              <div className="d-none d-lg-block">
                <a className="learn-more-H-lg">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src="./images/smiling-woman-holding-book-sitting-with-her-granny-window-sill.png"
                alt=""
                className="img mb-1 mb-md-2 mb-lg-0"
              />
              <div className="d-flex justify-content-end d-lg-none">
                <a className="learn-more-H">
                  了解更多
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* 分隔線 */}
        <picture>
          <source
            srcSet="./images/dividers/divider-sm.png"
            media="(max-width: 576px)"
            className="mt-6 mb-2"
          />
          <img
            src="./images/dividers/divider-lg.png"
            alt=""
            className="mt-lg-10 mb-lg-1"
          />
        </picture>
      </div>

      {/* section5 */}
      {/* 手機版  */}
      <div className="d-lg-none">
        {/* <div className="container">
          <h3 className="fs-3 mb-6">好書推薦</h3>
        </div> */}
        {/* 手機版 Swiper */}
        {/* <div className="container container-swiper">
          <div className="swiper swiper-good-books">
            <div className="swiper-wrapper">
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">飲食健康</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage (2).png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">做自己的營養師</p>
                </a>
              </div>
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">運動保健</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage.png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">運動比你想的還輕鬆</p>
                </a>
              </div>
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">心靈成長</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage (1).png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">慢老2.0</p>
                </a>
              </div>
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">飲食健康</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage (2).png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">做自己的營養師</p>
                </a>
              </div>
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">運動保健</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage.png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">運動比你想的還輕鬆</p>
                </a>
              </div>
              <div className="swiper-slide book-card">
                <a
                  href="#"
                  className="bg-primary-1 rounded d-flex flex-column align-items-center"
                >
                  <p className="book-title fs-7">心靈成長</p>

                  <div className="bg-white rounded p-1 m-1">
                    <img
                      src="./images/books/getImage (1).png"
                      alt=""
                      className="book"
                    />
                  </div>
                  <p className="book-title fs-7">慢老2.0</p>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* 電腦版 Swiper */}
      <div className="bg-primary-2 d-none d-lg-block">
        <div className="container position-relative">
          {/* <h3 className="fs-1 pt-3 mb-10">好書推薦</h3>
          <div className="px-13">
            <div className="swiper swiper-good-books-lg pt-9 pb-35">
              <div className="swiper-wrapper">
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      飲食健康
                    </h5>
                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage (2).png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">做自己的營養師</h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        健康與日常飲食密切相關依每個人的 <br />
                        身高體重與身體狀況，一日需要的熱 <br />
                        量與六大類營養素皆不同，該怎麼計 <br />
                        算自每日的攝取量？面對各種食物， <br />
                        又該如何簡單判斷每一餐該吃多少？
                      </p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      運動保健
                    </h5>

                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage.png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">運動比你想的還輕鬆</h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        融入居家空間，兼顧方便性與安全性 <br />
                        的律動運動，突破年齡、體能狀態、 <br />
                        時空環境的「無差別待遇」、無壓、
                        <br />
                        無痛、
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          0
                        </span>
                        運動傷害，讓負擔變享受，
                        <br />
                        不僅合乎人性，更能打破的惰性！
                      </p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      心靈成長
                    </h5>

                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage (1).png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">
                        慢老{" "}
                        <span className="horizontal-tb">
                          2<br />.<br />0
                        </span>
                      </h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          30
                        </span>
                        多歲就渾身疼痛？
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          40
                        </span>
                        多歲就忘東忘 <br />西 ？
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          50
                        </span>
                        多歲就全身衰弱 ？慢老
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          2.0
                        </span>
                        ， <br />
                        升級六大科學的新主張、新觀點，幫 <br />
                        助你聰明應對各種老化痛點。你可能 <br />
                        活得比想像更久，但你準備好了嗎？
                      </p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      飲食健康
                    </h5>
                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage (2).png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">做自己的營養師</h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        健康與日常飲食密切相關依每個人的 <br />
                        身高體重與身體狀況，一日需要的熱 <br />
                        量與六大類營養素皆不同，該怎麼計 <br />
                        算自每日的攝取量？面對各種食物， <br />
                        又該如何簡單判斷每一餐該吃多少？
                      </p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      運動保健
                    </h5>

                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage.png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">運動比你想的還輕鬆</h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        融入居家空間，兼顧方便性與安全性 <br />
                        的律動運動，突破年齡、體能狀態、 <br />
                        時空環境的「無差別待遇」、無壓、
                        <br />
                        無痛、
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          0
                        </span>
                        運動傷害，讓負擔變享受，
                        <br />
                        不僅合乎人性，更能打破的惰性！
                      </p>
                    </div>
                  </a>
                </div>
                <div className="swiper-slide book-card slide-padding">
                  <a className="good-book position-relative">
                    <h5 className="book-category fs-2 fw-bold lh-1-2 vertical-rl bg-white m-0 px-3 pt-2 pb-1 rounded letter-spacing">
                      心靈成長
                    </h5>

                    <div className="bg-white rounded p-1 m-1">
                      <img
                        src="./images/books/getImage (1).png"
                        alt=""
                        className="book"
                      />
                    </div>
                    <div className="book-intro vertical-rl letter-spacing-1 bg-white rounded px-4 py-5">
                      <h6 className="fs-4 fw-bold m-0 ms-5">
                        慢老{" "}
                        <span className="horizontal-tb">
                          2<br />.<br />0
                        </span>
                      </h6>
                      <p className="book-intro-text fs-7 lh-1-8 m-0">
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          30
                        </span>
                        多歲就渾身疼痛？
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          40
                        </span>
                        多歲就忘東忘 <br />西 ？
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          50
                        </span>
                        多歲就全身衰弱 ？慢老
                        <span className="horizontal-tb letter-spacing-0 lh-1-2">
                          2.0
                        </span>
                        ， <br />
                        升級六大科學的新主張、新觀點，幫 <br />
                        助你聰明應對各種老化痛點。你可能 <br />
                        活得比想像更久，但你準備好了嗎？
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* Swiper navigation */}
          {/* <div className="swiper-book-next">
            <span className="material-symbols-outlined"> arrow_forward_ios </span>
          </div>
          <div className="swiper-book-prev">
            <span className="material-symbols-outlined ps-3"> arrow_back_ios</span>
          </div> */}
        </div>
      </div>
      <div className="mb-20 mb-lg-36"></div>
    </>
  );
}
