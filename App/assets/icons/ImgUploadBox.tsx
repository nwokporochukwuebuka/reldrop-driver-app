import { useNavigation } from "@react-navigation/native";
import { height, screenWidth } from "App/constants/Sizes";
import React from "react";
import { View } from "react-native";
import { Svg, G, Path, Defs, Rect, ClipPath, Circle } from "react-native-svg";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

const ImgUploadBox = ({ width = "44", height = "44" }) => {
  return (
    <Svg
      width={screenWidth(1)}
      height="138"
      viewBox={`0 0 ${screenWidth(1)} 138`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="346" height="138" rx="17" fill="#F5F5F5" />
      <Rect
        x="10.75"
        y="11.75"
        width="324.5"
        height="114.5"
        rx="10.25"
        fill="white"
        stroke="#BCBCBC"
        stroke-width="0.5"
        stroke-dasharray="5 5"
      />
      <Path
        d="M160.734 77.5459L160.709 77.5713C160.367 76.8239 160.152 75.9753 160.063 75.0379C160.152 75.9626 160.392 76.7986 160.734 77.5459Z"
        fill="#ADADAD"
      />
      <Path
        d="M168.867 66.6146C170.532 66.6146 171.881 65.2649 171.881 63.6C171.881 61.935 170.532 60.5853 168.867 60.5853C167.202 60.5853 165.852 61.935 165.852 63.6C165.852 65.2649 167.202 66.6146 168.867 66.6146Z"
        fill="#ADADAD"
      />
      <Path
        d="M177.974 56H167.359C162.749 56 160 58.7487 160 63.3593V73.9739C160 75.3546 160.241 76.5579 160.709 77.5713C161.799 79.9779 164.129 81.3333 167.359 81.3333H177.974C182.585 81.3333 185.333 78.5846 185.333 73.9739V63.3593C185.333 58.7487 182.585 56 177.974 56ZM183.269 69.3C182.281 68.4513 180.685 68.4513 179.697 69.3L174.427 73.8219C173.439 74.6706 171.843 74.6706 170.855 73.8219L170.425 73.4673C169.525 72.6819 168.094 72.6059 167.081 73.2899L162.343 76.4693C162.065 75.7599 161.9 74.9366 161.9 73.9739V63.3593C161.9 59.7873 163.787 57.9 167.359 57.9H177.974C181.546 57.9 183.433 59.7873 183.433 63.3593V69.4393L183.269 69.3Z"
        fill="#ADADAD"
      />
    </Svg>
  );
};

export default ImgUploadBox;
