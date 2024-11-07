import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const Logo = ({ width = "159", height = "51" }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 159 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_1_114)">
        <Path d="M9.50494 0H0V24.3419H9.50494V0Z" fill="#011B33" />
        <Path
          d="M28.495 28.6887V41.4199C25.1214 41.4148 21.8876 40.0714 19.5035 37.6845C17.1193 35.2976 15.7796 32.0623 15.7783 28.6887H28.495Z"
          fill="#011B33"
        />
        <Path
          d="M28.4956 12.171C28.4956 18.3289 23.5403 23.4194 17.1023 24.2453C16.5046 24.319 15.903 24.3561 15.3008 24.3564V4.89928e-06C15.9032 -0.000501298 16.5049 0.0382186 17.1023 0.115919C23.5548 0.922486 28.4956 6.01787 28.4956 12.171Z"
          fill="#011B33"
        />
        <Path
          d="M53.7662 34.6853L49.4577 26.8652H48.2478V34.6853H43.2017V13.9695H51.671C53.3038 13.9695 54.6908 14.2547 55.8318 14.8252C56.9926 15.3958 57.8582 16.1827 58.4287 17.186C58.9992 18.1697 59.2845 19.2714 59.2845 20.4911C59.2845 21.8682 58.891 23.0978 58.1041 24.1798C57.3368 25.2619 56.1958 26.0291 54.681 26.4816L59.4615 34.6853H53.7662ZM48.2478 23.2945H51.3759C52.3005 23.2945 52.9891 23.0683 53.4416 22.6158C53.9137 22.1633 54.1498 21.524 54.1498 20.6977C54.1498 19.9108 53.9137 19.2911 53.4416 18.8386C52.9891 18.3861 52.3005 18.1599 51.3759 18.1599H48.2478V23.2945ZM77.9743 26.1865C77.9743 26.6587 77.9448 27.1505 77.8858 27.662H66.4655C66.5442 28.685 66.8688 29.4719 67.4393 30.0228C68.0295 30.5539 68.7476 30.8195 69.5935 30.8195C70.8526 30.8195 71.7281 30.2884 72.2199 29.226H77.5907C77.3152 30.308 76.8136 31.2818 76.0857 32.1475C75.3774 33.0131 74.4823 33.6918 73.4003 34.1836C72.3183 34.6755 71.1084 34.9214 69.7706 34.9214C68.1574 34.9214 66.7212 34.5771 65.4622 33.8885C64.2031 33.2 63.2194 32.2163 62.5112 30.9376C61.803 29.6588 61.4488 28.1637 61.4488 26.4521C61.4488 24.7405 61.7931 23.2454 62.4817 21.9666C63.1899 20.6879 64.1736 19.7042 65.4326 19.0156C66.6917 18.3271 68.1377 17.9828 69.7706 17.9828C71.3641 17.9828 72.7806 18.3172 74.02 18.9861C75.2594 19.655 76.2234 20.6092 76.9119 21.8486C77.6202 23.088 77.9743 24.534 77.9743 26.1865ZM72.8101 24.8586C72.8101 23.9929 72.515 23.3044 71.9248 22.7929C71.3346 22.2814 70.5969 22.0256 69.7116 22.0256C68.8656 22.0256 68.1475 22.2715 67.5574 22.7634C66.9868 23.2552 66.6327 23.9536 66.495 24.8586H72.8101ZM85.6826 12.8481V34.6853H80.6364V12.8481H85.6826ZM88.3361 26.4226C88.3361 24.7307 88.6509 23.2454 89.2804 21.9666C89.9296 20.6879 90.8051 19.7042 91.9068 19.0156C93.0085 18.3271 94.2381 17.9828 95.5955 17.9828C96.6775 17.9828 97.6612 18.209 98.5465 18.6615C99.4515 19.114 100.16 19.7239 100.671 20.4911V12.8481H105.717V34.6853H100.671V32.3245C100.199 33.1115 99.5203 33.741 98.635 34.2131C97.7694 34.6853 96.7562 34.9214 95.5955 34.9214C94.2381 34.9214 93.0085 34.5771 91.9068 33.8885C90.8051 33.1803 89.9296 32.1868 89.2804 30.9081C88.6509 29.6096 88.3361 28.1145 88.3361 26.4226ZM100.671 26.4521C100.671 25.193 100.317 24.1995 99.6088 23.4716C98.9203 22.7437 98.0743 22.3797 97.071 22.3797C96.0677 22.3797 95.2119 22.7437 94.5037 23.4716C93.8151 24.1798 93.4708 25.1635 93.4708 26.4226C93.4708 27.6817 93.8151 28.685 94.5037 29.4326C95.2119 30.1605 96.0677 30.5244 97.071 30.5244C98.0743 30.5244 98.9203 30.1605 99.6088 29.4326C100.317 28.7047 100.671 27.7112 100.671 26.4521ZM114.414 20.9633C115.004 20.0583 115.742 19.3501 116.627 18.8386C117.513 18.3074 118.496 18.0418 119.578 18.0418V23.3831H118.191C116.932 23.3831 115.988 23.6585 115.359 24.2093C114.729 24.7405 114.414 25.6848 114.414 27.0423V34.6853H109.368V18.2189H114.414V20.9633ZM129.486 34.9214C127.873 34.9214 126.417 34.5771 125.118 33.8885C123.84 33.2 122.826 32.2163 122.079 30.9376C121.351 29.6588 120.987 28.1637 120.987 26.4521C120.987 24.7602 121.361 23.2749 122.108 21.9961C122.856 20.6977 123.879 19.7042 125.177 19.0156C126.476 18.3271 127.932 17.9828 129.545 17.9828C131.158 17.9828 132.614 18.3271 133.912 19.0156C135.211 19.7042 136.234 20.6977 136.981 21.9961C137.729 23.2749 138.103 24.7602 138.103 26.4521C138.103 28.144 137.719 29.6391 136.952 30.9376C136.204 32.2163 135.171 33.2 133.853 33.8885C132.555 34.5771 131.099 34.9214 129.486 34.9214ZM129.486 30.5539C130.45 30.5539 131.266 30.1998 131.935 29.4916C132.624 28.7834 132.968 27.7702 132.968 26.4521C132.968 25.134 132.634 24.1208 131.965 23.4126C131.315 22.7043 130.509 22.3502 129.545 22.3502C128.561 22.3502 127.745 22.7043 127.096 23.4126C126.446 24.1011 126.122 25.1143 126.122 26.4521C126.122 27.7702 126.436 28.7834 127.066 29.4916C127.715 30.1998 128.522 30.5539 129.486 30.5539ZM145.826 20.5501C146.318 19.7829 146.996 19.1632 147.862 18.691C148.728 18.2189 149.741 17.9828 150.902 17.9828C152.259 17.9828 153.489 18.3271 154.59 19.0156C155.692 19.7042 156.558 20.6879 157.187 21.9666C157.836 23.2454 158.161 24.7307 158.161 26.4226C158.161 28.1145 157.836 29.6096 157.187 30.9081C156.558 32.1868 155.692 33.1803 154.59 33.8885C153.489 34.5771 152.259 34.9214 150.902 34.9214C149.761 34.9214 148.747 34.6853 147.862 34.2131C146.996 33.741 146.318 33.1311 145.826 32.3835V42.5349H140.78V18.2189H145.826V20.5501ZM153.026 26.4226C153.026 25.1635 152.672 24.1798 151.964 23.4716C151.275 22.7437 150.42 22.3797 149.397 22.3797C148.393 22.3797 147.537 22.7437 146.829 23.4716C146.141 24.1995 145.796 25.193 145.796 26.4521C145.796 27.7112 146.141 28.7047 146.829 29.4326C147.537 30.1605 148.393 30.5244 149.397 30.5244C150.4 30.5244 151.256 30.1605 151.964 29.4326C152.672 28.685 153.026 27.6817 153.026 26.4226Z"
          fill="#011B33"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_114">
          <Rect width="159" height="50.0796" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Logo;