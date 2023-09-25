export const styles = {
  container: `
        flex 
        flex-col 
        bg-white 
        p-4
        w-[90%]
        mx-auto
        md:grid 
        md:grid-cols-10 
    `,
  containerWrapper: `
        md:col-span-5 
        lg:col-span-6
    `,
  detailsAndTitleContainer: `
        flex 
        flex-col 
        my-6
        mx-4
        lg:flex-row 
        lg:items-center
    `,
  title: `
        font-black 
        text-3xl 
        break-words
        mr-3  
        pb-3 
        lg:pb-0
    `,
  detailsContainer: `
        flex 
        flex-wrap
    `,
  detail: `
        bg-primary-blue 
        flex 
        items-center 
        text-white 
        rounded 
        font-bold 
        text-xs 
        p-1.5 
        m-1
    `,
  companyIcon: `
        w-7 
        h-7 
        stroke-2 
        stroke-primary-blue
  `,
  companyContainer: `
        flex 
        flex-row 
        text-primary-blue 
        items-center 
        mx-4 
        mb-4
    `,
  companyTitle: `
        ml-1 
        font-bold
    `,
  description: `
        text-grey 
        mx-4 
        mb-4
    `,
  skillsContainer: `
        mx-4 
        mb-4 
        flex 
        flex-wrap
    `,
  button: `
        border
        w-32 
        font-bold 
        py-1.5 
        mx-4 
        mb-4
        border-primary-blue
        text-primary-blue
        bg-white
        border-primary-blue
        duration-500
        hover:text-white 
        hover:bg-primary-blue 
    `,
  imageContainer: `
        flex 
        my-8 
        justify-center
        md:col-start-7 
        md:col-span-3 
        md:items-center 
        md:my-0 
    `,
  image: `
        flex 
        self-center
    `,
  mobileImage: `
        w-32 
        md:w-32
    `,
  desktopImage: `
        w-full
        h-auto
        xs:w-1/2  
        md:w-[20rem]
    `
};
