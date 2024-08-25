import { motion } from "framer-motion";
import { links } from "./data";
import { perspective, slideIn } from "./anim";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="flex flex-col justify-between cursor-none  h-full box-border pt-[100px] pb-[50px] px-10">
      <div className="flex gap-2.5 flex-col">
        {links.map((link, i) => {
          const { title, to } = link;
          return (
            <div
              key={`b_${i}`}
              className=" perspective: 120px;
  perspective-origin: bottom  "
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a
                  href={to}
                  className="no-underline cursor-none hover:underline text-[black] text-[26px]"
                >
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex justify-center items-center pt-10">
        <motion.img
          width={100}
          height={100}
          variants={slideIn}
          initial="initial"
          animate="enter"
          exit="exit"
          src={"/public/namedLogo.png"}
        ></motion.img>
      </motion.div>
    </div>
  );
}
