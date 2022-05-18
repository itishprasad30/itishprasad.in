import * as React from "react";
import Link from "next/link";
import cn from "clsx";
import useDelayedRender from "use-delayed-render";

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );
};

export default MobileMenu;
