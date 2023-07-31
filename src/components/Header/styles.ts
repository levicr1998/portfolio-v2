export const styles = {
  header: `
        flex 
        items-center 
        justify-between 
        w-full 
        p-6 
        mx-auto
    `,
  emoij: `
        w-14 
        h-14 
        xs:w-20 
        xs:h-20
    `,
  ul: `
        hidden 
        md:flex
    `,
  li: `
        text-white/70  
        px-2 
        font-bold 
        ease-in-out 
        duration-300
        hover:text-white/100
    `,
  menuButton: `
        flex 
        md:hidden
    `,
  menuExitButtonContainer: `
        flex 
        justify-end
  `,
  menuExitIcon: `
        text-primary-blue 
        w-6 
        h-6 
        p-4
  `,
  mobileMenuList: `
        flex 
        flex-col 
        items-center
`,
  mobileMenuListItem: `
        py-2
  `,
  mobileMenuListItemLink: `
        text-primary-blue 
        px-2 
        font-bold 
        text-xl
  `,
  menuButtonIcon: `
        text-white 
        w-6 
        h-6
    `,
  mobileMenu: `
        fixed 
        bg-white 
        w-full 
        h-full 
        top-0 
        left-0 
        ease-in-out 
        duration-300 
        overflow-x-hidden 
        md:hidden
  `
};
