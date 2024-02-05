const courseData=[{
    id:1,
    slug:"top-sw",
    description:"top-sw-house"
},
{
    id:2,
    slug:"top-company",
    description:"top-sw-companies"
}]
export default function Course({params}:{params:{slug:string}}){
    const selectCourse=courseData.filter((item)=>item.slug===params.slug)
    return(
        <main>{selectCourse[0]?.description}
        <h2>hello</h2></main>
    )
}