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
        w-1/2 
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
        my-4
  `,
  contactSubtitle: `
        my-4
  `,
  contactButton: `
        border 
        border-primary-blue 
        text-primary-blue 
        font-bold 
        w-56 
        py-2.5 
        hover:bg-primary-blue 
        hover:text-white
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
    `,
  copyrightText: `   
    text-primary-blue 
    mt-3
    `
};
