// You can explore the built-in icon families and icons on the web at:
import { Ionicons } from "@expo/vector-icons";
import React from "react";

// https://icons.expo.fyi/
export default function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}