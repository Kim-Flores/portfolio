const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  return (
    <div className="pb-8 fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      &copy; {currentYear} Kim Flores. All Rights Reserved.
    </div>
  );
};

export default Footer;
