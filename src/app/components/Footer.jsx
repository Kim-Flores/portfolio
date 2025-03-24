const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="pb-3 sticky bottom-0 left-0 flex  h-14 sm:h-40 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-[#0c172a] dark:via-[#0c172a] lg:static lg:h-auto lg:w-auto lg:bg-none">
      &copy; {currentYear} Kim Flores. All Rights Reserved.
    </div>
  );
};

export default Footer;
