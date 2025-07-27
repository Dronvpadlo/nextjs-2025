import Image from "next/image";
import styles from "./page.module.css";
import MenuComponent from "@/app/menu/menuComponent";

export default function Home() {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            Home
        </div>
  );
}
