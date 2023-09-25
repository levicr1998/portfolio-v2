export const styles = {
  container: `
        flex 
        items-center 
        flex-col 
        w-full 
        relative
  `,
  contactContainer: `
        bg-white
        w-[90%]
        xs:w-[400px]
        md:w-[600px]
        absolute 
        -top-32 
        flex 
        flex-col 
        p-12 
        drop-shadow-2xl
  `,
  contactTitle: `
        text-3xl 
        font-extrabold 
        text-primary-blue 
        mb-2
  `,
  contactSubtitle: `
        mb-6
  `,
  contactButton: `
        group
        border 
        text-primary-blue 
        font-bold 
        w-full
        py-2.5 
        transition-colors
        duration-500
        hover:bg-primary-blue 
        hover:text-white
        sm:w-56 
  `,
  contactButtonTitle: `
        ml-1.5  
        duration-500 
        group-hover:text-white
        group-hover:-translate-x-4
  `,
  sendContainer: `
        flex 
        items-center 
        justify-center
  `,
  sendIcon: `
        duration-500
        group-hover:translate-x-3 
  `,
  footer: `
        flex 
        items-center 
        justify-end
        flex-col 
        w-full
        bg-white
        h-80
        py-4
    `,
  ul: `
    flex 
    flex-row 
    items-center
    `,
  li: `
    px-2 
    transition 
    hover:cursor-pointer 
    hover:transform 
    hover:-translate-y-4 
    hover:scale-110
    `,
  img: `
    scale-[0.75]
    w-12 
    h-12
    `,
  copyrightText: `   
    text-primary-blue 
    mt-3
    `
};
