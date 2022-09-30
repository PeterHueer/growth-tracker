import React from "react";

type NavItemProps = {
  link: string;
  text: string;
  highlightedText?: string;
  textHasWhitespace?: boolean;
};

function NavItem({
  link,
  highlightedText,
  text,
  textHasWhitespace = true,
}: NavItemProps) {
  return (
    <a href={link} className="group">
      <span className="text-">
        {highlightedText && (
          <span className="ease-in-oust transition-all group-hover:text-teal-500">
            {highlightedText}
          </span>
        )}
        {textHasWhitespace && <span className="px-1" />}
        {text}
      </span>
      <span className="block h-0.5 max-w-0 bg-teal-500 transition-all duration-500 group-hover:max-w-full"></span>
    </a>
  );
}

export default NavItem;
