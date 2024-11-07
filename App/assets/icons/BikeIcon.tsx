import { useNavigation } from "@react-navigation/native";
import { height } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const BikeIcon = ({ width = "44", height = "44" }) => {
  const navigation = useNavigation();

  return (
    <Svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="20" cy="20" r="20" fill="white" />
      <Path
        d="M25.9416 21.6161H26.229C26.5156 21.6161 26.7479 21.3838 26.7479 21.0972V20.5649C26.7479 20.2783 26.5156 20.046 26.229 20.046C26.0838 20.046 25.9523 19.9602 25.8944 19.8271L24.8334 17.4003C24.8672 17.4027 26.1121 17.4066 26.1121 17.4066C26.5306 17.4066 26.8716 17.0661 26.8716 16.6472V15.4291C26.8716 15.0106 26.531 14.6696 26.1121 14.6696H24.9345C24.555 14.6696 24.2038 14.8334 23.9471 15.1043C23.4377 15.1114 23.0251 15.5267 23.0251 16.0381C23.0251 16.381 23.2129 16.6783 23.4889 16.8409C23.4889 17.057 23.5267 17.2724 23.6113 17.474C25.0668 20.9385 23.1487 23.1295 22.5633 23.6905C22.4664 23.7834 22.3408 23.8338 22.0133 23.8338H18.7133C18.5798 23.8338 18.4483 23.7838 18.3546 23.6889C17.2381 22.5606 17.6593 21.6543 18.0759 21.1677C18.2715 20.9393 18.5463 20.8078 18.8393 20.7393C19.1542 20.6657 19.3873 20.4913 19.5578 20.2937C19.8436 19.9622 19.5928 19.4464 19.1554 19.4464H16.7633V15.4574H9.39592V19.0527C9.39592 19.487 9.74907 19.8401 10.1833 19.8401H12.8101C10.7081 20.6929 9.54081 22.7362 9.04789 23.8374C8.93136 24.098 9.02584 24.5665 9.34947 24.5665H16.055C16.1613 24.5665 16.2652 24.5992 16.3526 24.6602L17.1672 25.2307C17.2546 25.2917 17.3581 25.3244 17.4648 25.3244H22.4152C22.5708 25.3244 22.7184 25.2547 22.8168 25.1342L25.5404 21.8063C25.6389 21.6858 25.7861 21.6161 25.9416 21.6161Z"
        fill="#09A5DB"
      />
      <Path
        d="M15.1885 12.8173H10.9707C9.22112 12.8173 9.39592 14.6704 9.39592 14.6704H16.7633C16.7633 14.6704 16.9786 12.8173 15.1885 12.8173Z"
        fill="#09A5DB"
      />
      <Path
        d="M27.4184 24.9208C27.4897 25.0389 27.5334 25.1763 27.5334 25.3244C27.5334 25.7578 27.1818 26.1094 26.7483 26.1094C26.4582 26.1094 26.2074 25.95 26.0716 25.7161C25.9747 25.7421 25.8751 25.7602 25.7735 25.7602H24.1471C24.3558 27.009 25.4412 27.9649 26.7487 27.9649C28.2042 27.9649 29.3889 26.7803 29.3889 25.3248C29.3889 25.1889 29.3763 25.0543 29.3558 24.9212H27.4188L27.4184 24.9208Z"
        fill="#09A5DB"
      />
      <Path
        d="M12.8617 26.1094C12.4381 26.1094 12.0955 25.7736 12.0798 25.3539H10.2227C10.2388 26.796 11.4156 27.9645 12.8617 27.9645C14.3077 27.9645 15.4845 26.7956 15.5003 25.3539H13.6436C13.6278 25.7736 13.2849 26.1094 12.8617 26.1094Z"
        fill="#09A5DB"
      />
      <Path
        d="M27.7991 21.6161H27.4271C27.0546 22.5271 26.0692 22.4035 26.0692 22.4035L23.9664 24.9728H25.7735C25.8609 24.9728 25.9456 24.9413 26.0121 24.8842L26.781 24.222C26.8471 24.1649 26.9318 24.1334 27.0196 24.1334H29.6326C29.8503 24.1334 30.0263 23.9425 29.9968 23.7267C29.7653 22.0389 27.8212 21.6161 27.7991 21.6161Z"
        fill="#09A5DB"
      />
    </Svg>
  );
};

export default BikeIcon;