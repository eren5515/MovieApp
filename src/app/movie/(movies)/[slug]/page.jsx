import {Movie} from "../../Movie";





function Index({params})  {
   return (
      <Movie targetMovie={params.slug}></Movie>
   )
}

export default Index;